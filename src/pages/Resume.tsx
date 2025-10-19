import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Architected microservices infrastructure serving 1M+ users",
        "Reduced application load time by 60% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed full-stack applications and contributed to open-source projects.",
      achievements: [
        "Built e-commerce platform processing $5M+ in transactions",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
        "Contributed to 10+ open-source projects",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Assisted in development of web applications and learned industry best practices.",
      achievements: [
        "Developed RESTful APIs for mobile applications",
        "Collaborated with cross-functional teams",
        "Maintained 95% code coverage with unit tests",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Washington State University",
      period: "2015 - 2019",
      details: "Math Minor",
    },
  ];

  const certifications = [
    "Professional Scrum Master (PSM I)",
    "Certified SAFe 6 Agilist",
    "Microsoft Azure Fundamentals",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Resume</h1>
          <p className="text-xl text-muted-foreground">
            My professional journey
          </p>
          <Button className="mt-4">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-6 space-y-3"
                >
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-primary">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-accent to-secondary rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-secondary pl-6 space-y-2"
                >
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-secondary">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-primary/5 border border-primary/20 rounded-lg"
                >
                  <p className="font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
