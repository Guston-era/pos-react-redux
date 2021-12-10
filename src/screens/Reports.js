import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import AccountSettings from "./subscreens/AccountSettings";
import Brands from "./subscreens/Brands";
import Categories from "./subscreens/Categories";
import ExpenseReport from "./subscreens/ExpenseReport.js";
import GeneralSettings from "./subscreens/GeneralSettings";
import SalesReport from "./subscreens/SalesReport";
import StatusReport from "./subscreens/StatusReport";

const Reports = () => {
  return (
    <div style={{ color: "white" }}>
      <Header />
      <div className="flexed-content">
        <SideBar active="reports" />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<StatusReport />} />
            <Route path="/sales" element={<SalesReport />} />
            <Route path="/expense" element={<ExpenseReport />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Reports;
