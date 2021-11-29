import React from "react";
import "../../css/Layout.css";

const SideBar = () => {
  return (
    <div className="main-side-bar">
      <div className="menu-item">
        <div className="menu-item-active">
          <i className="fa fa-dashboard fa-3x"></i>
        </div>
      </div>
      <div className="menu-item">
        <i className="fa fa-cogs fa-3x"></i>
      </div>
      <div className="menu-item">
        <i className="fa fa-bar-chart fa-3x"></i>
      </div>
      <div className="menu-item">
        <i className="fa fa-sign-out fa-3x"></i>
      </div>
    </div>
  );
};

export default SideBar;
