import { headerData } from '../../data/home';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__content">
          <div className="header__logo">
            <img 
              src={headerData.logo.src} 
              alt={headerData.logo.alt} 
              className="header__logo-img"
            />
          </div>
          <nav className="header__nav">
            {headerData.nav.map((item, index) => (
              <a key={index} href={item.href} className="header__nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header__actions">
            {headerData.actions.map((action, index) => (
              <a 
                key={index} 
                href={action.href} 
                className={`header__action header__action--${action.variant}`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
