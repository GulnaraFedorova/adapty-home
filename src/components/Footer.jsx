import './Footer.css';

function Footer() {
  return (
    <footer className="footer section section-dark" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/assets/adapty-logo-white.svg" alt="Adapty" className="footer-logo" />
            <p className="footer-description">
              Revenue management for in-app purchases
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Product</h3>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">SDK</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Adapty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
