import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import AccountSettings from "./subscreens/AccountSettings";
import Brands from "./subscreens/Brands";
import Categories from "./subscreens/Categories";
import GeneralSettings from "./subscreens/GeneralSettings";
import ReceiveItems from "./subscreens/ReceiveItems";
import ShopItems from "./subscreens/ShopItems";

const Settings = () => {
  return (
    <div style={{ color: "white" }}>
      <Header />
      <div className="flexed-content">
        <SideBar active="settings" />
        <div style={{ flex: 1, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<GeneralSettings />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/shop-items" element={<ShopItems />} />
            <Route path="/receive-items" element={<ReceiveItems />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;
