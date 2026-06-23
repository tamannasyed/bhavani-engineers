import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <section className="contact-container">
          <h1>Contact Bhavani Engineers</h1>

          <p className="contact-subtitle">
            For civil consultancy, valuation, building plan, real estate and
            vastu consultancy, contact us.
          </p>

          <div className="contact-top-buttons">
            <a href="tel:+917760060308">📞 Call Now</a>

            <a href="mailto:srihari00009999@gmail.com">📧 Email Us</a>

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

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:srihari00009999@gmail.com">
                  srihari00009999@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;