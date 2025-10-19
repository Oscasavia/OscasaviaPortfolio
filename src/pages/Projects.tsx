import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Projects = () => {
  const projects = [
    {
      title: "Wimbli - Social Events App",
      description:
        "Wimbli is a cross-platform mobile app focused on helping people discover hyper-local, spontaneous experiences and real-world connections.",
      tech: ["Flutter", "Dart", "Firebase"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Savia Job Consultants - Job Website",
      description:
        "Savia Job Consultants is a static web application for viewing available job posts in Uganda.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      gradient: "from-accent to-secondary",
    },
    {
      title: "Clarifin - Mobile Financial App",
      description:
        "Clarifin is an android mobile application that helps users with planning and tracking their personal financial goals.",
      tech: ["Flutter", "Dart"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Oscasavia AI - Personal Generative AI",
      description:
        "AI-powered content generation tool with natural language processing capabilities.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind"],
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card flex-1"
                    asChild
                  >
                    <a
                      href="https://github.com/Oscasavia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      toast({
                        title: "Interested in a demo?",
                        description: "Please contact me to schedule a live demonstration of this project.",
                      });
                    }}
                  >
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
