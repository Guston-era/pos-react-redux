import React from "react";
import { Link } from "react-router-dom";
import "../../css/Layout.css";

const MiniSideBarSettings = ({ active }) => {
  return (
    <div className="mini-side-bar">
      <h6>
        <i className="fa fa-cog"></i> Reports
      </h6>
      <Link to="/reports/" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "status" && "menu-item-active"
          }`}
        >
          Status Report
        </div>
      </Link>
      <Link to="/reports/sales" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "sales" && "menu-item-active"
          }`}
        >
          Sales Report
        </div>
      </Link>
      <Link to="/reports/expense" className="menu-item">
        <div
          className={`inner-menu-item ${
            active === "expense" && "menu-item-active"
          }`}
        >
          Expense Report
        </div>
      </Link>
    </div>
  );
};

export default MiniSideBarSettings;
