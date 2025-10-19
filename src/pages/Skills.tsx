import { Code, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
      color: "from-primary to-accent",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "Express", "REST APIs", "GraphQL"],
      color: "from-accent to-secondary",
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
      color: "from-secondary to-primary",
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      color: "from-primary/80 to-accent/80",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-accent/80 to-secondary/80",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile", "Testing"],
      color: "from-secondary/80 to-primary/80",
    },
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
