// Данные для главной страницы Adapty

export const headerData = {
  logo: {
    src: '/assets/adapty-logo-black.svg',
    alt: 'Adapty'
  },
  nav: [
    { label: 'Product', href: '#' },
    { label: 'Cases', href: '#' },
    { label: 'SDK', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'Pricing', href: '#' }
  ],
  actions: [
    { label: 'Sign in', href: '#', variant: 'outline' },
    { label: 'Start for free', href: '#', variant: 'primary' }
  ]
};

export const heroData = {
  promoBanner: {
    mark: 'Ebook',
    text: '$100K playbook | download',
    href: '#'
  },
  title: 'Revenue management for in-app purchases',
  subtitle: 'Save months on integrating subscriptions and double your app revenue with paywall management.',
  form: {
    placeholder: 'Email address',
    submitText: 'Start for free'
  },
  demoButton: {
    text: 'Book a demo',
    href: '#'
  },
  images: {
    paywall: '/assets/adapty-paywall-demo-preview@2x.webp',
    overview: '/assets/adapty-overview@2x.webp',
    paywallAlt: 'Adapty Paywall Demo Preview',
    overviewAlt: 'Adapty Overview'
  }
};

export const trustedAppsData = {
  title: "Trusted by 15,000+ apps and the world's largest app publishers",
  apps: [
    { name: 'Feeld', logo: '/assets/logo-feeld-gray.svg' },
    { name: 'Bumble', logo: '/assets/logo-bumble-gray.svg' },
    { name: 'Weewoo', logo: '/assets/weewoo.svg' },
    { name: 'AppNation', logo: '/assets/AppNation.webp' },
    { name: 'Almus', logo: '/assets/almus.svg' },
    { name: 'Impala Studios', logo: '/assets/logo-text-impala-studios-gray.svg' },
    { name: 'HUBX', logo: '/assets/logo-hubx-gray.svg' }
  ]
};

export const helpSectionData = {
  title: "Help your team run the mobile subscription business.",
  titleBreak: "Faster and cheaper.",
  cards: [
    {
      title: 'For developers',
      image: '/assets/img-card-cover-sdk-install@2x.webp',
      features: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
      href: '#'
    },
    {
      title: 'For app owners',
      image: '/assets/img-card-cover-charts@2x.webp',
      features: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
      href: '#'
    },
    {
      title: 'For marketers',
      image: '/assets/img-card-cover-paywalls@2x.webp',
      features: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
      href: '#'
    }
  ]
};

export const slaData = {
  title: "Adapty processes subscription revenue with the industry's highest SLA Rate",
  stats: [
    { value: '$2B', label: 'tracked revenue' },
    { value: '99.99%', label: 'historical uptime' },
    { value: '2.5B', label: 'users served' },
    { value: '60B', label: 'API calls / month' }
  ]
};

export const codeSectionData = {
  title: 'Integrate in-app purchases with a few lines of code',
  description: 'Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.',
  cta: {
    text: 'Make subscriptions easy',
    href: '#'
  },
  quote: {
    text: '"Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."',
    author: {
      name: 'Magnús Ólafsson',
      position: 'Chief Technology Officer at Smitten',
      avatar: '/assets/Magnus-Olafsson-Smitten@2x.webp'
    },
    logo: '/assets/Smitten_Color-Logo-Small-02.webp'
  },
  codeTabs: [
    {
      label: 'Swift',
      code: `import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
  
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`
    },
    {
      label: 'Kotlin',
      code: `Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
        // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`
    },
    {
      label: 'React Native',
      code: `import Adapty from 'react-native-adapty';

await Adapty.activate('PUBLIC_SDK_KEY');

// Make a purchase, Adapty handles the rest
const result = await Adapty.makePurchase(product);
// successful purchase`
    },
    {
      label: 'Flutter',
      code: `import 'package:adapty_flutter/adapty_flutter.dart';

await Adapty.activate('PUBLIC_SDK_KEY');

// Make a purchase, Adapty handles the rest
final result = await Adapty.makePurchase(product);
// successful purchase`
    },
    {
      label: 'Unity',
      code: `using AdaptySDK;

Adapty.Activate("PUBLIC_SDK_KEY");

// Make a purchase, Adapty handles the rest
var result = await Adapty.MakePurchase(product);
// successful purchase`
    }
  ],
  github: {
    text: '100% Open Source',
    buttonText: 'Go to GitHub',
    href: '#'
  }
};

