import { footerData } from '../../data/home';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__section">
            <img src={footerData.logo.src} alt={footerData.logo.alt} className="footer__logo" />
            <p className="footer__description">
              {footerData.description}
            </p>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Product</h3>
            <ul className="footer__links">
              {footerData.links.product.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Resources</h3>
            <ul className="footer__links">
              {footerData.links.resources.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              {footerData.links.company.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
