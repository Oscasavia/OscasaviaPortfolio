import { Code2, Database, LayoutDashboard, BarChart3, Laptop, Workflow, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "C#", "PHP", "YAML", "Jinja2", "Bash", "R", "MATLAB", "Haskell", "Dart", "HTML", "CSS", "SQL"],
      color: "from-primary/80 to-accent/80",
    },
    {
      title: "DevOps & Automation Tools",
      icon: Workflow,
      skills: ["Ansible", "Jenkins", "GitHub Actions", "Docker", "VMWare", "Ollama", "CAP", "TIETools", "Aria/vRealize Automation"],
      color: "from-secondary/80 to-primary/80",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Expo Go", "Firebase", "iOS", "Android", "React Native"],
      color: "from-secondary/80 to-accent/80",
    },
    {
      title: "Version Control & Collaboration",
      icon: LayoutDashboard,
      skills: ["GitHub", "GitHub EMU", "Jira", "Rally", "Miro"],
      color: "from-primary to-accent",
    },
    {
      title: "Data & Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Grafana", "Apptio", "Excel"],
      color: "from-accent to-secondary",
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase"],
      color: "from-secondary to-primary",
    },
    {
      title: "Development Tools & IDEs",
      icon: Laptop,
      skills: ["VS Code", "Eclipse", "Android Studio", "XCode"],
      color: "from-accent/80 to-secondary/80",
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-6 rounded-2xl space-y-4 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-8 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold gradient-text">
            Always Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technology is constantly evolving, and so am I. I'm committed to
            continuous learning and staying up-to-date with the latest trends
            and best practices in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
