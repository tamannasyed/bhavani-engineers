import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <h2 className="nav-title">Bhavani Engineers</h2>

      {open && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;