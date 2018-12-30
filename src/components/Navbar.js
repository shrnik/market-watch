import React from "react";
import './navBar.css'

export const Navbar = () => {
  return (
    <React.Fragment>
      <div className="topnav-left">
        <div className="instruments">
          <span className="heading">NIFTY 50 </span>
          <span className="value">10859.00 </span>
          <span className="change">2.00 %</span>
        </div>
        <div className="instruments">
          <span className="heading">SENSEX </span>
          <span className="value">10859.00 </span>
          <span className="change">2.00 % </span>
        </div>
        </div>
      <div className="topnav right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </React.Fragment>
  );
};
