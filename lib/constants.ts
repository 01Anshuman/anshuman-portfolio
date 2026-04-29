export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Tech', href: '#tech' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export const TERMINAL_ROLES = [
  'Crafting scalable web applications',
  'Automating workflows with AI agents',
  'Growing brands on LinkedIn & YouTube',
  'Shipping ideas end-to-end',
];

export const TRUST_ITEMS = [
  'SDR · US Market · 100+ weekly outbound touchpoints',
  '3+ Projects Delivered · 20+ hrs/week saved',
  'Bengaluru, India · Open to opportunities',
];

export const TECH_STACK = {
  Frontend: [
    { name: 'React', note: 'Component-driven UIs & SPAs', emoji: '⚛️' },
    { name: 'Next.js', note: 'SSR, SSG & App Router', emoji: '▲' },
    { name: 'Tailwind CSS', note: 'Utility-first styling', emoji: '🎨' },
    { name: 'Framer Motion', note: 'Production animations', emoji: '🎞️' },
    { name: 'HTML5/CSS3/JS', note: 'Semantic, accessible markup', emoji: '🌐' },
  ],
  Backend: [
    { name: 'Python', note: 'Scripting, APIs & automation', emoji: '🐍' },
    { name: 'Django', note: 'Full-stack web framework', emoji: '🎸' },
    { name: 'Node.js', note: 'Event-driven server runtime', emoji: '🟢' },
    { name: 'Express', note: 'Lightweight REST APIs', emoji: '🚂' },
    { name: 'REST APIs', note: 'Design & integration', emoji: '🔌' },
  ],
  Database: [
    { name: 'PostgreSQL', note: 'Relational DB of choice', emoji: '🐘' },
    { name: 'MySQL', note: 'Production databases', emoji: '🗄️' },
    { name: 'SQLite', note: 'Lightweight local storage', emoji: '💾' },
  ],
  'AI & Automation': [
    { name: 'OpenAI API', note: 'GPT-4 powered agents', emoji: '🤖' },
    { name: 'LangChain', note: 'LLM orchestration', emoji: '🔗' },
    { name: 'n8n', note: 'Visual workflow automation', emoji: '⚡' },
    { name: 'Make.com', note: 'No-code integrations', emoji: '🔧' },
    { name: 'Zapier', note: 'App-to-app automation', emoji: '⚡' },
    { name: 'WhatsApp API', note: 'Business messaging bots', emoji: '💬' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS EC2/S3', note: 'Cloud compute & storage', emoji: '☁️' },
    { name: 'Vercel', note: 'Edge deployments', emoji: '▲' },
    { name: 'Git/GitHub', note: 'Version control & CI', emoji: '🐙' },
    { name: 'Linux CLI', note: 'Server management', emoji: '🐧' },
  ],
  'Marketing Tools': [
    { name: 'LinkedIn Analytics', note: 'B2B audience growth', emoji: '💼' },
    { name: 'YouTube Studio', note: 'Channel optimization', emoji: '▶️' },
    { name: 'Meta Ads', note: 'Paid social campaigns', emoji: '📣' },
    { name: 'Google Analytics', note: 'Traffic & conversion', emoji: '📊' },
    { name: 'Instagram Insights', note: 'Organic growth tracking', emoji: '📸' },
  ],
};

export const TICKER_ITEMS = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Node.js',
  'PostgreSQL', 'OpenAI API', 'LangChain', 'n8n', 'Make.com',
  'Tailwind CSS', 'Framer Motion', 'AWS', 'Vercel', 'WhatsApp API',
  'Zapier', 'Git', 'Linux', 'Meta Ads', 'Google Analytics',
];

export const SERVICES = [
  {
    icon: '🌐',
    title: 'Custom Website Development',
    description:
      'High-performance websites built with React/Next.js and Django. From landing pages to full web apps — responsive, SEO-optimized, and built to convert.',
    deliverables: ['Landing Pages', 'Business Websites', 'Web Apps', 'CMS Integration', 'API Integration'],
    result: 'Avg. 3× more inquiries post-launch',
    accent: '#00f5a0',
  },
  {
    icon: '🤖',
    title: 'AI & Workflow Automation',
    description:
      'Custom AI agents and automation pipelines using OpenAI, LangChain, n8n & Make.com. Automate lead capture, customer support, reporting, and repetitive ops.',
    deliverables: ['WhatsApp Bots', 'Lead Capture Funnels', 'CRM Automation', 'Email Drips', 'AI Chatbots'],
    result: 'Clients save 20–70 hrs/week',
    accent: '#00b4ff',
  },
  {
    icon: '📣',
    title: 'Digital Marketing Strategy',
    description:
      'Data-driven growth on LinkedIn, YouTube, and Instagram. Content strategy, audience building, and lead generation campaigns that compound over time.',
    deliverables: ['LinkedIn Growth', 'YouTube Strategy', 'Instagram Management', 'Content Calendars', 'Analytics'],
    result: 'Avg. 300% follower growth in 90 days',
    accent: '#ff6b6b',
  },
];

