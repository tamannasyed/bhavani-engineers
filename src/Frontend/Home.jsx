import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* HOME HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>BHAVANI ENGINEERS</h1>

          <h3>Civil Engineers • Architects • Valuers • Vastu Experts</h3>

          <p className="tagline">
            We deliver reliable and efficient services
          </p>

          <p className="hero-text">
            We provide reliable civil engineering, architectural planning,
            valuation, vastu, software engineering, project report, bank loan and real estate services.
            
          </p>

          {/* CONTACT DETAILS INSTEAD OF SERVICE BOXES */}
          <div className="hero-contact-box">
            <a href="tel:+917760060308">📞 7760060308</a>
            <a href="tel:+918892968623">📞 8892968623</a>
            <a href="tel:+919110656332">📞 9110656332</a>
            <a href="mailto:srihari00009999@gmail.com">
              ✉️ srihari00009999@gmail.com
            </a>
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
          Bhavani Engineers is a trusted civil engineering and consultancy firm established in 1996. With nearly 30 
          years of experience in the civil engineering field, we have built a strong reputation for providing reliable,
           accurate, and practical solutions for residential, commercial & industrial construction projects.<br />
<br />
We offer comprehensive civil consultancy services, guiding our clients from the initial planning and approval 
stage through construction and successful project completion. Our team combines technical knowledge, field experience, 
attention to detail, and professional commitment to deliver solutions that meet the functional, aesthetic, regulatory,
 and budgetary requirements of every client.<br />
 <br />
 At Bhavani Engineers, we understand that constructing a home is an important investment and a major milestone for every client.
 We therefore approach each project with responsibility, transparency, technical accuracy, and personal attention.<br />
 <br />
Our objective is to provide dependable civil engineering solutions that ensure proper planning, quality construction,
 cost efficiency, and long-term value. From the first discussion and design stage to estimation, approval, supervision, 
 and final completion, Bhavani Engineers remains committed to supporting clients at every stage of their construction journey.<br />
<br />
With decades of practical experience and a customer-focused approach, Bhavani Engineers continues 
to be a reliable partner for residential planning, construction consultancy, valuation, quantity surveying, billing, and supervision services.

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
            <div className="service-icon">🕉️</div>
            <h3>Vastu Consultancy</h3>
            <p>
              Vastu consultancy provides expert guidance for planning buildings according to directions, natural light, airflow, 
              and traditional Vastu principles.
            </p>
          </Link>

          <Link to="/valuation" className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Valuation of Property</h3>
            <p>
              Land and building valuation reports for banks, loans, legal
              purpose and property documentation.
            </p>
          </Link>

          <Link to="/civil-vastu" className="service-card">
            <div className="service-icon">📐</div>
            <h3>Civil & Architectural Consultancy</h3>
            <p>
              Civil and architectural consultancy provides expert guidance in building planning, design, approvals, estimation,
               construction, and project supervision.
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
          <a href="tel:+917760060308">📞 Call Now</a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bhavani+Engineers+Hunsur"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 View Location
          </a>
        </div>

       
          <div className="branch-details">
            <div className="branch-card">
              <h2>Main Branch</h2>

              <p>
                No. 1833/33, Opp. SRS Super Market,
                <br />
                Beside St. Joseph’s Convent,
                <br />
                Gokula Road,
                <br />
                Hunsur - 571105,
                <br />
                Dist: Mysore.
              </p>
            </div>

            <div className="branch-card">
              <h2>Branch Office</h2>

              <p>
                # 51/3, 2nd Cross,
                <br />
                Gundurao Nagar,
                <br />
                Ooty Road,
                <br />
                Mysore - 570025.
              </p>
            </div>
          </div>

          <div className="contact-number-wrapper">
            <div className="contact-numbers">
              <h2>Contact Numbers</h2>

              <p>
                <strong>Mobile 1:</strong>{" "}
                <a href="tel:+917760060308">7760060308</a>
              </p>

              <p>
                <strong>Mobile 2:</strong>{" "}
                <a href="tel:+918892968623">8892968623</a>
              </p>

              <p>
                <strong>Mobile 3:</strong>{" "}
                <a href="tel:+919110656332">9110656332</a>
              </p>

            </div>
          </div>
      </section>

      {/* COPYRIGHT */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Bhavani Engineers. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;