import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      {/* Left side: Logo */}
      <img
        className="logo"
        src="images/logo.jpeg"
        alt="Logo"
        width="60"
        height="60"
      />

      {/* Right side: Nav links inside rounded container */}
      <div className="navbar-menu">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#destination" className="nav-item">Destination</a>
        <a href="#blog" className="nav-item">Blog</a>
        <a href="#packages" className="nav-item">Packages</a>
      </div>
    </div>
  );
}

export default NavBar;