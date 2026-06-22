import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">

      {/* TOP BAR */}
      <header className="top-navbar">
        <div className="logo-name">Bhavani Engineers</div>

        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* ONLY ONE RIGHT SIDE MENU */}
      <div className={menuOpen ? "side-menu active" : "side-menu"}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
<Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
<Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

      </div>

      {/* HOME SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>BHAVANI ENGINEERS</h1>
          <h3>Civil Engineers • Architects • Valuers • Vastu Experts</h3>

          <p className="tagline">
            We deliver reliable and efficient services
          </p>

          <p className="hero-text">
            We provide reliable civil engineering, architectural planning,
            valuation, vastu, software engineering and real estate services
            with <b> 30+ years of professional experience.</b>
          </p>

         <div className="hero-contact-box">
  <a href="tel:+917760060308">📞7760060308 </a>
  <a href="tel:+918892968623">📞 8892968623</a>
  <a href="tel:+919110656332">📞 9110656332</a>
  <a href="mailto:srihari00009999@gmail.com">✉️ srihari00009999@gmail.com</a>
</div>
          <div className="hero-stats">
            <span>✔ 30+ Years Experience</span>
            <span>✔ 20,000+ Projects Completed</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <h2>About Bhavani Engineers</h2>

        <p>
          Bhavani Engineers is a professional civil engineering and valuation
          consultancy office. We provide trusted services in civil consultancy,
          building planning, property valuation, real estate guidance and vastu
          consultancy.
        </p>

        <p>
          Our aim is to give every client accurate, transparent and timely
          professional service with proper technical guidance.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>

        <p className="section-subtitle">
          Professional engineering and consultancy services under one roof
        </p>
        <div className="services-grid">
  <Link to="/building-plan" className="service-card">
    <div className="service-icon">🏢</div>
    <h3>Building Plan & Estimate</h3>
    <p>
      Preparation of building plans, cost estimation, technical drawings
      and construction guidance.
    </p>
  </Link>

  <Link to="/architecture-design" className="service-card">
    <div className="service-icon">📐</div>
    <h3>Architectural Consultancy</h3>
    <p>
      Professional architectural planning for residential, commercial
      and industrial buildings.
    </p>
  </Link>

  <Link to="/valuation" className="service-card">
    <div className="service-icon">🏠</div>
    <h3>Valuation of Property</h3>
    <p>
      Land and building valuation reports for banks, loans, legal purpose
      and property documentation.
    </p>
  </Link>

  <Link to="/civil-vastu" className="service-card">
    <div className="service-icon">🕉️</div>
    <h3>Civil & Vastu Consultancy</h3>
    <p>
      Practical vastu guidance and civil engineering advice for homes,
      offices and commercial buildings.
    </p>
  </Link>

  <Link to="/real-estate" className="service-card">
    <div className="service-icon">🏘️</div>
    <h3>Real Estate</h3>
    <p>
      Guidance for property buying, selling, market value, documents
      and real estate development.
    </p>
  </Link>

  <Link to="/software-engineer" className="service-card">
    <div className="service-icon">💻</div>
    <h3>Software Engineering</h3>
    <p>
      Website, digital support and software-based professional solutions
      for business growth.
    </p>
  </Link>
</div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>

        <p>
          For civil consultancy, valuation, real estate and vastu consultancy,
          contact Bhavani Engineers.
        </p>

        <div className="contact-buttons">
          <a href="tel:+917892132401">📞 Call Now</a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bhavani+Engineers"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 View Location
          </a>
        </div>
      </section>

      {/* COPYRIGHT */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Bhavani Engineers. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
