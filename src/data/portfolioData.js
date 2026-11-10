export const profile = {
  name: "Islom Rustamov",
  firstName: "Islom",
  title: "Frontend Developer | React Developer | AI Enthusiast",
  roles: [
    "Frontend Developer",
    "React Developer",
    "Modern Web Technologies",
    "AI Enthusiast",
  ],
  location: "Tashkent, Uzbekistan",
  email: "islom.rustamov.dev@gmail.com", // [Editable placeholder / direct contact]
  phone: "+998 90 010 66 53", // [Direct contact placeholder]
  heroIntro:
    "I build modern, interactive and visually stunning digital experiences with clean code and creative ideas.",
  bio:
    "I am Islom Rustamov, a frontend developer based in Tashkent, Uzbekistan, specializing in React.js and modern web technologies. I am fascinated by the intersection of high-performance frontend engineering, AI tools, and creative UI/UX design. I focus on writing clean, modular code and crafting digital experiences that feel intuitive, futuristic, and memorable.",
  interests: ["AI & Machine Learning", "Modern Web Technologies", "UI/UX Design", "3D Web & Creative Code"],
  currentFocus: "Architecting interactive 3D web interfaces, mastering modern React design patterns, and integrating AI workflows into frontend development.",
};

export const skillsData = {
  frontend: [
    { name: "React.js", category: "Frontend", highlight: true },
    { name: "JavaScript", category: "Frontend", highlight: true },
    { name: "Tailwind CSS", category: "Frontend", highlight: true },
    { name: "HTML5", category: "Frontend", highlight: false },
    { name: "CSS3", category: "Frontend", highlight: false },
    { name: "Responsive Web Design", category: "Frontend", highlight: true },
  ],
  tools: [
    { name: "Git", category: "Tools", highlight: true },
    { name: "GitHub", category: "Tools", highlight: true },
    { name: "VS Code", category: "Tools", highlight: false },
    { name: "Vite", category: "Tools", highlight: false },
  ],
  interests: [
    { name: "AI Tools", category: "Interests", highlight: true },
    { name: "UI/UX Design", category: "Interests", highlight: true },
    { name: "Modern Web Technologies", category: "Interests", highlight: true },
    { name: "3D & Interactive Web", category: "Interests", highlight: false },
  ],
};

export const timeline = [
  {
    period: "2024",
    title: "First Steps in Web Development",
    description:
      "Started learning semantic HTML5 and responsive CSS3, laying the foundational knowledge for frontend design and layout architecture.",
  },
  {
    period: "2025",
    title: "JavaScript & React Mastery",
    description:
      "Transitioned into deep JavaScript ES6+ and React component architecture, building dynamic state-driven user interfaces.",
  },
  {
    period: "2025",
    title: "Building Real-World Web Apps",
    description:
      "Engineered full frontend products including Toystore, Foodtruck, Time, and Texlogiya, honing Tailwind CSS and responsive design.",
  },
  {
    period: "2026",
    title: "Mars Hackathon Participant (Top 1 Sertifikat)",
    description:
      "Recognized with 1st Place Sertifikat in the Mars Hackathon selection stage for outstanding frontend execution and UI design.",
  },
  {
    period: "Current",
    title: "Next-Gen Web & AI Exploration",
    description:
      "Advancing skills in interactive 3D web interfaces (Three.js), AI coding tools, and modern UI/UX design systems.",
  },
];

