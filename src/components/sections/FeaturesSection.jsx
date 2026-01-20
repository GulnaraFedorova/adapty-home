import { featuresSectionData } from '../../data/home';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-section__container container">
        <div className="features-section__grid">
          {featuresSectionData.features.map((feature, index) => (
            <div key={index} className="features-section__item">
              <div className="features-section__icon">
                <img src={feature.icon} alt="" className="features-section__icon-img" />
              </div>
              <h3 className="features-section__title">{feature.title}</h3>
              <p className="features-section__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
