import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Palette,
  LayoutTemplate,
  Server,
  Database,
  Lock,
  GitBranch,
  Cpu,
  Layers,
  Cloud,
  Bell,
  CreditCard,
  Package,
  Boxes,
  BarChart3,
  TrendingUp,
  Target,
  PenTool,
  Users,
  MousePointerClick,
  Frame,
  Zap,
  Shield,
  RefreshCw,
} from 'lucide-react'

export type ServiceFeature = {
  icon: LucideIcon
  title: string
  desc: string
}

export type ServiceFaq = {
  q: string
  a: string
}

export type Service = {
  num: string
  title: string
  desc: string
  badges: string[]
  icon: LucideIcon
  path: string
  overview: string[]
  features: ServiceFeature[]
  faq: ServiceFaq[]
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Full Stack Application',
    desc: 'End-to-end web applications built with modern frontend and backend technologies — from intuitive user interfaces to secure APIs, databases, authentication, and scalable business logic.',
    badges: ['React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
    icon: Code2,
    path: '/services/full-stack-application',
    overview: [
      "A full stack application brings together everything your business needs to operate online — the interface your users see, the business logic that runs behind it, and the data platform it all lives on. We architect the complete system, so every layer works together seamlessly instead of being stitched together later.",
      'From user authentication and role-based access to REST APIs, database modeling, and third-party integrations, we build scalable foundations. Clear structure, maintainable code, and honest engineering mean your application can grow with your team and your customers.',
    ],
    features: [
      { icon: LayoutTemplate, title: 'Modern Frontend', desc: 'Fast, responsive interfaces built with React and clean, reusable component architecture.' },
      { icon: Server, title: 'Robust Backend', desc: 'Scalable APIs and business logic in Node.js with a clean, testable layering.' },
      { icon: Database, title: 'Database Design', desc: 'Structured MongoDB and PostgreSQL schemas designed carefully around your data.' },
      { icon: Lock, title: 'Authentication & Security', desc: 'Secure login, role-based access, and hardened coding practices throughout.' },
      { icon: GitBranch, title: 'Clean Workflow', desc: 'Version-controlled development, code reviews, and CI-ready delivery.' },
      { icon: Cpu, title: 'Long-term Maintainability', desc: 'Documented, modular code that stays easy to extend and cost-effective to maintain.' },
    ],
    faq: [
      { q: 'What does a typical full stack project include?', a: 'The complete product: frontend interface, backend API, database, authentication, integrations, deployment setup, and documentation — from idea to production.' },
      { q: 'Which stack do you use?', a: 'We build on React and Node.js with Express, using MongoDB or PostgreSQL depending on your data needs. The stack fits the problem rather than forcing a one-size-fits-all approach.' },
      { q: 'Can you take over an existing application?', a: 'Yes. We review your current codebase, stabilize what works, and improve architecture, tests, and performance over time without breaking your product.' },
    ],
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Fast, responsive and scalable websites and web applications engineered for modern businesses, with performance, accessibility and search-friendly architecture built in.',
    badges: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: Globe,
    path: '/services/web-development',
    overview: [
      "In today's digital economy, your website is often the first impression customers get of your business. We engineer sites that load fast, rank well, and convert visitors into customers — with performance, accessibility, and SEO built into the foundation, not bolted on later.",
      'Whether it is a sharp marketing site or a complex web application, we plan the information architecture, design the experience, and build with modern frontend tooling so the result is fast today and easy to evolve tomorrow.',
    ],
    features: [
      { icon: Globe, title: 'Modern, Responsive Sites', desc: 'Pixel-consistent experiences across desktop, tablet, and mobile.' },
      { icon: Zap, title: 'Performance Engineering', desc: 'Code splitting, optimized assets, and core-web-vital-focused delivery.' },
      { icon: Shield, title: 'Accessibility & SEO', desc: 'Semantic, search-friendly markup with WCAG-conscious accessibility.' },
      { icon: Layers, title: 'Clean Architecture', desc: 'Reusable components and tidy code that stays maintainable.' },
      { icon: RefreshCw, title: 'Easy to Update', desc: 'Content and features you can extend quickly without touching the core.' },
      { icon: TrendingUp, title: 'Conversion Focused', desc: 'Clear calls-to-action and journeys designed to turn visitors into leads.' },
    ],
    faq: [
      { q: 'How long does building a website take?', a: 'A focused marketing site typically takes 2–4 weeks, while larger web applications run 6–12 weeks. We share a clear milestone plan before starting.' },
      { q: 'Will my site be fast and SEO-ready?', a: 'Performance and technical SEO (metadata, sitemaps, structured data, fast load times) are built in from day one, so your site is ready to rank.' },
      { q: 'Can you redesign my existing website?', a: 'Yes. We can redesign, rebuild, or migrate an existing site while preserving your content, SEO equity, and functionality.' },
    ],
  },
  {
    num: '03',
    title: 'Mobile App Development',
    desc: 'Modern cross-platform mobile applications designed for smooth user experiences, scalable architecture, reliable performance, and seamless API integration.',
    badges: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    icon: Smartphone,
    path: '/services/mobile-app-development',
    overview: [
      'Reach your customers on the devices they use every day. Our mobile apps are built with React Native and Expo for a genuinely cross-platform experience — one codebase that feels native on both iOS and Android, without doubling your development cost.',
      'We pair the app with solid architecture, offline-aware data handling, push notifications, and secure integration with backend services, so the app is reliable in the real world, not just on a simulator.',
    ],
    features: [
      { icon: Smartphone, title: 'Cross-Platform Native Feel', desc: 'One codebase, native performance and feel on both iOS and Android.' },
      { icon: Cloud, title: 'Real-time Sync', desc: 'Seamless API and Firebase integration with smart offline handling.' },
      { icon: Bell, title: 'Push Notifications', desc: 'Engagement tools delivered reliably to your users.' },
      { icon: Lock, title: 'Secure by Default', desc: 'Safe storage, secure authentication, and modern best practices.' },
      { icon: Layers, title: 'Scalable Architecture', desc: 'Structured code that stays maintainable as features grow.' },
      { icon: PenTool, title: 'App Store Ready', desc: 'Guided release pipeline for both Google Play and the App Store.' },
    ],
    faq: [
      { q: 'Do you build for both iOS and Android?', a: 'Yes. Using React Native and Expo, we ship both platforms from a single codebase — faster delivery and lower cost than building twice.' },
      { q: 'Can the app work with my existing backend?', a: 'Absolutely. We integrate with your current APIs, databases, and third-party services, or design the backend from scratch to match.' },
      { q: 'How do you handle updates and releases?', a: 'We set up a repeatable release flow (test, review, publish to both stores) and can provide ongoing maintenance, updates, and performance improvements.' },
    ],
  },
  {
    num: '04',
    title: 'E-commerce Solutions',
    desc: 'Complete e-commerce experiences built to help businesses sell online — including product management, shopping carts, secure payments, orders, customer accounts, and responsive storefronts.',
    badges: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Razorpay'],
    icon: ShoppingCart,
    path: '/services/ecommerce-solutions',
    overview: [
      'A store that wins customers has more than good products — it has a smooth path from discovery to checkout. We build e-commerce platforms where product management, cart, payments, orders, accounts, and shipping work together without friction.',
      'With Stripe and Razorpay integrations, UPI cards and wallet payments are handled securely. Every page is engineered to load fast and convert, from a clean product catalog to a checkout that customers actually finish.',
    ],
    features: [
      { icon: ShoppingCart, title: 'Cart & Checkout', desc: 'A frictionless cart and multi-step checkout that reduce abandonment.' },
      { icon: CreditCard, title: 'Secure Payments', desc: 'Stripe and Razorpay power cards, UPI, net-banking, and wallets safely.' },
      { icon: Package, title: 'Product Management', desc: 'Organized catalogs with inventory, variants, and easy admin controls.' },
      { icon: Boxes, title: 'Orders & Accounts', desc: 'Order tracking, customer accounts, and order history built in.' },
      { icon: BarChart3, title: 'Storefront Analytics', desc: 'See what sells, what converts, and where customers drop off.' },
      { icon: TrendingUp, title: 'Conversion Focused', desc: 'Speed, trust signals, and journeys designed for more completed sales.' },
    ],
    faq: [
      { q: 'Which payment gateways do you support?', a: 'We integrate Stripe and Razorpay, covering cards, UPI, net-banking, and popular wallets — with secure, compliant billing flows.' },
      { q: 'Can you migrate my existing store?', a: 'Yes, we can migrate products, orders, and customer data from existing platforms to a faster, custom storefront without losing data.' },
      { q: 'Do you handle inventory and shipping?', a: 'We build the product, inventory, order, and shipping workflows your business needs, connected to the tools you already use where sensible.' },
    ],
  },
  {
    num: '05',
    title: 'Digital Marketing',
    desc: 'Data-driven digital marketing strategies that help businesses increase visibility, reach the right audience, generate leads, and build a stronger online presence.',
    badges: ['SEO', 'Social Media', 'Google Ads', 'Meta Ads'],
    icon: Megaphone,
    path: '/services/digital-marketing',
    overview: [
      'Great products stay invisible without a great go-to-market strategy. We build data-driven marketing that gets your business in front of the right people — through search, social, and paid campaigns — and keeps them engaged until they convert.',
      'We start from your goals and your customer, then plan channel by channel: SEO for long-term organic growth, Google and Meta ads for targeted reach, and social content that builds trust. Every rupee is tracked against results.',
    ],
    features: [
      { icon: Target, title: 'Search-First SEO', desc: 'Technical and on-page SEO that grows your organic visibility over time.' },
      { icon: Users, title: 'Social Media Growth', desc: 'Content and community strategy that builds a loyal audience.' },
      { icon: TrendingUp, title: 'Google Ads', desc: 'Intent-driven paid campaigns for search traffic that is ready to buy.' },
      { icon: Megaphone, title: 'Meta Ads', desc: 'Precise targeting on Facebook and Instagram for brand reach.' },
      { icon: BarChart3, title: 'Performance Reporting', desc: 'Clear dashboards and honest reporting tied to leads and revenue.' },
      { icon: Target, title: 'Lead Generation', desc: 'Campaigns engineered to fill your pipeline with qualified prospects.' },
    ],
    faq: [
      { q: 'Which marketing channels do you focus on?', a: 'We start where your customers are: organic SEO, social media, plus Google Ads and Meta Ads when paid reach makes sense for your goals and budget.' },
      { q: 'How soon will we see results?', a: 'Paid campaigns can deliver traffic within days. SEO and organic growth compound over months. We set clear expectations and report performance regularly.' },
      { q: 'Do you work with small budgets?', a: 'Yes. We design campaigns around your budget, prioritizing the channels with the strongest returns instead of spreading spend too thin.' },
    ],
  },
  {
    num: '06',
    title: 'UI/UX Design',
    desc: 'Modern, intuitive and conversion-focused digital experiences designed around real users, clear interaction patterns, strong visual systems, and business goals.',
    badges: ['Figma', 'Wireframes', 'Prototyping', 'Design Systems'],
    icon: Palette,
    path: '/services/ui-ux-design',
    overview: [
      'Design is how your product feels. We design digital experiences around real users — mapping their journey, clarifying interaction patterns, and building cohesive visual systems so every screen feels intentional and effortless to use.',
      'Working in Figma, we move from research and wireframes to high-fidelity prototypes and full design systems. The result is a blueprint your developers can build with confidence, and your users will actually enjoy.',
    ],
    features: [
      { icon: PenTool, title: 'User Research & Journeys', desc: 'Understanding your users, their goals, and the paths they take.' },
      { icon: MousePointerClick, title: 'Wireframes & Flows', desc: 'Low-fidelity structure that gets the logic right before pixels.' },
      { icon: Frame, title: 'High-Fidelity UI', desc: 'Polished, modern interfaces designed in Figma.' },
      { icon: Layers, title: 'Interactive Prototypes', desc: 'Clickable prototypes that let you test the feel before build.' },
      { icon: LayoutTemplate, title: 'Design Systems', desc: 'Reusable components and tokens that keep products consistent.' },
      { icon: TrendingUp, title: 'Conversion Centric', desc: 'Layouts and flows that guide users towards your business goals.' },
    ],
    faq: [
      { q: 'Do you design or only prototype?', a: 'We do the full journey — research, flows, wireframes, high-fidelity UI, and interactive prototypes, ready for developers to build.' },
      { q: 'Can you work alongside my existing team?', a: 'Yes. We collaborate with your in-house developers and designers, delivering Figma files and design systems that slot straight into your workflow.' },
      { q: 'Will developers be able to follow the design?', a: 'We deliver token-based design systems and documented components, so the build faithfully matches the design without ambiguity.' },
    ],
  },
]

export function nextServiceOf(path: string): Service | undefined {
  const idx = services.findIndex(s => s.path === path)
  if (idx === -1) return undefined
  return services[(idx + 1) % services.length]
}

export function prevServiceOf(path: string): Service | undefined {
  const idx = services.findIndex(s => s.path === path)
  if (idx === -1) return undefined
  return services[(idx - 1 + services.length) % services.length]
}