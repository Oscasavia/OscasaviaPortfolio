import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      gradient: "from-accent to-secondary",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization and custom reporting.",
      tech: ["React", "D3.js", "Express", "MongoDB"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and transaction history.",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      gradient: "from-primary/80 to-accent/80",
    },
    {
      title: "Social Media Platform",
      description:
        "Social networking platform with real-time messaging and content sharing capabilities.",
      tech: ["Vue.js", "GraphQL", "PostgreSQL", "Redis"],
      gradient: "from-accent/80 to-secondary/80",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool with natural language processing capabilities.",
      tech: ["Python", "React", "OpenAI", "FastAPI"],
      gradient: "from-secondary/80 to-primary/80",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white text-center">
                  {project.title}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="glass-card flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
