const Contact = () => {
    return (
      <section id="contact" className="contact hidden">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Start a Conversation</h2>
            <p>Ready to elevate your digital presence? Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-blocks">
              <div className="info-item">
                <h4>Email Us</h4>
                <p>omoladeomotayo01@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Call Us</h4>
                <p>+234 (903) 278-3764</p>
              </div>
            </div>
          </div>
  
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Tell us about your goals..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;