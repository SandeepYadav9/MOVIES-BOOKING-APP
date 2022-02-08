import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img
            src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"
            alt="Movies-logo"
            className="image"
          />
        </div>
        <div className="upcomming-Movies">
        <span>Upcoming Movies</span>
        </div>
       
      </div>
    );
  }
}
export default Header;
