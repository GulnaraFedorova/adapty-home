import './CodeSection.css';

function CodeSection() {
  return (
    <section className="code-section section section-dark" id="code">
      <div className="container">
        <div className="code-content">
          <div className="code-text">
            <h2 className="section-title">
              Integrate in-app purchases with a few lines of code
            </h2>
            <p className="code-description">
              Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.
            </p>
            <a href="#" className="btn btn-outline">
              Make subscriptions easy
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="#111111"/>
              </svg>
            </a>
            <div className="code-quote">
              <img src="/assets/quotes-white.svg" alt="Quotes" className="quote-mark" />
              <div className="quote-content">
                <img src="/assets/Smitten_Color-Logo-Small-02.webp" alt="Smitten" className="quote-logo" />
                <p className="quote-text">
                  "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
                </p>
                <div className="quote-author">
                  <img src="/assets/Magnus-Olafsson-Smitten@2x.webp" alt="Magnus Olafsson" className="quote-avatar" />
                  <div className="quote-author-info">
                    <div className="quote-author-name">Magnús Ólafsson</div>
                    <div className="quote-author-position">Chief Technology Officer at Smitten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="code-media">
            <div className="code-tabs">
              <div className="code-tabs-header">
                <button className="code-tab active">Swift</button>
                <button className="code-tab">Kotlin</button>
                <button className="code-tab">React Native</button>
                <button className="code-tab">Flutter</button>
                <button className="code-tab">Unity</button>
              </div>
              <div className="code-tabs-content">
                <pre className="code-block">
{`import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
  
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`}
                </pre>
              </div>
              <div className="code-tabs-footer">
                <div className="code-footer-left">
                  <img src="/assets/github-logo.svg" alt="GitHub" className="github-logo" />
                  <span>100% Open Source</span>
                </div>
                <a href="#" className="btn btn-outline">Go to GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeSection;
