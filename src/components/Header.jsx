import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <img 
              src="/assets/adapty-logo-black.svg" 
              alt="Adapty" 
              className="logo-img"
            />
          </div>
          <nav className="header-nav">
            <a href="#" className="nav-link">Product</a>
            <a href="#" className="nav-link">Cases</a>
            <a href="#" className="nav-link">SDK</a>
            <a href="#" className="nav-link">Integrations</a>
            <a href="#" className="nav-link">Docs</a>
            <a href="#" className="nav-link">Pricing</a>
          </nav>
          <div className="header-actions">
            <a href="#" className="btn btn-outline">Sign in</a>
            <a href="#" className="btn btn-primary">Start for free</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
