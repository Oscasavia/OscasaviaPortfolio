export const projects = [
  {
    id: "wimbli",
    category: "Mobile",
    title: "Wimbli",
    subtitle: "Social Events App",
    description:
      "A cross-platform mobile app focused on helping people discover hyper-local, spontaneous experiences and real-world connections.",
    tech: ["Flutter", "Dart", "Firebase"],
    color: "from-amber-500/20 to-orange-500/20",
    url: "https://wimbli.app/",
  },
  {
    id: "savia",
    category: "Web",
    title: "Savia Job Consultants",
    subtitle: "Job Website",
    description:
      "A static web application for viewing and applying to various job posts in Uganda.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    color: "from-emerald-500/20 to-teal-500/20",
    url: "https://saviajobconsultants.netlify.app/",
  },
  {
    id: "clarifin",
    category: "Mobile",
    title: "Clarifin",
    subtitle: "Mobile Financial App",
    description:
      "An android mobile application that helps users with planning and tracking their personal financial goals.",
    tech: ["Flutter", "Dart"],
    color: "from-blue-500/20 to-indigo-500/20",
    url: "https://play.google.com/store/apps/details?id=com.oscasavia.clarifin&hl=en_US",
  },
  {
    id: "oscasavia-ai",
    category: "AI",
    title: "Oscasavia AI",
    subtitle: "Personal Generative AI",
    description:
      "AI-powered content generation tool with natural language processing capabilities.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind"],
    color: "from-purple-500/20 to-pink-500/20",
    url: null,
  },
];

export type Project = (typeof projects)[number];
