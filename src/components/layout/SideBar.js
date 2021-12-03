import React from "react";
import { Link } from "react-router-dom";
import "../../css/Layout.css";

const SideBar = ({ active }) => {
  return (
    <div className="main-side-bar">
      <Link to="/dashboard" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "dashboard" && "menu-item-active"
          }`}
        >
          <i className="fa fa-dashboard fa-3x"></i>
        </div>
      </Link>
      <Link to="/settings" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "settings" && "menu-item-active"
          }`}
        >
          <i className="fa fa-cogs fa-3x"></i>
        </div>
      </Link>
      <Link to="/reports" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "reports" && "menu-item-active"
          }`}
        >
          <i className="fa fa-bar-chart fa-3x"></i>
        </div>
      </Link>
      <div className="menu-item">
        <div className={`inner-menu-item`}>
          <i className="fa fa-sign-out fa-3x"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
