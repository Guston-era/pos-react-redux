import React from "react";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-logo-section">
        <p>gPOS</p>
      </div>
      <div className="header-main-area">
        <div className="header-user-info">
          <span>Gustone Alwanga</span>
          <span>Tuesday, 2 Dec 2021</span>
        </div>
        <div className="header-client-info">
          <span>REBS POS</span>
        </div>
        <div className="header-search-bar">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="header-right-area">Right Section</div>
    </div>
  );
};

export default Header;
