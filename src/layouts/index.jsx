import React from "react";
import Sidebar from "../components/Sidebar";
import Taskbar from "../components/Taskbar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Taskbar />
    </div>
  );
}

export default Layout;
