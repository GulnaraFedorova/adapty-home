import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import TrustedApps from './components/sections/TrustedApps';
import HelpSection from './components/sections/HelpSection';
import SLASection from './components/sections/SLASection';
import CodeSection from './components/sections/CodeSection';
import CodeSDKSection from './components/sections/CodeSDKSection';
import SDKSection from './components/sections/SDKSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import EnterpriseSection from './components/sections/EnterpriseSection';
import G2AwardsSection from './components/sections/G2AwardsSection';
import RealCasesSection from './components/sections/RealCasesSection';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TrustedApps />
      <HelpSection />
      <SLASection />
      <CodeSection />
      <CodeSDKSection />
      <SDKSection />
      <FeaturesSection />
      <TestimonialsSection />
      <EnterpriseSection />
      <G2AwardsSection />
      <RealCasesSection />
      <Footer />
    </div>
  );
}

export default App;
