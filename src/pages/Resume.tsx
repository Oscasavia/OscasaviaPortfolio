import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experience = [
    {
      title: "DevEx Engineer (SWE Program)",
      company: "CVS Health",
      period: "Jan 2025 - Present · 10 mos",
      description: "",
      achievements: [
        "Contributed to the Experience Platform, a suite of internal tools that accelerates the way teams build and ship digital experiences using reusable components known as Xponents",
        "Built automated CI/CD pipelines using GitHub Actions to streamline release processes, including semantic versioning, Docker image creation, and tag management for internal GitHub Actions",
        "Supported release and deployment of Lighthouse Server, a performance audit tool, by automating container builds and enabling secure scan workflows with Snyk and Secure Pipeline",
        "Authored and updated internal documentation to guide product teams on best practices for onboarding, deployment, and usage of the Experience Platform",
        "Collaborated cross-functionally with platform engineers, product managers, and documentation specialists to improve developer efficiency across the organization",
        "Implemented the MicroEdge control layer to enhance platform authentication capabilities and developer experience",
        "Developed Grafana observability dashboards for availability, response codes, memory, CPU, and error tracking to improve system visibility in CAP",
      ],
    },
    {
      title: "Automation Engineer (SWE Program)",
      company: "CVS Health",
      period: "Jun 2024 - Jan 2025 · 8 mos",
      description: "",
      achievements: [
        "Designed and maintained Jenkins pipelines to streamline CI/CD processes",
        "Implemented logging roles to enable detailed tracking of playbook statistics and analytics",
        "Updated and maintained comprehensive code documentation for internal reference",
        "Diagnosed and resolved technical issues, including troubleshooting and server connectivity testing",
        "Automated Datapower firmware upgrade, improving efficiency and reducing manual intervention",
        "Developed automated solutions for inventory management, enabling real-time tracking of inventory usage",
        "Created intuitive front-end forms to simplify the execution of automated tasks",
        "Led four cross-functional automation teams in successful GitHub EMU migration initiatives",
      ],
    },
    {
      title: "Jr. Scrum Master/IT Project Manager Contractor",
      company: "CVS Health",
      period: "Sep 2023 - Jun 2024 · 10 mos",
      description: "",
      achievements: [
        "Analyzed problems and worked with teams to develop solutions",
        "Identified project scopes, constraints, risks and deadlines",
        "Performed various Express Stack UI testing instances",
        "Created and delivered Excel reports to upper management and stakeholders",
        "Created, managed, and implemented PI Program and Iteration planning boards in Miro across more than 10 cross-functional teams on the ART",
        "Assumed Product Manager and Project Manager roles to deliver Express Stack value to our customers (Enterprise engineers and Application developers)",
        "Facilitated standups, retrospectives, and testing bridges",
        "Remediated defects",
        "Promoted use of Agile SAFe Engineering Practices",
        "Coordinated, collaborated, and facilitated over 5 projects, spanning databases (Oracle, DB2, SQL), web technologies (IIS), and application development on both Windows and RedHat Linux platforms",
        "Utilized gateway integration (including API Connect, DataPower, Kong) to deliver significant value to clients",
      ],
    },
    {
      title: "Project Manager College Intern",
      company: "CVS Health",
      period: "May 2023 - Sep 2023 · 5 mos",
      description: "",
      achievements: [
        "Participated in Scrum workshops and meetings related to projects to gain extensive knowledge and experience",
        "Shadowed Product Owner and Product Manager",
        "Utilized Power BI to build and design reports and dashboards of data for internal use",
        "Provisioned, deprovisioned, managed, and tracked VMs through vRA",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor's degree, Software Engineering",
      school: "Washington State University",
      period: "Aug 2018 - Dec 2022",
      details: "Mathematics Minor",
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground">
            My professional journey
          </p>
          <Button className="mt-4" asChild>
            <a
              href="/assets/OscasaviaB_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
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
                    <p className="text-sm text-muted-foreground">
                      {job.period}
                    </p>
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
