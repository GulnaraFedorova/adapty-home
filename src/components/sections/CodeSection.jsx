import { useState } from 'react';
import { codeSectionData } from '../../data/home';
import './CodeSection.css';

function CodeSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="code-section" id="code">
      <div className="code-section__container container">
        <div className="code-section__content">
          <div className="code-section__text">
            <h2 className="code-section__title">
              {codeSectionData.title}
            </h2>
            <p className="code-section__description">
              {codeSectionData.description}
            </p>
            <a href={codeSectionData.cta.href} className="code-section__cta">
              {codeSectionData.cta.text}
              <svg className="code-section__cta-arrow" width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="#111111"/>
              </svg>
            </a>
            <div className="code-section__quote quote">
              <img src="/assets/quotes-white.svg" alt="Quotes" className="quote__mark" />
              <div className="quote__content">
                <img src={codeSectionData.quote.logo} alt="Smitten" className="quote__logo" />
                <p className="quote__text">
                  {codeSectionData.quote.text}
                </p>
                <div className="quote__author">
                  <img src={codeSectionData.quote.author.avatar} alt={codeSectionData.quote.author.name} className="quote__avatar" />
                  <div className="quote__author-info">
                    <div className="quote__author-name">{codeSectionData.quote.author.name}</div>
                    <div className="quote__author-position">{codeSectionData.quote.author.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="code-section__media">
            <div className="code-section__tabs code-tabs">
              <div className="code-tabs__header">
                {codeSectionData.codeTabs.map((tab, index) => (
                  <button 
                    key={index}
                    className={`code-tabs__tab ${activeTab === index ? 'code-tabs__tab--active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="code-tabs__content">
                <pre className="code-tabs__code">
                  <code>{codeSectionData.codeTabs[activeTab].code}</code>
                </pre>
              </div>
              <div className="code-tabs__footer">
                <div className="code-tabs__footer-left">
                  <img src="/assets/github-logo.svg" alt="GitHub" className="code-tabs__github-logo" />
                  <span className="code-tabs__footer-text">{codeSectionData.github.text}</span>
                </div>
                <a href={codeSectionData.github.href} className="code-tabs__footer-button">
                  {codeSectionData.github.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeSection;
