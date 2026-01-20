import { heroData } from '../../data/home';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hello">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__promo promo-banner">
              <span className="promo-banner__mark">{heroData.promoBanner.mark}</span>
              <a href={heroData.promoBanner.href} className="promo-banner__link">
                <span className="promo-banner__text">{heroData.promoBanner.text}</span>
                <svg className="promo-banner__arrow" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424" />
                </svg>
              </a>
            </div>
            <h1 className="hero__title">
              {heroData.title}
            </h1>
            <p className="hero__subtitle">
              {heroData.subtitle}
            </p>
            <div className="hero__actions">
              <form
                className="hero__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  return false;
                }}
              >
                <input
                  type="email"
                  placeholder={heroData.form.placeholder}
                  className="hero__input"
                />
                <button type="submit" className="hero__submit">
                  {heroData.form.submitText}
                </button>
              </form>
              <a href={heroData.demoButton.href} className="hero__demo">
                {heroData.demoButton.text}
                <svg className="hero__demo-arrow" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero__media">
            <picture className="hero__picture hero__picture--paywall">
              <source
                media="(max-width: 358px)"
                srcSet="/assets/adapty-paywall-demo-preview@1x.webp"
              />
              <source
                media="(max-width: 432px)"
                srcSet="/assets/adapty-paywall-demo-preview@1.5x.webp"
              />
              <img
                src={heroData.images.paywall}
                alt={heroData.images.paywallAlt}
                className="hero__image hero__image--paywall"
              />
            </picture>
            <picture className="hero__picture hero__picture--overview">
              <source
                media="(max-width: 432px)"
                srcSet="/assets/adapty-overview@1x.webp"
              />
              <source
                media="(max-width: 575px)"
                srcSet="/assets/adapty-overview@1.5x.webp"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/assets/adapty-overview@1.5x.webp"
              />
              <source
                media="(max-width: 991px)"
                srcSet="/assets/adapty-overview@1.5x.webp"
              />
              <img
                src={heroData.images.overview}
                alt={heroData.images.overviewAlt}
                className="hero__image hero__image--overview"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
