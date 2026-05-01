const Services = () => {
    return (
      <section id="services" className="services hidden">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>Comprehensive digital solutions tailored for modern brands.</p>
        </div>
        
        <div className="service-grid">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Data Analytics" className="service-img" />
            <div className="service-content">
              <h3>Digital Strategy</h3>
              <p>Data-driven Facebook and Google ad campaigns designed to maximize your reach and conversion rates.</p>
            </div>
          </div>
  
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Web Code" className="service-img" />
            <div className="service-content">
              <h3>Web Development</h3>
              <p>High-performance, responsive websites built with React and optimized for flawless user experience.</p>
            </div>
          </div>
  
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Brand Design" className="service-img" />
            <div className="service-content">
              <h3>Brand Identity</h3>
              <p>Cohesive visual design, logos, and digital assets that make your business stand out from the competition.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;