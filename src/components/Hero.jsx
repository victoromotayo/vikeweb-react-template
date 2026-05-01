const Hero = () => {
    return (
      <header className="hero hidden">
        <div className="hero-content">
          <div className="hero-badge">Award-Winning Digital Agency</div>
          <h1>Digital Experiences That <span className="highlight">Convert.</span></h1>
          <p>We build fast, responsive websites and launch data-driven campaigns designed to scale your business efficiently.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary hero-btn">Start Your Project</a>
            <a href="#services" className="btn-secondary hero-btn">View Services</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Modern web design workspace" 
            className="hero-image"
          />
          <div className="experience-card">
             <img 
               src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
               alt="Lead Developer" 
               className="exp-avatar"
             />
             <div>
               <p className="exp-number">100+</p>
               <p className="exp-text">Projects Delivered</p>
             </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Hero;