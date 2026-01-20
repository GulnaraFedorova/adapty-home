import { sdkSectionData } from '../../data/home';
import './SDKSection.css';

function SDKSection() {
  return (
    <section className="sdk-section" id="sdk">
      <div className="sdk-section__container container">
        <h2 className="sdk-section__title">
          {sdkSectionData.title}
        </h2>
        <div className="sdk-section__platforms">
          {sdkSectionData.platforms.map((platform, index) => (
            <a key={index} href={platform.href} className="sdk-section__platform">
              <img 
                src={platform.icon} 
                alt={platform.name}
                className="sdk-section__platform-icon"
              />
              <span className="sdk-section__platform-name">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SDKSection;
