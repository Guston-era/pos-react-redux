import React from "react";
import "../../css/subscreens.css";
import MiniSideBar from "../../components/layout/MiniSideBar";
import Header from "../../components/layout/Header";

const GeneralSettings = () => {
  return (
    <div className="flexed-content">
      <MiniSideBar />
      <p> I am the general settings</p>
    </div>
  );
};

export default GeneralSettings;
