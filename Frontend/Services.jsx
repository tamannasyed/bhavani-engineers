import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <img src="/Managing director.jpeg" alt="Civil Vastu" />
          
             <h2>Sri Hari N</h2>

            <h2>Managing Director</h2>    
          <h2>AMICE(I),M.SC.(Val),PGDQV,FIV,CE,PE</h2>

          <h2>Charted Engineer & IBBI</h2>
          <p>Govt. Registered Valuer</p>
         
         
        </div>

        <div className="service-card">
          <img src="/Staff1.jpg.jpeg" alt="Real Estate" />
          <h2>Syed Wasim(DCE)</h2>
          
            <h2>Administrative Officer
            </h2>

          

            
       
        
        </div>

        <div className="service-card">
          <img src="/Staff4.jpg.jpeg" alt="Software Engineering" />
          <h2>Tamanna(BCA)</h2>
          <h2>Software Engineer</h2>
         

         
        
        </div>

        <div className="service-card">
          <img src="/Staff2.jpg.jpeg" alt="Architecture" />
          <h2>Dhanyashree</h2>
          <h2>Architectural Consultant</h2>

       
        </div>

        <div className="service-card">
          <img src="/Staff3.jpg.jpeg" alt="Building Plan" />

          <h2>Syed Saif</h2>
           <h2>Senior Valuer Assistant</h2>
           

         
        
          
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
