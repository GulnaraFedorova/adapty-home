import './Hero.css';

function Hero() {
  return (
    <section className="hero section" id="hello">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="promo-banner">
              <span className="promo-mark">Ebook</span>
              <a href="#" className="promo-link">
                <span>$100K playbook | download</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424"/>
                </svg>
              </a>
            </div>
            <h1 className="hero-title">
              Revenue management for in-app purchases
            </h1>
            <p className="hero-subtitle">
              Save months on integrating subscriptions and double your app revenue with paywall management.
            </p>
            <div className="hero-actions">
              <form 
                className="hero-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  return false;
                }}
              >
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="hero-input"
                />
                <button type="submit" className="btn btn-primary">
                  Start for free
                </button>
              </form>
              <a href="#" className="btn btn-outline">
                Book a demo
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-media">
            <picture>
              <source 
                media="(max-width: 767px)" 
                srcSet="/assets/adapty-paywall-demo-preview@2x.webp"
              />
              <img 
                src="/assets/adapty-overview@2x.webp" 
                alt="Adapty Overview" 
                className="hero-image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