export const projects = [
  {
    id: "toystore",
    title: "Toystore",
    category: "E-Commerce",
    badge: "Featured Project",
    description:
      "A vibrant, modern e-commerce storefront for a toy retailer featuring dynamic category filtering, interactive shopping cart, instant search, and smooth micro-interactions.",
    longDescription:
      "Toystore was designed to provide an energetic and seamless digital shopping experience. Built with React and Tailwind CSS, it features dynamic product catalogs, a slide-out cart drawer with real-time state calculations, and mobile-first responsive layouts.",
    highlights: [
      "Dynamic catalog filtering and instant search bar",
      "Interactive cart drawer with subtotal computation",
      "Framer Motion micro-animations & responsive touch targets",
      "Clean component structure and accessibility considerations",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    demoUrl: "https://example.com/toystore-demo", // [Editable placeholder]
    githubUrl: "https://github.com/rustamov-islom/toystore", // [Editable placeholder]
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=80",
    gradient: "from-cyan-500/20 to-blue-600/20",
    accentColor: "#00E5FF",
  },
  {
    id: "foodtruck",
    title: "Foodtruck",
    category: "Web Apps",
    badge: "Interactive Brand",
    description:
      "An appetizing street-food brand web experience with interactive menu showcase, dietary filter tags, location tracking UI, and online order reservation.",
    longDescription:
      "Foodtruck presents a bold culinary brand with high-contrast typography, interactive food menus, dietary tag filters, and an online table reservation modal. Built for quick mobile browsing and visual delight.",
    highlights: [
      "Menu category switcher with dietary and spice level filters",
      "Interactive location & opening schedule indicator",
      "Glassmorphic design system with subtle hover elevation",
      "Seamless responsive grid across mobile and desktop displays",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    demoUrl: "https://example.com/foodtruck-demo", // [Editable placeholder]
    githubUrl: "https://github.com/rustamov-islom/foodtruck", // [Editable placeholder]
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1000&q=80",
    gradient: "from-amber-500/20 to-red-600/20",
    accentColor: "#F59E0B",
  },
  {
    id: "time",
    title: "Time",
    category: "Tools",
    badge: "Productivity",
    description:
      "A sleek dark-mode productivity studio featuring a world clock, precision stopwatch with lap history, and distraction-free Pomodoro focus timer.",
    longDescription:
      "Time is a minimalist web utility focused on temporal productivity. It features world clock monitors, a high-precision stopwatch with millisecond fidelity and lap tracking, and a Pomodoro focus timer designed with futuristic midnight visuals.",
    highlights: [
      "Live time-zone clock updates and visual timezone cards",
      "Precision stopwatch with lap recording and reset controls",
      "Pomodoro focus session timer with audio cues",
      "Distraction-free dark mode interface with electric cyan glow",
    ],
    tech: ["JavaScript", "React.js", "CSS3", "Local Storage"],
    demoUrl: "https://example.com/time-demo", // [Editable placeholder]
    githubUrl: "https://github.com/rustamov-islom/time", // [Editable placeholder]
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1000&q=80",
    gradient: "from-cyan-500/20 to-purple-600/20",
    accentColor: "#00E5FF",
  },
  {
    id: "texlogiya",
    title: "Texlogiya",
    category: "Web Apps",
    badge: "Tech Platform",
    description:
      "A futuristic IT and tech industry showcase portal featuring interactive service modules, tech news highlights, and smooth scroll animations.",
    longDescription:
      "Texlogiya is a modern technology hub presenting cutting-edge tech articles, software insights, and interactive service modules. Styled with cyber aesthetics and Bento Grid layouts.",
    highlights: [
      "Bento Grid architecture for modern feature highlights",
      "Interactive category tabs for technology topics",
      "Performance-optimized responsive layout with zero layout shifts",
      "Modern typography and neon glassmorphism accents",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    demoUrl: "https://example.com/texlogiya-demo", // [Editable placeholder]
    githubUrl: "https://github.com/rustamov-islom/texlogiya", // [Editable placeholder]
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    gradient: "from-purple-500/20 to-blue-600/20",
    accentColor: "#8B5CF6",
  },
];

export const certificates = [
  {
    id: "mars-hackathon-2026",
    title: "Mars Hackathon Participant Sertifikati (Top 1)",
    issuer: "Mars IT School & IT Park Uzbekistan",
    date: "16.08.2026",
    image: "/certificates/mars-hackathon.png",
    skills: ["Top 1 Winner", "React.js", "Mars Hackathon", "Frontend Engineering"],
    credentialUrl: "/certificates/mars-hackathon.png",
    badge: "Verified Award",
    description:
      "Awarded for outstanding active participation and achieving Top 1 standing in the Mars Hackathon August 2026 selection stage (CEO Ruslan Rafikovich - Mars IT School).",
    isReal: true,
  },
  {
    id: "placeholder-cert-1",
    title: "Modern Web & Frontend Architecture [Placeholder]",
    issuer: "Verified Academy / Institution [Placeholder]",
    date: "Upcoming / In Progress",
    image: null,
    skills: ["React.js", "JavaScript ES6+", "UI/UX Systems"],
    credentialUrl: "#",
    badge: "Placeholder Slot",
    description:
      "Editable slot for upcoming certification. Add your official certificate image and verification link here.",
    isReal: false,
  },
  {
    id: "placeholder-cert-2",
    title: "AI-Powered Frontend Engineering [Placeholder]",
    issuer: "Professional Course / Workshop [Placeholder]",
    date: "Upcoming / In Progress",
    image: null,
    skills: ["AI Coding Tools", "Tailwind CSS", "3D Web"],
    credentialUrl: "#",
    badge: "Placeholder Slot",
    description:
      "Editable slot for upcoming certification. Add your official certificate image and verification link here.",
    isReal: false,
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/rustamov-islom", icon: "Github" },
  { name: "Telegram", url: "https://t.me/rustamov_islom", icon: "Telegram" },
  { name: "LinkedIn", url: "https://linkedin.com/in/rustamov-islom", icon: "Linkedin" }, // [Placeholder]
  { name: "Instagram", url: "https://instagram.com/rustamov_islom", icon: "Instagram" }, // [Placeholder]
];

export const navLinks = [
  { id: "home", labelKey: "home", href: "#home" },
  { id: "about", labelKey: "about", href: "#about" },
  { id: "skills", labelKey: "skills", href: "#skills" },
  { id: "projects", labelKey: "projects", href: "#projects" },
  { id: "terminal", labelKey: "terminal", href: "#terminal" },
  { id: "games", labelKey: "games", href: "#games" },
  { id: "certificates", labelKey: "certificates", href: "#certificates" },
  { id: "contact", labelKey: "contact", href: "#contact" },
];
