import './SLASection.css';

function SLASection() {
  const stats = [
    { value: '$2B', label: 'tracked revenue' },
    { value: '99.99%', label: 'historical uptime' },
    { value: '2.5B', label: 'users served' },
    { value: '60B', label: 'API calls / month' },
  ];

  return (
    <section className="sla-section section" id="sla">
      <div className="container">
        <h2 className="section-title">
          Adapty processes subscription revenue with the industry's highest SLA Rate
        </h2>
        <div className="sla-stats">
          {stats.map((stat, index) => (
            <div key={index} className="sla-stat">
              <div className="sla-stat-value">{stat.value}</div>
              <div className="sla-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SLASection;
