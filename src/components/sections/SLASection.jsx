import { slaData } from '../../data/home';
import './SLASection.css';

function SLASection() {
  return (
    <section className="sla-section" id="sla">
      <div className="sla-section__container container">
        <h2 className="sla-section__title">
          {slaData.title}
        </h2>
        <div className="sla-section__stats">
          {slaData.stats.map((stat, index) => (
            <div key={index} className="sla-section__stat">
              <div className="sla-section__stat-value">{stat.value}</div>
              <div className="sla-section__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SLASection;
