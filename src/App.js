import React from "react";
import logo from "./navbar-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <div className="navbar-container">
          <img src={logo} className="navbar-logo" alt="Start Bootstrap" />
          <nav>
            <span className="nav-button">SERVICES</span>
            <span className="nav-button">PORTFOLIO</span>
            <span className="nav-button">ABOUT</span>
            <span className="nav-button">TEAM</span>
            <span className="nav-button">CONTACT</span>
          </nav>
          <div className="mobile-nav-hamburger">MENU</div>
        </div>
      </header>
      <div className="welcome-section"></div>
    </div>
  );
}

export default App;
