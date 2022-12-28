import React, { Component } from "react";
import "../SASS/Layout/_header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container header__content">
          <div className="header__main d-flex justify-content-between align-items-center">
            <div className="header__logo">
              <a href="#">Start Bootstrap</a>
            </div>
            <nav className="header__nav d-flex">
              <a href="#" className="active">
                Home
              </a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
