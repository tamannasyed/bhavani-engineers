import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay">

        <h1>BHAVANI ENGINEERS</h1>

        <h2>
          Civil Engineers • Architects • Valuers • Vastu Experts
        </h2>

        <p className="tagline">
          We deliver reliable and efficient services
        </p>

        <p className="home-desc">
          We provide reliable civil engineering, architectural planning,
          valuation, vastu, software engineering and real estate with
          <span> 30+ years </span>
          of professional experience.
        </p>

        <div className="service-buttons">
          <Link to="/building-plan">🏢 Building Plan & Estimate</Link>
          <Link to="/architecture-design">📐 Architectural Consultancy</Link>
          <Link to="/valuation">🏠 Valuation of Property</Link>
          <Link to="/software-engineer">💻 Software Engineering</Link>
          <Link to="/civil-vastu">🧭 Civil & Vastu Consultancy</Link>
          <Link to="/real-estate">🏘️ Real Estate</Link>
        </div>

        <div className="why-box">
          <p>✓ 30+ Years Experience</p>
          <p>✓ 20,000+ Projects Completed</p>
          <p>✓ Empanelled with Major Banks</p>
          <p>✓ Trusted Professional Service</p>
        </div>

        <div className="home-actions">
          <Link to="/about" className="main-btn">Explore Services</Link>
          <Link to="/contact" className="outline-btn">Contact Us Today</Link>
        </div>
      <div className="contact-wrapper">
  <div className="contact-box">
    <a href="tel:7760060308" className="phone-line">
      <span className="call-icon">📞</span>
      <span>7760060308</span>
    </a>

    <a href="tel:8892968623" className="phone-line">
      <span className="call-icon">📞</span>
      <span>8892968623</span>
    </a>

    <a href="tel:9538676155" className="phone-line">
      <span className="call-icon">📞</span>
      <span>9538676155</span>
    </a>

    <a href="mailto:srihari00009999@gmail.com" className="phone-line">
      <span className="call-icon">✉️</span>
      <span>srihari00009999@gmail.com</span>
    </a>

    <div className="phone-line">
      <span className="call-icon">📍</span>
      <span>Hunsur</span>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Home;
