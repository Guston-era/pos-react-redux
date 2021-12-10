import React from "react";
import { Link } from "react-router-dom";
import "../../css/Layout.css";

const MiniSideBarSettings = ({ active }) => {
  return (
    <div className="mini-side-bar">
      <h6>
        <i className="fa fa-cog"></i> SETTINGS
      </h6>
      <Link to="/settings/" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "general" && "menu-item-active"
          }`}
        >
          General
        </div>
      </Link>
      <Link to="/settings/categories" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "categories" && "menu-item-active"
          }`}
        >
          Categories
        </div>
      </Link>
      <Link to="/settings/brands" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "brands" && "menu-item-active"
          }`}
        >
          Brands
        </div>
      </Link>
      <Link to="/settings/shop-items" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "shop-items" && "menu-item-active"
          }`}
        >
          Shop Items
        </div>
      </Link>
      <Link to="/settings/receive-items" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "receive-items" && "menu-item-active"
          }`}
        >
          Receive Items
        </div>
      </Link>
      <Link to="/settings/account" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "account" && "menu-item-active"
          }`}
        >
          My Account
        </div>
      </Link>
    </div>
  );
};

export default MiniSideBarSettings;
