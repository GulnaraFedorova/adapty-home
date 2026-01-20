import './HelpSection.css';

function HelpSection() {
  const cards = [
    {
      title: 'For developers',
      image: '/assets/img-card-cover-sdk-install@2x.webp',
      features: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
      link: '#'
    },
    {
      title: 'For app owners',
      image: '/assets/img-card-cover-charts@2x.webp',
      features: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
      link: '#'
    },
    {
      title: 'For marketers',
      image: '/assets/img-card-cover-paywalls@2x.webp',
      features: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
      link: '#'
    },
  ];

  return (
    <section className="help-section section" id="help">
      <div className="container">
        <h2 className="section-title">
          Help your team run the mobile subscription business.<br />Faster and cheaper.
        </h2>
        <div className="help-cards">
          {cards.map((card, index) => (
            <a key={index} href={card.link} className="help-card">
              <div className="help-card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="help-card-content">
                <div className="help-card-header">
                  <span className="help-card-title">{card.title}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="help-card-features">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="help-card-feature">{feature}</div>
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
