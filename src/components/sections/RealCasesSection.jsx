import { realCasesData } from '../../data/home';
import './RealCasesSection.css';

function RealCasesSection() {
  return (
    <section className="real-cases-section" id="real-cases">
      <div className="real-cases-section__container container">
        <h2 className="real-cases-section__title">
          {realCasesData.title}
        </h2>
        <div className="real-cases-section__grid">
          {realCasesData.cases.map((caseItem, index) => (
            <a key={index} href={caseItem.href} className="real-cases-section__case">
              <div className="real-cases-section__icon">
                <img 
                  src={caseItem.icon} 
                  alt={caseItem.name}
                  className="real-cases-section__icon-img"
                />
              </div>
              <div className="real-cases-section__content">
                <h3 className="real-cases-section__name">{caseItem.name}</h3>
                <div className="real-cases-section__result">{caseItem.result}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RealCasesSection;
