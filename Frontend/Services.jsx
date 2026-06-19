import React from "react";
import "./Services.css";

const Services = () => {
  const managingDirector = {
    name: "Sri Hari N",
    role: "Managing Director",
    qualification1: "AMICE(I), M.Sc.(Val), PGDQV, FIV, CE, PE",
    qualification2: "Chartered Engineer,Civil & Vastu Consultancy & IBBI",
    qualification3: "Govt Registered Valuer",
    image: "/Managing director.jpeg",
  };

  const secondRowMembers = [
    {
      name: "Syed Saifulla",
      role: "Senior Valuer Consultant",
      image: "/Staff3.jpg.jpeg",
    },
    {
      name: "Dhanyashree",
      role: "Architectural Consultant",
      image: "/Staff2.jpg.jpeg",
    },
    {
      name: "Syed Wasim",
      role: "Administrative Officer",
      image: "/Staff1.jpg.jpeg",
    },
    
  ];

  const thirdRowMembers = [
   
    {
      name: "Tamanna",
      role: "Software Developer",
      image: "/Staff4.jpg.jpeg",
    },
     {
      name: "Rakshitha",
      role: "Valuer Consultant",
      image: "/Rakshu.jpg.jpeg",
    },
    {
      name: "Inchana",
      role: "Valuer Consultant",
      image: "/inchana.jpg.jpeg",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-heading">Our Services</h1>

        {/* First Row - Managing Director */}
        <div className="director-row">
          <div className="service-card director-card">
            <img
              src={managingDirector.image}
              alt={managingDirector.name}
              className="profile-image"
            />

            <h3>{managingDirector.name}</h3>
            <p>{managingDirector.role}</p>
            <p>{managingDirector.qualification1}</p>
            <p>{managingDirector.qualification2}</p>
            <p>{managingDirector.qualification3}</p>
          </div>
        </div>

        {/* Second Row - 3 Members */}
        <div className="members-row">
          {secondRowMembers.map((member, index) => (
            <div className="service-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="profile-image"
              />

              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* Third Row - 3 Members */}
        <div className="members-row">
          {thirdRowMembers.map((member, index) => (
            <div className="service-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="profile-image"
              />

              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* Bank Empanelment Box */}
        <div className="bank-box">
          <h2>Empanelled Valuer With Major Banks</h2>
          <p>
            SBI • KGB • PNB • UBI • KBL • CANARA • HDFC • DBS • IDFC • CBI •
            BOI • FEDERAL BANK
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
