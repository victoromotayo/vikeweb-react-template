const About = () => {
    return (
      <section id="about" className="about hidden">
        <div className="about-container">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating" 
            />
          </div>
          <div className="about-content">
            <h2>Who We Are</h2>
            <p className="subtitle">Driven by data, inspired by design.</p>
            <p>
              At <strong>VikeWeb</strong>, we believe that your online presence should be your strongest asset. We are a team of dedicated developers, designers, and strategists committed to pushing the boundaries of what is possible on the web.
            </p>
            <p>
              Whether you are a local startup looking for your first landing page or an established enterprise needing a complete digital overhaul, we engineer solutions that look beautiful and perform flawlessly.
            </p>
            <ul className="about-features">
              <li>✓ Transparent Communication</li>
              <li>✓ Lightning-Fast Delivery</li>
              <li>✓ Modern Tech Stack</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;