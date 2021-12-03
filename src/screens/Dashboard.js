import React from "react";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import "../css/App.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flexed-content">
        <SideBar active="dashboard" />
        <div className="sales-content-area">Irun this era</div>
        <div className="cart-content-area"></div>
      </div>
    </div>
  );
};

export default Dashboard;
