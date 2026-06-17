import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <img src="/Managing director.jpeg" alt="Civil Vastu" />
          
             <h1>Sri Hari N</h1>

            <h2>Managing Director</h2>     

          <h3>Civil & Vastu Consultancy</h3>
           <h3>Real Estate Consultancy</h3>
          <p>Govt. Registered Valuer</p>
          <p>Get expert civil engineering and vastu consultation.</p>
          <Link to="/civil-vastu">View Details</Link>
        </div>

        <div className="service-card">
          <img src="/Staff1.jpg.jpeg" alt="Real Estate" />
          <h1>Syed Wasim</h1>
          
            <h2>Administrative Officer</h2>

          

            <h3>Valuation Assistant</h3>

            <h3>Building Plan & Estimate</h3>
            <h3>Real Estate Consultancy</h3>
          

          <p>Professional valuation for land, buildings and banks</p>
          <p>Property guidance, buying, selling and site support.</p>
          
          <Link to="/valuation">View Details</Link>
        </div>

        <div className="service-card">
          <img src="/Staff4.jpg.jpeg" alt="Software Engineering" />
          <h1>Tamanna</h1>
          <h2>Software Engineer</h2>
          <h3>Website Developer -Frontend & Backend</h3>
          <h3>Real Estate Consultancy</h3>

          <p>Professional website developer both frontend & backend </p>
             <p> We provide projects for college students.</p>
          <Link to="/software-engineer">View Details</Link>
        </div>

        <div className="service-card">
          <img src="/Staff2.jpg.jpeg" alt="Architecture" />
          <h1>Dhanyashree</h1>
           <h2>Architectural Consultant</h2>

          <h3>Architectural Aspects 2D & 3D Design</h3>
           <h3>Land & Building(CMC)License</h3>
          <h3>Valuation Assistant</h3>

          <p>We assist clients in understanding and obtaining necessary approvals and documentation related to land and building development. </p>
          <Link to="/architecture-design">View Details</Link>
        </div>

        <div className="service-card">
          <img src="/Staff3.jpg.jpeg" alt="Building Plan" />

          <h1>Syed Saif</h1>
           <h2>Senior Valuer Assistant</h2>
           

          <h3>Building Plan & Estimation</h3>
           <h3>Architecture 2D & 3D Design</h3>
        
<p>Building planning, quantity calculation and estimate.</p>
          <Link to="/building-plan">View Details</Link>
        </div>

      </div>

      <div className="bank-section">
        <h2>Empanelled Valuer With Major Banks</h2>
        <p>
          SBI • KGB • PNB • UBI • KBL • CANARA • HDFC • DBS • IDFC • CBI  • BOI • FEDERAL BANK 
        </p>
      </div>
    </div>
  );
}

export default Services;