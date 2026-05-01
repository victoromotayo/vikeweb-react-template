const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Vike<span>Web</span>.</h3>
            <p>Engineering premium digital experiences for forward-thinking brands.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VikeWeb. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;