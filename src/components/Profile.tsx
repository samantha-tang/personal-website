import React from "react";
import { useEffect, useRef, useState } from "react";
import profileImg from "/src/assets/profile.png";
import { MailIcon, GitHubIcon } from "./Elements";
import "./Sidebar.css";

interface OverlayProps {
  imgRef: React.RefObject<HTMLImageElement | null>
  pausedRef: React.RefObject<boolean>
}

function SineOverlay({ imgRef, pausedRef}: OverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phaseRef = useRef(0)
  const rafRef = useRef<number>(0)

  const [amp] = useState(10)
  const [speed] = useState(0.1)

  useEffect(() => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img) return

    const observer = new ResizeObserver(() => {
      const padding = 100
      canvas.width = img.clientWidth + padding * 2
      canvas.height = img.clientHeight + padding * 2
    })

    observer.observe(img)

    const ctx = canvas.getContext("2d")!

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      const midX = W / 2
      const midY = H / 2
      ctx.clearRect(0, 0, W, H)

      ctx.beginPath()
      ctx.strokeStyle = "white"
      ctx.lineWidth = 1.5
      const steps = 1000
      const tMax = Math.PI * 2

      for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * tMax
        const r = (5 + Math.sin(5 * theta + phaseRef.current)) * (2 + 0.3*Math.cos(phaseRef.current))
        const x = midX + r * Math.cos(theta) * amp
        const y = midY + r * Math.sin(theta) * amp
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
    const loop = () => {
      if (!pausedRef.current) {
        phaseRef.current -= speed
      }
      draw()
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => { observer.disconnect(), cancelAnimationFrame(rafRef.current)}
  }, [amp, speed])

  return (
    <canvas ref={canvasRef} style={{
    position: "absolute",
    top: "-50px",
    left: "-50px",
    width: "calc(100% + 100px)",
    height: "calc(100% + 100px)",
    zIndex: 1,
    pointerEvents: "none"
    }} />
  )
}

export default function Profile() {
  const imgRef = useRef<HTMLImageElement>(null)
  const pausedRef = useRef(false)

  return (
    <div className="profile">
      <div className="profile-overlay">
          <img
          ref={imgRef}
          src={profileImg}
          onClick={() => { pausedRef.current = !pausedRef.current }}
          style={{ display: "block" }}
          width="170" height="170" alt="A photo of my cat, Primrose" />
          <SineOverlay imgRef={imgRef} pausedRef={pausedRef}
          />
      </div>
      <h2>Samantha Tang</h2>
      <div className="iconbar"><MailIcon /><GitHubIcon /></div>
    </div>
  );
};