import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", "Mobile", "Web", "AI"];
const Projects = () => {
  const [category, setCategory] = useState("All");
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) setCategory("All");
  }, [hash]);
  useEffect(() => {
    if (hash && category === "All") {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [hash, category]);
  const visible = projects.filter(
    (project) => category === "All" || project.category === category,
  );
  return (
    <div className="min-h-screen pt-20">
      <section className="section-content pb-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Portfolio
            </p>
            <h1 className="heading-display mb-8">
              Selected
              <br />
              <span className="text-muted-foreground">Projects</span>
            </h1>
            <div className="divider mb-8" />
            <p className="body-large">
              Mobile apps, web experiences, and experiments in AI. A selection
              of things I’ve built to help people connect, find opportunities,
              and plan ahead.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="pb-24 md:pb-32" aria-label="Project gallery">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-secondary"}`}
              >
                {item}
                <span className="ml-2 opacity-70">
                  {item === "All"
                    ? projects.length
                    : projects.filter((project) => project.category === item)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <p role="status" className="sr-only">
            Showing {visible.length} {category === "All" ? "" : category}{" "}
            projects
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