export const codeSDKSectionData = {
  // Separator section between code and sdk
};

export const sdkSectionData = {
  title: 'Get the SDK for your platform',
  platforms: [
    { name: 'iOS', icon: '/assets/icon-ios-64x64-1.svg', href: '#' },
    { name: 'Android', icon: '/assets/icon-android-64x64-1.svg', href: '#' },
    { name: 'React Native', icon: '/assets/icon-react-native-64x64-1.svg', href: '#' },
    { name: 'Flutter', icon: '/assets/icon-flutter-64x64-1.svg', href: '#' },
    { name: 'Unity', icon: '/assets/icon-unity-64x64-1.svg', href: '#' },
    { name: 'Web', icon: '/assets/icon-web-64x64-1.svg', href: '#' }
  ]
};

export const featuresSectionData = {
  features: [
    {
      title: 'Increase subscription revenue without app releases',
      description: 'A/B test paywalls and pricing without waiting for App Store review',
      icon: '/assets/icon-24x24-20n.svg'
    },
    {
      title: 'Cut refund rate by 40%',
      description: 'Automatically detect and prevent fraudulent refunds',
      icon: '/assets/icon-20x20-receipt.svg'
    },
    {
      title: 'Know your subscription numbers at any moment',
      description: 'Real-time analytics and revenue tracking',
      icon: '/assets/icon-24x24-4n.svg'
    },
    {
      title: 'No-code paywall builder',
      description: 'Create beautiful paywalls without writing code',
      icon: '/assets/icon-24x24-13n.svg'
    },
    {
      title: 'Boost app revenue fast with web funnels',
      description: 'Convert web visitors to mobile subscribers',
      icon: '/assets/funnelfox-feature@2x.webp'
    }
  ]
};

export const testimonialsSectionData = {
  title: "Developers from all kind of apps move to Adapty to grow their revenue",
  testimonials: [
    {
      text: '"Adapty has been a game-changer for our subscription business. The analytics are incredible."',
      author: {
        name: 'Chris Bick',
        position: 'Founder',
        avatar: '/assets/photo-Chris-Bick.webp'
      },
      company: 'Bickster'
    },
    {
      text: '"The SDK integration was seamless. We were up and running in hours, not days."',
      author: {
        name: 'Roi Mulia',
        position: 'CTO',
        avatar: '/assets/photo-Roi-Mulia.webp'
      },
      company: 'Secret App'
    }
  ]
};

export const enterpriseSectionData = {
  title: 'Enterprise-grade platform',
  description: 'Built for scale with enterprise security and support',
  features: [
    '99.99% uptime SLA',
    'SOC 2 compliant',
    'Dedicated support',
    'Custom integrations'
  ],
  cta: {
    text: 'Contact sales',
    href: '#'
  }
};

export const g2AwardsData = {
  title: 'Trusted for usability and customer service',
  badges: [
    { name: 'Best Results', icon: '/assets/g2-best_results-winter_2025.svg' },
    { name: 'High Performer', icon: '/assets/g2-high_performer-winter_2025.svg' },
    { name: 'Best Usability', icon: '/assets/g2-best_usability-winter_2025.svg' },
    { name: 'Best Relationship', icon: '/assets/g2-best_relationship-winter_2025.svg' },
    { name: 'Most Implementable', icon: '/assets/g2-most_implementable-winter_2025.svg' }
  ]
};

export const realCasesData = {
  title: 'Read the real cases of our customers',
  cases: [
    { name: 'Welmi', icon: '/assets/app-icon-welmi@3x.webp', href: '#', result: 'MRR tripled' },
    { name: 'Productivity App', icon: '/assets/app-icon-productivity-app@4x.webp', href: '#', result: '+50% revenue' },
    { name: 'Text on Pic', icon: '/assets/app-icon-text-on-pic@3x.webp', href: '#', result: '2x conversion' },
    { name: 'Secret App', icon: '/assets/logo-secret-app@3x.webp', href: '#', result: 'Faster integration' },
    { name: 'Going Merry', icon: '/assets/going-merry-app-logo.webp', href: '#', result: 'Better analytics' }
  ]
};

export const footerData = {
  logo: {
    src: '/assets/adapty-logo-white.svg',
    alt: 'Adapty'
  },
  description: 'Revenue management for in-app purchases',
  links: {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'SDK', href: '#' },
      { label: 'Integrations', href: '#' }
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' }
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' }
    ]
  },
  copyright: '© 2025 Adapty. All rights reserved.'
};
