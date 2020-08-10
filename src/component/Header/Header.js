import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='menu'>
          <div>
            <h2>Period Tracker</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
