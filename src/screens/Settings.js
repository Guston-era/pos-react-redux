import React from "react";
import Header from "../components/layout/Header";
import MiniSideBar from "../components/layout/MiniSideBar";
import SideBar from "../components/layout/SideBar";

const Settings = () => {
  return (
    <div style={{ color: "white" }}>
      <Header />
      <div className="flexed-content">
        <SideBar active="settings" />

        <MiniSideBar />
      </div>
    </div>
  );
};

export default Settings;
