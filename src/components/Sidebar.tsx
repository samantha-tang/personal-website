import React from "react";
import dividerImg from "/src/assets/sine-divider.png"
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Profile from "./Profile"

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Profile />
      <img src={dividerImg} className="divider" width="230" height="30" alt="The topologist's sine curve" />
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;