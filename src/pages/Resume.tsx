import { resumeProfile } from "@/data/resume";
import resume from "@/assets/myResumeOscasavia.pdf";
import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  ChevronDown,
} from "lucide-react";
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
  const visibleAchievements = expanded
    ? job.achievements
    : job.achievements.slice(0, visibleCount);

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
              aria-expanded={expanded}
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
  const { experience, education, certifications, summary } = resumeProfile;

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
            <p className="body-large">{summary}</p>
            <br />
            <br />
            <a
              href={resume}
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
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.period}
                    </p>
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
