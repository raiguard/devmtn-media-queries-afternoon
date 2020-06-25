import React, { Component } from "react";
import logo from "./navbar-logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false
    };
  }

  toggleMobileNav = () => {
    console.log("FOO!");
    this.setState({ showMobileNav: !this.state.showMobileNav });
  };

  render() {
    return (
      <div className="app">
        <header>
          <div className="container navbar-container">
            <div className="navbar-row">
              <img src={logo} className="navbar-logo" alt="Start Bootstrap" />
              <nav className="desktop-nav-container">
                <span className="nav-button">SERVICES</span>
                <span className="nav-button">PORTFOLIO</span>
                <span className="nav-button">ABOUT</span>
                <span className="nav-button">TEAM</span>
                <span className="nav-button">CONTACT</span>
              </nav>
              <div className="mobile-nav-hamburger" onClick={this.toggleMobileNav}>
                MENU
              </div>
            </div>
            {this.state.showMobileNav ? (
              <div className="mobile-nav-container">
                <span className="mobile-nav-button nav-button">SERVICES</span>
                <span className="mobile-nav-button nav-button">PORTFOLIO</span>
                <span className="mobile-nav-button nav-button">ABOUT</span>
                <span className="mobile-nav-button nav-button">TEAM</span>
                <span className="mobile-nav-button nav-button">CONTACT</span>
              </div>
            ) : null}
          </div>
        </header>
        <div className="welcome-section">
          <div className="container welcome-container">
            <span className="welcome-upper-text">Welcome to our Studio!</span>
            <span className="welcome-lower-text">IT'S NICE TO MEET YOU</span>
            <div className="welcome-learn-more">TELL ME MORE</div>
          </div>
        </div>
      </div>
    );
  }
}
