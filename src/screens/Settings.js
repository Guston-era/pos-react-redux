import React from "react";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";

const Settings = () => {
  return (
    <div style={{ color: "white" }}>
      <Header />
      <div className="flexed-content">
        <SideBar active="settings" />

        <p>Settings</p>
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Settings;
