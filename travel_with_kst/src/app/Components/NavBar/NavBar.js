import React from 'react';
import Link from 'next/link';
import './NavBar.css';

const basePath = '/travel-with-KST';

function NavBar() {
  return (
    <div className="navbar-container">
      <img
        className="logo"
        src={`${basePath}/images/logo.jpeg`}
        alt="Logo"
        width={60}
        height={60}
      />

      {/* Right side: Nav links inside rounded container */}
      <div className="navbar-menu">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="#about" className="nav-item">About</Link>
        <Link href="/destination" className="nav-item">Destination</Link>
        <Link href="/blog" className="nav-item">Blog</Link>
        <Link href="/packages" className="nav-item">Packages</Link>
      </div>
    </div>
  );
}

export default NavBar;
