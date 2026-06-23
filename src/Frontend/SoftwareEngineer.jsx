import "./ServiceDetail.css";

function SoftwareEngineer() {
  return (
    <div className="detail-page">
      <div className="detail-card">
       
        
        <p className="description">
          We create professional websites, college projects, business websites,
          frontend and backend applications with modern design and clean development.
        </p>

        <h2 className="project-title">
          Example: Online Doctor Appointment & Management System
        </h2>

        

        <a href="/tamanna work.jpg.jpeg" target="_blank" rel="noreferrer">
          <img
            src="/tamanna work.jpg.jpeg"
            alt="Tamanna Work"
            className="project-image software-image"
          />
        </a>

        <p className="tech-stack">
          Technologies Used: HTML, CSS, JavaScript, React.js, Node.js,
          Express.js, MongoDB, REST APIs
        </p>
      

        <h2 className="project-title">
         "Value is discoverd through knowledge , not assumptions."
        </h2>



      </div>
    </div>
  );
}

export default SoftwareEngineer;