import { useState } from "react";
import { Briefcase, GraduationCap, Award, Download, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Job {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const JobCard = ({ job, index }: { job: Job; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 3;
  const hasMore = job.achievements.length > visibleCount;
  const visibleAchievements = expanded ? job.achievements : job.achievements.slice(0, visibleCount);

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="glass-card border-l-4 border-l-accent rounded-2xl overflow-hidden">
        <div className="px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 w-full">
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-accent font-medium">{job.company}</p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {job.period}
            </span>
          </div>
        </div>
        <div className="px-8 pb-6">
          <ul className="space-y-3">
            {visibleAchievements.map((achievement, i) => (
              <li key={i} className="text-muted-foreground flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              <span>{expanded ? "See less" : "See more"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Resume = () => {
  const experience = [
    {
      title: "DevEx Engineer (SWE Program)",
      company: "CVS Health",
      period: "Jan 2025 - Present · 10 mos",
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-content pb-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-4">
              Career
            </p>
            <h1 className="heading-display mb-8">
              Resume &<br />
              <span className="text-muted-foreground">Experience</span>
            </h1>
            <div className="divider mb-8" />
            <p className="body-large">
              An overview of my professional journey and the experience I’ve gained over the years, 
              highlighting the skills and growth that have shaped my career.
            </p><br /><br />
            <a
              href="/assets/myResumeOscasavia.pdf"
              download="Oscasavia_Resume.pdf"
              className="btn-primary inline-flex"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section className="surface-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h2 className="heading-section">Experience</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {experience.map((job, index) => (
              <JobCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <AnimatedSection className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="heading-card">Education</h2>
                </div>
              </AnimatedSection>

              {education.map((edu, index) => (
                <AnimatedSection key={index} delay={0.1}>
                  <div className="glass-card p-8">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-accent font-medium mb-1">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <AnimatedSection className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="heading-card">Certifications</h2>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="glass-card p-8 space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-secondary rounded-2xl"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <p className="font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
