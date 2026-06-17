import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About Bhavani Engineers</h1>

        <img
          src="/office work.jpg.jpeg"
          alt="Bhavani Engineers Office"
          className="about-photo"
        />

        <div className="about-details">
          <h2>Srihari N</h2>

          <p>
            AMIE (I), M.Sc (Val), PGDOV, FIV, CE, PE
          </p>

          <p>
            Chartered Engineer & IBBI Govt. Registered Valuer
          </p>

          <h3>Empanelled Valuer</h3>
          <p>
            SBI, KGB, PNB, UBI, KBL, CANARA BANK, HDFC, CBI, BOI,
            DBS, IDFC & FEDERAL BANK
          </p>

          <h3>Main Branch</h3>
          <p>
            No. 1833/33,Opp.SRS Super Market, Beside St. Joseph's Convent, Gokula Road,
            Hunsur - 571105, Dist: Mysore
          </p>

          <h3>Branch Office</h3>
          <p>
            #51/3, 2nd Cross, Gundurao Nagar, Ooty Road, 
             Mysore-570025.
            
          </p>
          
        <img
          src="/banner.jpg.jpeg"
          alt="Bhavani Engineers Office"
          className="about-photo"
        />


          <h3>Contact</h3>
          <p>
            📞 <a href="tel:7760060308">7760060308</a>
          </p>

          <p>
            📧{" "}
            <a href="mailto:srihari00009999@gmail.com">
              srihari00009999@gmail.com
            </a>
          </p>
          <div className="map-section">
  <h2>Our Location</h2>

  <iframe
    src="https://www.google.com/maps?q=Bhavani%20Engineers%20Hunsur&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Bhavani Engineers Location"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  );
}

export default About;