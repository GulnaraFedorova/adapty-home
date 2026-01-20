import './TrustedApps.css';

function TrustedApps() {
  const apps = [
    { name: 'Feeld', logo: '/assets/logo-feeld-gray.svg' },
    { name: 'Bumble', logo: '/assets/logo-bumble-gray.svg' },
    { name: 'Weewoo', logo: '/assets/weewoo.svg' },
    { name: 'AppNation', logo: '/assets/AppNation.webp' },
    { name: 'Almus', logo: '/assets/almus.svg' },
    { name: 'Impala Studios', logo: '/assets/logo-text-impala-studios-gray.svg' },
    { name: 'HUBX', logo: '/assets/logo-hubx-gray.svg' },
  ];

  return (
    <section className="trusted-apps section" id="apps">
      <div className="container">
        <h2 className="trusted-apps-title">
          Trusted by 15,000+ apps and the world's largest app publishers
        </h2>
        <div className="trusted-apps-grid">
          {apps.map((app, index) => (
            <div key={index} className="trusted-app-item">
              <img 
                src={app.logo} 
                alt={app.name}
                className="trusted-app-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedApps;
