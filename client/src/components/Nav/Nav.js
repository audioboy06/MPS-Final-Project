import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
        <img src={require("../../images/MPS-logo.png")} alt="MPS Logo" height="64" width="64" margin-top="0"/>
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
