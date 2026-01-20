import { g2AwardsData } from '../../data/home';
import './G2AwardsSection.css';

function G2AwardsSection() {
  return (
    <section className="g2-awards-section" id="g2-awards-and-reviews">
      <div className="g2-awards-section__container container">
        <h2 className="g2-awards-section__title">
          {g2AwardsData.title}
        </h2>
        <div className="g2-awards-section__badges">
          {g2AwardsData.badges.map((badge, index) => (
            <div key={index} className="g2-awards-section__badge">
              <img 
                src={badge.icon} 
                alt={badge.name}
                className="g2-awards-section__badge-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default G2AwardsSection;
