import { useEffect, useRef, useState, useMemo } from "react";
import { Slider, IconButton } from "@mui/material";
import CasinoIcon from '@mui/icons-material/Casino';

function radialSweep(vertices: [number, number][]): [number, number][] {
  const length = vertices.length
  const x_coord = vertices.reduce((sum, v) => sum + v[0], 0) / length
  const y_coord = vertices.reduce((sum, v) => sum + v[1], 0) / length
  const centroid = { x: x_coord, y: y_coord }

  const angles: number[] = vertices.map(([x, y]) =>
    Math.atan2(y - centroid.y, x - centroid.x)
  )

  return angles
    .map((val, i) => ({ val, i }))
    .sort((a, b) => a.val - b.val)
    .map(({ i }) => vertices[i])
}

export default function SkeletonVisual() {
  const [seed, setSeed] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [vertexRange, setVertexRange] = useState([3, 5])

  const vertexCount = useMemo(() =>
    Math.floor(Math.random() * (vertexRange[1] - vertexRange[0] + 1) + vertexRange[0])
  , [vertexRange, seed])

  const vertices = useMemo<[number, number][]>(() =>
    Array.from({ length: vertexCount }, (): [number, number] => [
      Math.random(),
      Math.random(),
    ])
  , [vertexCount, seed])

  const sorted = useMemo(() => radialSweep(vertices), [vertices])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const dpr = window.devicePixelRatio || 1
  
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const W = rect.width
    const H = rect.height

    ctx.clearRect(0, 0, W, H)
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1

    sorted.forEach(([x, y], i) => {
      i === 0 ? ctx.moveTo(x * W, y * H) : ctx.lineTo(x * W, y * H)
    })

    ctx.closePath()
    ctx.stroke()
  }, [sorted])

  return (
    <>
    <canvas ref={canvasRef} style={{ width: "100%", height: "500px" }} />
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
      <p style={{ margin: 0, whiteSpace: "nowrap" }}>Vertex range</p>
      <Slider
        value={vertexRange}
        onChange={(_, val) => setVertexRange(val as number[])}
        min={3} max={50} step={1}
        valueLabelDisplay="auto"
      />
      <IconButton onClick={() => setSeed(s => s + 1)}>
        <CasinoIcon/>
      </IconButton>
    </div>
    </>
  )
}