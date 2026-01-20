import { helpSectionData } from '../../data/home';
import './HelpSection.css';

function HelpSection() {
  return (
    <section className="help-section" id="help">
      <div className="help-section__container container">
        <h2 className="help-section__title">
          {helpSectionData.title}
          <br />
          {helpSectionData.titleBreak}
        </h2>
        <div className="help-section__cards">
          {helpSectionData.cards.map((card, index) => (
            <a key={index} href={card.href} className="help-section__card">
              <div className="help-section__card-image">
                <img src={card.image} alt={card.title} className="help-section__card-img" />
              </div>
              <div className="help-section__card-content">
                <div className="help-section__card-header">
                  <span className="help-section__card-title">{card.title}</span>
                  <svg className="help-section__card-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="help-section__card-features">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="help-section__card-feature">{feature}</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
