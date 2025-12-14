import { motion } from "framer-motion";
import {
  Code2,
  Database,
  LayoutDashboard,
  BarChart3,
  Laptop,
  Workflow,
  Smartphone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C",
        "C++",
        "C#",
        "PHP",
        "YAML",
        "Jinja2",
        "Bash",
        "R",
        "MATLAB",
        "Haskell",
        "Dart",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      title: "DevOps & Automation",
      icon: Workflow,
      skills: [
        "Ansible",
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "VMWare",
        "Ollama",
        "CAP",
        "TIETools",
        "Aria/vRealize Automation",
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Expo Go", "Firebase", "iOS", "Android", "React Native"],
    },
    {
      title: "Version Control",
      icon: LayoutDashboard,
      skills: ["GitHub", "GitHub EMU", "Jira", "Rally", "Miro"],
    },
    {
      title: "Data & Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Grafana", "Apptio", "Excel"],
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase"],
    },
    {
      title: "Development Tools",
      icon: Laptop,
      skills: ["VS Code", "Eclipse", "Android Studio", "XCode"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-content pb-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-4">
              Expertise
            </p>
            <h1 className="heading-display mb-8">
              Skills &<br />
              <span className="text-muted-foreground">Technologies</span>
            </h1>
            <div className="divider mb-8" />
            <p className="body-large">
              A comprehensive toolkit built over years of hands-on experience 
              in software engineering and DevOps.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AnimatedSection key={category.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card p-8 h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
