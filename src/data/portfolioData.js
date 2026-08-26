export const profile = {
  name: "Rustamov Islom",
  firstName: "Islom",
  title: "Frontend Developer | React Developer | AI Enthusiast",
  roles: [
    "React Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "AI Enthusiast",
  ],
  location: "Tashkent, Uzbekistan",
  email: "islom.rustamov.dev@gmail.com",
  phone: "+998 90 010 66 53",
  about:
    "I am Rustamov Islom, a 14-year-old frontend developer from Tashkent, Uzbekistan. Passionate about web performance, UI/UX perfection, glassmorphism design systems, and AI-assisted development. I build fast, accessible, and delightful digital experiences using React, JavaScript, and Tailwind CSS.",
  resumeNote:
    "Constantly pushing boundaries by building real-world projects, mastering state management, and staying ahead with modern AI tools.",
};

export const stats = [
  { label: "Years Coding", value: 2, suffix: "+" },
  { label: "Projects Built", value: 8, suffix: "" },
  { label: "Technologies", value: 8, suffix: "+" },
  { label: "Lines Shipped", value: 20, suffix: "K+" },
];

export const skills = [
  { name: "React.js", level: 88, category: "Frontend Core", color: "#61DAFB" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend Core", color: "#F7DF1E" },
  { name: "HTML5 & Semantic Markup", level: 96, category: "Frontend Core", color: "#E34F26" },
  { name: "CSS3 & Animations", level: 94, category: "Styling & UI", color: "#3B82F6" },
  { name: "Tailwind CSS", level: 92, category: "Styling & UI", color: "#06B6D4" },
  { name: "Framer Motion", level: 85, category: "Styling & UI", color: "#EC4899" },
  { name: "AI Coding Tools", level: 88, category: "Tools & AI", color: "#8B5CF6" },
  { name: "Git & GitHub", level: 80, category: "Tools & AI", color: "#F1502F" },
  { name: "Responsive & Accessibility", level: 95, category: "Frontend Core", color: "#22D3EE" },
  { name: "Vite & Build Tools", level: 84, category: "Tools & AI", color: "#A78BFA" },
];

export const timeline = [
  {
    year: "2024",
    title: "First line of code",
    description:
      "Started learning HTML & CSS out of pure curiosity about how websites work, instantly hooked on UI development.",
  },
  {
    year: "2025",
    title: "Mastered JavaScript & React",
    description:
      "Transitioned from static layouts to rich dynamic web applications using React.js and modern state patterns.",
  },
  {
    year: "2025",
    title: "Shipped 8+ Real Projects",
    description:
      "Built e-commerce storefronts, food truck apps, and productivity tools, mastering Tailwind CSS & Framer Motion.",
  },
  {
    year: "2026",
    title: "Mars Hackathon Top 1 Winner",
    description:
      "Awarded 1st Place Sertifikat in Mars Hackathon August 2026 selection stage for outstanding React & UI engineering.",
  },
  {
    year: "Now",
    title: "Open for Opportunities",
    description:
      "Continuously refining performance, component architecture, and looking for exciting frontend projects.",
  },
];

export const projects = [
  {
    id: 1,
    title: "ToyStore E-Commerce",
    category: "E-Commerce",
    featured: true,
    description:
      "A colorful, modern e-commerce storefront for a toy store featuring dynamic category navigation, instant product search, animated cart drawer, and responsive checkout flow.",
    highlights: [
      "Dynamic product filtering and category tab switching",
      "Interactive cart drawer with subtotal calculations",
      "Framer Motion micro-interactions & badge animations",
      "Mobile-optimized touch targets & WCAG compliant contrast",
    ],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    icon: "Gift",
    gradient: ["#F97316", "#EC4899"],
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Food Truck Street Brand",
    category: "Web Apps",
    featured: true,
    description:
      "A vibrant landing page for a street-food truck brand with interactive menu filters, photo gallery, location tracking UI, and online order reservation modal.",
    highlights: [
      "Menu section with dietary & spice level filter tags",
      "Interactive location map & live open status pill",
      "Glassmorphic card design with subtle hover elevation",
      "Seamless responsive grid layout across all screen sizes",
    ],
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80",
    icon: "Truck",
    gradient: ["#F59E0B", "#EF4444"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Time Studio App",
    category: "Tools",
    featured: false,
    description:
      "A sleek world clock, stopwatch, and pomodoro timer app built with a clean dark interface, audio cues, and distraction-free layout.",
    highlights: [
      "Multiple time zones with live digital clock updates",
      "Precision stopwatch with lap recording functionality",
      "Distraction-free dark mode with cyan accent glow",
    ],
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80",
    icon: "Clock",
    gradient: ["#3B82F6", "#06B6D4"],
    tech: ["JavaScript", "CSS3", "HTML5", "Local Storage"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Nexus Tech Platform",
    category: "Web Apps",
    featured: false,
    description:
      "A modern SaaS technology landing page featuring interactive feature cards, pricing toggle, scroll-triggered animations, and live hero statistics.",
    highlights: [
      "Monthly vs Annual pricing toggle with discount badge",
      "Scroll reveal animations powered by Framer Motion",
      "Clean Bento Grid structure for feature showcases",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    icon: "Cpu",
    gradient: ["#8B5CF6", "#3B82F6"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Developer Portfolio V1",
    category: "Web Apps",
    featured: false,
    description:
      "An earlier portfolio iteration showcasing clean typography, dark theme styling, project showcases, and custom contact section.",
    highlights: [
      "Custom cursor tracker and smooth scroll navigation",
      "Minimalist dark aesthetics with high contrast text",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: "UserRound",
    gradient: ["#06B6D4", "#8B5CF6"],
    tech: ["React", "CSS3", "JavaScript"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Live Weather Dashboard",
    category: "Tools",
    featured: false,
    description:
      "A real-time weather application fetching data via weather API with city search autocomplete, 5-day forecast cards, and dynamic weather condition backgrounds.",
    highlights: [
      "Real-time OpenWeather API integration",
      "Dynamic background changes according to weather condition",
      "Hourly temperature graph and humidity indicators",
    ],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    icon: "CloudSun",
    gradient: ["#0EA5E9", "#22D3EE"],
    tech: ["JavaScript", "REST API", "CSS3"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 7,
    title: "TaskFlow Productivity",
    category: "Tools",
    featured: false,
    description:
      "An advanced task manager with priority flags, category tags, local storage persistence, and drag-and-drop reordering.",
    highlights: [
      "Local storage state persistence across sessions",
      "Filter tasks by status: All, Active, Completed",
      "Progress bar indicating daily completion percentage",
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    icon: "ListChecks",
    gradient: ["#10B981", "#3B82F6"],
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
  {
    id: 8,
    title: "Apex E-Commerce Kit",
    category: "E-Commerce",
    featured: true,
    description:
      "A premium UI kit for modern online stores with product card variants, search filters, quick-view modal, and slide-over cart drawer.",
    highlights: [
      "Quick view product preview modal",
      "Responsive filter sidebar for desktop and mobile",
      "Smooth cart slide-over animation",
    ],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    icon: "ShoppingBag",
    gradient: ["#EC4899", "#8B5CF6"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rustamov-islom",
    demo: "https://example.com",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Mars Hackathon Participant Sertifikati (Top 1)",
    issuer: "Mars IT School & IT Park Uzbekistan",
    date: "16.08.2026",
    image: "/certificates/mars-hackathon.png",
    skills: ["Top 1 Winner", "React.js", "Mars Hackathon 2026", "UI/UX Architecture"],
    credentialUrl: "/certificates/mars-hackathon.png",
    badgeColor: "#8B5CF6",
    imageGradient: ["#8B5CF6", "#EC4899"],
    description:
      "Mars Hackathon Avgust 2026 tanlov-saralash bosqichida faol ishtirok etgani va eng yuqori Top 1 darajasini egallagani uchun taqdirlandi (CEO Ruslan Rafikovich - Mars IT School).",
  },
  {
    id: 2,
    title: "Frontend Web Development Specialist",
    issuer: "IT Academy & Coursera",
    date: "2025",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive UI"],
    credentialUrl: "https://coursera.org",
    badgeColor: "#3B82F6",
    imageGradient: ["#3B82F6", "#60A5FA"],
    description:
      "Verified mastery of semantic markup, CSS Grid & Flexbox, JavaScript DOM manipulation, and cross-browser responsive web design principles.",
  },
  {
    id: 3,
    title: "React.js & Modern Frontend Architecture",
    issuer: "Udemy & NextLevel",
    date: "2025",
    skills: ["React.js", "State Management", "Hooks", "Component Design"],
    credentialUrl: "https://udemy.com",
    badgeColor: "#8B5CF6",
    imageGradient: ["#8B5CF6", "#A78BFA"],
    description:
      "Advanced React.js certification covering custom hooks, Context API, component lifecycle, performance optimization, and clean state design.",
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    skills: ["Algorithm Logic", "Data Structures", "ES6 Features", "OOP"],
    credentialUrl: "https://freecodecamp.org",
    badgeColor: "#06B6D4",
    imageGradient: ["#06B6D4", "#22D3EE"],
    description:
      "Comprehensive 300-hour certification covering functional programming, data structure algorithms, object-oriented logic, and ES6+ standards.",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/rustamov-islom", icon: "Github" },
  { name: "Telegram", url: "https://t.me/rustamov_islom", icon: "Send" },
  { name: "Instagram", url: "https://instagram.com/rustamov_islom", icon: "Instagram" },
  { name: "LinkedIn", url: "https://linkedin.com/in/rustamov-islom", icon: "Linkedin" },
];

export const navLinks = [
  { labelKey: "home", href: "#home" },
  { labelKey: "about", href: "#about" },
  { labelKey: "skills", href: "#skills" },
  { labelKey: "experience", href: "#experience" },
  { labelKey: "projects", href: "#projects" },
  { labelKey: "certificates", href: "#certificates" },
  { labelKey: "contact", href: "#contact" },
];
