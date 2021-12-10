import React from "react";
import { Link } from "react-router-dom";
import "../../css/Layout.css";

const MiniSideBar = ({ active }) => {
  return (
    <div className="mini-side-bar">
      <h4>
        <i className="fa fa-bars"></i>
      </h4>
      <Link to="/dashboard" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "general" && "menu-item-active"
          }`}
        >
          General Settings
        </div>
      </Link>
      <Link to="/settings" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "settings" && "menu-item-active"
          }`}
        >
          Categories
        </div>
      </Link>
      <Link to="/settings" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "settings" && "menu-item-active"
          }`}
        >
          Brands
        </div>
      </Link>
      <Link to="/reports" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "reports" && "menu-item-active"
          }`}
        >
          Shop Items
        </div>
      </Link>
      <Link to="/reports" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "reports" && "menu-item-active"
          }`}
        >
          Account Settings
        </div>
      </Link>
    </div>
  );
};

export default MiniSideBar;
