import React from "react";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-logo-section">
        <p>gPOS</p>
      </div>
      <div className="header-main-area">
        <div className="header-user-info">
          <p>Gustone Alwanga</p>
          <span>Tuesday, 2 Dec 2021</span>
        </div>
        <div className="header-client-info">
          <span>REBS POS</span>
        </div>
        <div className="header-search-bar">
          <input
            type="text"
            className="form-control fa"
            placeholder="&#xf002; Search here ..."
          />
        </div>
      </div>

      <div className="header-right-area">
        <h4>Shopping Cart</h4>
      </div>
    </div>
  );
};

export default Header;