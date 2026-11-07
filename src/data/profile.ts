// All portfolio content lives here.

export const profile = {
  name: "Zahidul Islam",
  role: "MERN Stack Developer",
  location: "Jashore, Bangladesh",
  email: "zahidulislam.here@gmail.com",
  phone: "+8801915215719",
  whatsapp: "8801915215719", // international format, no "+" — used for wa.me links
  intro:
    "I build fast, clean and user-friendly web applications with Next.js, React, Node.js and MongoDB — and I enjoy turning client requirements into products people actually use.",
  summary:
    "Motivated MERN Stack Developer with strong skills in Next.js, React, Node.js, Express, MongoDB and PostgreSQL. Experienced in building responsive, user-friendly interfaces with Tailwind CSS and managing state with Redux. Capable of developing clean REST APIs and integrating smooth frontend–backend workflows. Always eager to learn new technologies and contribute to modern, scalable web applications.",
  socials: {
    github: "https://github.com/git-zahidul-islam",
    linkedin: "https://www.linkedin.com/in/zahidul-islam-dev/",
    youtube: "https://www.youtube.com/@Zahidul-Islam-dev",
    facebook: "https://www.facebook.com/Zahidulislampro12",
    instagram: "https://www.instagram.com/zahidislam.dev/",
    x: "https://x.com/ZahidulIslamDev",
  },
  // Used to load the latest uploads automatically (YouTube RSS feed).
  youtubeChannelId: "UCa9Mg6xYhrjA7RqJGSnbz9A",
};

export type SocialKey = keyof typeof profile.socials;

export const socialLabels: Record<SocialKey, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  facebook: "Facebook",
  instagram: "Instagram",
  x: "X (Twitter)",
};

export const stats = [
  { value: "50+", label: "Clients handled" },
  { value: "2", label: "Client projects delivered" },
  { value: "2+", label: "Years of experience" },
];

export const experience = [
  {
    role: "Junior Frontend Developer",
    company: "Nexbell Inc",
    period: "October 2024 – Present",
    highlight:
      "Currently working on a large-scale multi-vendor e-commerce solution.",
    points: [
      "Building features for a multi-vendor e-commerce platform — vendor dashboards, product and order management flows.",
      "Develop and maintain frontend systems using Django, HTML, Tailwind CSS, JavaScript and Next.js.",
      "Collaborate with backend teams to integrate APIs and improve performance.",
      "Optimize the frontend and ensure system scalability.",
      "Troubleshoot and resolve bugs to keep applications reliable.",
    ],
  },
];

export const clientWork = {
  count: "50+",
  title: "Client handling & onboarding",
  description:
    "Beyond writing code, I work directly with the clients who come through our company website — from the first conversation to the day they confidently use the software on their own.",
  items: [
    {
      title: "Software onboarding",
      text: "Walked 50+ clients through our software step by step, so they could use it confidently on their own.",
    },
    {
      title: "Requirement gathering",
      text: "Listened to each client's business needs and translated them into clear, actionable requirements.",
    },
    {
      title: "Negotiation",
      text: "Handled pricing, scope and timeline discussions to reach agreements that worked for both sides.",
    },
    {
      title: "Ongoing support",
      text: "Stayed the point of contact after delivery — answering questions and resolving issues quickly.",
    },
  ],
};

export type Project = {
  title: string;
  type: "personal" | "client" | "confidential";
  problem: string;
  features: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Parcel Delivery",
    type: "personal",
    problem:
      "Efficiently manage and track parcels for both customers and admins.",
    features: [
      "Full-stack parcel delivery system with frontend and backend.",
      "Responsive UI for customers and an admin dashboard for managing shipments.",
      "Backend logic for tracking, shipment management and data storage.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "shadcn/ui",
      "Express.js",
      "Mongoose",
      "Passport.js",
      "Zod",
      "JWT",
    ],
    links: [
      { label: "Client", href: "#" },
      { label: "Server", href: "#" },
      { label: "Live", href: "#" },
    ],
  },
  {
    title: "Cheap Mytrip",
    type: "client",
    problem:
      "Made complex travel planning simple by putting visa requests and tour bookings online.",
    features: [
      "Users can browse every service without any hassle.",
      "Users can request a visa, processed through the admin.",
      "Users can choose package tours for themselves and their family.",
    ],
    tech: ["React.js", "Tailwind CSS", "Swiper", "AOS"],
    links: [{ label: "Live", href: "#" }],
  },
  {
    title: "POS Application",
    type: "confidential",
    problem:
      "A point-of-sale system that lets a retail business run daily sales, stock and reporting from one place.",
    features: [
      "Fast checkout and billing with receipt generation.",
      "Product and inventory management with stock tracking.",
      "Sales reports for daily, monthly and product-wise insights.",
      "Role-based access for admins and cashiers.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    note: "Paid commercial software — screenshots and product name are withheld under the client agreement.",
  },
];

export const nowBuilding = {
  title: "A cross-platform mobile application",
  description:
    "I'm currently building a mobile app for Android and iOS — taking my React experience to native mobile with a single codebase.",
  tech: ["React Native", "Expo", "TypeScript"],
};

export const skills = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Redux"],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "Mongoose", "Zod", "Prisma"] },
  { group: "Database", items: ["MongoDB", "PostgreSQL"] },
  { group: "Mobile", items: ["React Native", "Expo"] },
  { group: "Other", items: ["Firebase", "JWT"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman"] },
  { group: "Familiar with", items: ["Python", "Go"] },
];

export const education = {
  degree: "BBA (Bachelor of Business Administration) in Accounting",
  institution: "National University",
};

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Comfortable" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
