import React from "react";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";

const Reports = () => {
  return (
    <div>
      <Header />
      <div className="flexed-content">
        <SideBar active="reports" />I am th Reports
      </div>
    </div>
  );
};

export default Reports;
