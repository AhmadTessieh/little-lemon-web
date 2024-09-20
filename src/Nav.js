import React, { useState } from 'react';
import './Nav.css';
import logo from './images/Logo.png';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="Nav">
      <img id="logo" src={logo} alt="Logo" />
      <button className="menu-toggle" onClick={handleToggle}>
        ☰
      </button>
      <ul id="navlist" className={isMobile ? 'active' : ''}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
