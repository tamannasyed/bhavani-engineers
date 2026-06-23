import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="main-navbar">
        <div className="navbar-title">Bhavani Engineers</div>

        <button className="navbar-menu-btn" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </header>

      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className={menuOpen ? "navbar-side-menu active" : "navbar-side-menu"}>
        <button className="navbar-close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </>
  );
}

export default Navbar;