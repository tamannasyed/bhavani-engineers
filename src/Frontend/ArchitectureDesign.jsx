import "./ServiceDetail.css";

function VastuConsultancy() {
  return (
    <div className="detail-page">
      <div className="detail-card">
        <h2 className="project-title">Vastu Consultancy</h2>

        <h3 className="services-heading">Our Services</h3>

        <div className="service-content">
          <div className="service-item">
            <h4>Significance of Vastu:-</h4>

            <p>
              Vastu is the traditional Indian science of planning buildings
              according to directions, sunlight, airflow, and natural energy.
              Its merits include better ventilation, proper room placement,
              comfortable living, a positive atmosphere, efficient use of
              space, improved health, peace, prosperity, and increased property
              value.
            </p>

            <div className="service-item">
              <h4>  </h4>
              <p>We provide Vastu consultancy for proposed and existing buildings, houses, plots, and land.
                 We carefully study the layout, directions, room positions, entrances, and surrounding environment.</p>
             </div>

               <div className="service-item"> 
               <h4>  </h4>
              <p>When a building does not follow Vastu principles, it may affect the comfort,
              peace, and well-being of the occupants. Without making major structural changes, we suggest suitable Vastu remedies 
              and energy-balancing devices. Our aim is to balance the energy of the built-up space, reduce negative influences,
                and improve positive energy for a peaceful and prosperous life.</p>
            </div>
          </div>
        </div>

        <h2 className="bottom-quote">
          “Balanced spaces create peaceful and comfortable living.”
        </h2>
      </div>
    </div>
  );
}

export default VastuConsultancy;