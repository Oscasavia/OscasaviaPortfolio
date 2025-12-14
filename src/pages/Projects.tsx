import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Projects = () => {
  const projects = [
    {
      title: "Wimbli",
      subtitle: "Social Events App",
      description:
        "A cross-platform mobile app focused on helping people discover hyper-local, spontaneous experiences and real-world connections.",
      tech: ["Flutter", "Dart", "Firebase"],
      color: "from-amber-500/20 to-orange-500/20",
      url: "https://wimbli.app/",
    },
    {
      title: "Savia Job Consultants",
      subtitle: "Job Website",
      description:
        "A static web application for viewing and applying to various job posts in Uganda.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      color: "from-emerald-500/20 to-teal-500/20",
      url: "https://saviajobconsultants.netlify.app/",
    },
    {
      title: "Clarifin",
      subtitle: "Mobile Financial App",
      description:
        "An android mobile application that helps users with planning and tracking their personal financial goals.",
      tech: ["Flutter", "Dart"],
      color: "from-blue-500/20 to-indigo-500/20",
      url: "https://play.google.com/store/apps/details?id=com.oscasavia.clarifin&hl=en_US",
    },
    {
      title: "Oscasavia AI",
      subtitle: "Personal Generative AI",
      description:
        "AI-powered content generation tool with natural language processing capabilities.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind"],
      color: "from-purple-500/20 to-pink-500/20",
      url: null,
    },
  ];

  const handleProjectClick = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      toast.info("Project details coming soon!");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-content pb-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-4">
              Portfolio
            </p>
            <h1 className="heading-display mb-8">
              Selected<br />
              <span className="text-muted-foreground">Projects</span>
            </h1>
            <div className="divider mb-8" />
            <p className="body-large">
              A selection of projects I've worked on, showcasing my skills in 
              mobile development, web applications, and AI integration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleProjectClick(project.url)}
                  className="group cursor-pointer glass-card overflow-hidden"
                >
                  {/* Project Header/Image Area */}
                  <div className={`h-64 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-end relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="relative z-10">
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {project.subtitle}
                      </p>
                      <h3 className="heading-card group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="w-5 h-5 text-background" />
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
