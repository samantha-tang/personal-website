import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export function MailIcon(): React.JSX.Element {
  return (
    <a href="mailto:samanthaxytang03@gmail.com">
      <FaEnvelope className="icon" />
    </a>
  );
};

export function GitHubIcon(): React.JSX.Element {
  return (
    <a
      href="https://github.com/samantha-tang"
      target="_blank"
      rel="noopener noreferrer"
      className="icon">
      <FaGithub className="icon"
    />
    </a>
  );
};

export function ThemeSwitch() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme")
    if (saved) return saved === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })
  
  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? "dark" : "light"
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <Switch
    checked={dark}
    onChange={() => setDark(d => !d)}
    icon={<LightModeIcon style={{ fontSize: 18, color: "var(--saffron)" }} />}
    checkedIcon={<DarkModeIcon style={{ fontSize: 18, color: "var(--smoke)" }} />}
    sx={{
      width: 50,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: "4px",
        "&.Mui-checked": {
          transform: "translateX(24px)",
        },
      },
      "& .MuiSwitch-thumb": {
        width: 18,
        height: 18,
      },
      "& .MuiSwitch-track": {
        borderRadius: 13,
      },
    }}
  />
  )
}