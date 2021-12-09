import React from "react";

const Header = ({ rightText, searchBar }) => {
  return (
    <div className="main-header">
      <div className="header-logo-section">
        <p>gPOS</p>
      </div>
      <div
        className="header-main-area"
        style={{ width: `${rightText ? "55%" : "90%"}` }}
      >
        <div className="header-user-info">
          <p>Gustone Alwanga</p>
          <span>Tuesday, 2 Dec 2021</span>
        </div>
        <div className="header-client-info">
          <span>REBS POS</span>
        </div>
        {searchBar && (
          <div className="header-search-bar">
            <input
              type="text"
              className="form-control fa"
              placeholder="&#xf002; Search here ..."
            />
          </div>
        )}
      </div>
      {rightText && (
        <div className="header-right-area">
          <h4>{rightText}</h4>
        </div>
      )}
    </div>
  );
};

export default Header;
