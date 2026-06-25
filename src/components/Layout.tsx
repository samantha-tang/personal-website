import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import "/src/App.css"

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <main style={{ padding: "1rem" }}>
          <Outlet />
      </main>
    </div>
  );
};

export default Layout;