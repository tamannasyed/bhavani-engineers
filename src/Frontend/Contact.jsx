import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">

        <h1>Contact Us</h1>

        <p className="contact-text">
          Get in touch with Bhavani Engineers for Civil Engineering,
          Architecture, Valuation, Vastu, Real Estate and Software Services.
        </p>

        <div className="contact-buttons">

          <a href="tel:7760060308" className="contact-btn call-btn">
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917760060308"
            target="_blank"
            rel="noreferrer"
            className="contact-btn whatsapp-btn"
          >
            💬 WhatsApp
          </a>

          <a
            href="mailto:srihari00009999@gmail.com"
            className="contact-btn email-btn"
          >
            📧 Email Us
          </a>
 <a
  href="https://maps.google.com/?q=Bhavani+Engineers+Hunsur"
  target="_blank"
  rel="noopener noreferrer"
  className="location-btn"
>
  📍 View Location
</a>

        </div>

      </div>
    </div>
  );
}

export default Contact;