export const PROJECTS = [
  {
    title: 'Partha Print Pack',
    emoji: '🖨️',
    badges: ['Web Dev', 'SEO'],
    description:
      'Built and optimized the complete digital presence for a Bengaluru-based printing business. Included responsive website, SEO setup, and local search optimization.',
    stack: ['Django', 'Bootstrap', 'Python', 'SEO'],
    results: ['3× inquiry growth', '+200% organic reach'],
    banner: '/parha_banner.png',
    link: 'https://parthaprintpack.com/',
  },
  {
    title: 'Ashim Talk Tide',
    emoji: '🎙️',
    badges: ['Web Dev', 'Personal Brand'],
    description:
      'Designed and developed a professional personal brand website for a YouTuber and mentor — clean, fast, and built to grow audience and credibility online.',
    stack: ['Next.js', 'Tailwind CSS', 'React', 'Vercel'],
    results: ['Live & performant', 'Brand credibility boost'],
    banner: '/ashim_banner.png',
    link: 'https://www.ashimtalktide.com/',
  },
  {
    title: 'Grow With Anshuman',
    emoji: '🚀',
    badges: ['Portfolio', 'Personal Brand'],
    description:
      'My own personal brand and portfolio site — showcasing projects, content, and consulting services. Built for speed, SEO, and converting visitors into conversations.',
    stack: ['React', 'Netlify', 'HTML5/CSS3', 'JS'],
    results: ['Live portfolio', 'Personal brand hub'],
    banner: '/growwithanshuman_banner.png',
    link: 'https://growwithanshuman.netlify.app/',
  },
  {
    title: 'LinkedIn Note Generator — Custom GPT',
    emoji: null,
    placeholderLabel: 'GPT Tool',
    badges: ['AI', 'Sales', 'Custom GPT'],
    description:
      'Built a Custom GPT that generates hyper-personalised LinkedIn connection notes under 300 characters from just a name, title, and company. Achieves 5× higher acceptance rate vs generic templates — used in live outbound prospecting daily.',
    stack: ['OpenAI API', 'Custom GPT', 'Prompt Engineering'],
    results: ['5× higher acceptance rate', 'Used in live outbound daily'],
    banner: '/LinkedinNoteGen.png',
    link: 'https://github.com/01Anshuman',
    linkLabel: '🔗 View on GitHub',
  },
  {
    title: 'Email Triage Automation — n8n',
    emoji: null,
    placeholderLabel: 'n8n Flow',
    badges: ['Automation', 'n8n', 'Productivity'],
    description:
      'Built an n8n workflow that automatically classifies incoming emails as hot reply, follow-up needed, or not relevant — routes to the right folder and creates CRM tasks automatically. Reduced daily email triage from 30 minutes to under 4 minutes.',
    stack: ['n8n', 'Zoho CRM', 'Email API', 'Automation'],
    results: ['30 min → 4 min daily', 'Integrated with Zoho CRM'],
    banner: '/Emailn8n.png',
    link: 'https://github.com/01Anshuman',
    linkLabel: '🔗 View on GitHub',
  },
];

export const METRICS = [
  { value: 3, suffix: '+', label: 'Projects Delivered' },
  { value: 70, suffix: '+', label: 'Hours Saved Per Week' },
  { value: 300, suffix: '%', label: 'Avg. Social Growth' },
  { value: 20, suffix: '+', label: 'Automation Systems Built' },
  { value: 500, suffix: '+', label: 'Leads Generated' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Understanding your goals, tech constraints, and growth targets before anything else.',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Planning the stack, automations, and content strategy before writing a single line.',
  },
  {
    num: '03',
    title: 'Build & Ship',
    desc: 'Rapid iteration with weekly check-ins. You see progress, not silence.',
  },
  {
    num: '04',
    title: 'Grow & Optimize',
    desc: 'Post-launch support, analytics review, and continuous improvement.',
  },
];

export const MEDIA = [
  {
    icon: '🎙️',
    title: "Achiever's Ki Duniya",
    subtitle: 'Podcast',
    stats: ['25+ Episodes', '20+ Guests', 'Growing'],
    description:
      'Interviewing founders, developers, and career builders on technology and growth.',
    link: 'https://www.youtube.com/@acheiverskiduniya5891',
    linkLabel: '@acheiverskiduniya5891',
    banner: '/akd_banner.jpg',
  },
  {
    icon: '📈',
    title: 'Grow With Anshuman',
    subtitle: 'Podcast & Channel',
    stats: ['Growing Fast', 'Dev & Growth Content', 'Real Strategies'],
    description:
      'Practical content on web development, digital growth, and building a personal brand as a developer.',
    link: 'https://www.youtube.com/@growwithanshuman9445',
    linkLabel: '@growwithanshuman9445',
    banner: '/gwa_banner.jpg',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Anshuman built our website from scratch and completely transformed our online presence. We started getting more inquiries within weeks of launch.',
    name: 'Neeraj',
    role: 'Owner, Partha Print Pack',
    initials: 'NJ',
  },
  {
    quote:
      'The website Anshuman built for me is clean, fast, and exactly reflects my brand. He understood the vision immediately and delivered beyond expectations.',
    name: 'Ashim Sarkar',
    role: 'YouTuber & Mentor, Ashim Talk Tide',
    initials: 'AS',
  },
];

export const CONTACT_INFO = {
  email: 'manshumanmishra221122@gmail.com',
  linkedin: 'https://linkedin.com/in/anshuman-mishra-83a069233',
  github: 'https://github.com/01Anshuman',
  whatsapp: '+91 99568 88757',
  youtube: 'https://www.youtube.com/@acheiverskiduniya5891',
  youtubeHandle: '@acheiverskiduniya5891',
};
