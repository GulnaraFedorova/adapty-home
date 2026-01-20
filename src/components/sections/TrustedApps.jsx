import { trustedAppsData } from '../../data/home';
import './TrustedApps.css';

function TrustedApps() {
  return (
    <section className="trusted-apps" id="apps">
      <div className="trusted-apps__container container">
        <h2 className="trusted-apps__title">
          {trustedAppsData.title}
        </h2>
        <div className="trusted-apps__grid">
          {trustedAppsData.apps.map((app, index) => (
            <div key={index} className="trusted-apps__item">
              <img 
                src={app.logo} 
                alt={app.name}
                className="trusted-apps__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedApps;
