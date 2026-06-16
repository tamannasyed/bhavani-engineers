import "./ServiceDetail.css";

function SoftwareEngineer() {
  return (
    <div className="detail-page">
      <div className="detail-card">
        <h1>Software Engineer</h1>

        <img src="/Staff4.jpg.jpeg" alt="Tamanna" className="profile-photo" />

        <h2 className="staff-name">Tamanna</h2>
      <p className="qualification">
        🎓 Bachelor of Computer Applications (BCA)
      </p>
        <p className="designation">Website Developer - Frontend & Backend</p>
        <p className="designation">Project Developer</p>
           <p className="designation">Real Estate Consultancy</p>

        <p className="description">
          We create professional websites, college projects, business websites,
          frontend and backend applications with modern design and clean development.
        </p>

        <h2 className="project-title">
          Example: Online Doctor Appointment & Management System
        </h2>

        <video className="project-video" controls>
          <source src="/tamanna-vedio.mp4.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>

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
      
<div className="button-group">

  <a
    href="https://razorpay.me/@tamanna5738"
    target="_blank"
    rel="noreferrer"
    className="pay-btn"
  >
    💳 Pay Now
  </a>

  <a href="tel:9110656332" className="call-btn">
    📞 Call Now
  </a>

  <a
    href="mailto:tamannasyed61@gmail.com"
    className="email-btn"
  >
    📧 Email Me
  </a>
  
        <h2 className="project-title">
         "Value is discoverd through knowledge , not assumptions."
        </h2>


</div>
      </div>
    </div>
  );
}

export default SoftwareEngineer;