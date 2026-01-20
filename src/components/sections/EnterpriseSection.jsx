import { enterpriseSectionData } from '../../data/home';
import './EnterpriseSection.css';

function EnterpriseSection() {
  return (
    <section className="enterprise-section" id="enterprise-grade">
      <div className="enterprise-section__container container">
        <h2 className="enterprise-section__title">
          {enterpriseSectionData.title}
        </h2>
        <p className="enterprise-section__description">
          {enterpriseSectionData.description}
        </p>
        <div className="enterprise-section__features">
          {enterpriseSectionData.features.map((feature, index) => (
            <div key={index} className="enterprise-section__feature">
              {feature}
            </div>
          ))}
        </div>
        <a href={enterpriseSectionData.cta.href} className="enterprise-section__cta">
          {enterpriseSectionData.cta.text}
        </a>
      </div>
    </section>
  );
}

export default EnterpriseSection;
