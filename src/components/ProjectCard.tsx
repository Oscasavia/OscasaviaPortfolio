import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const content = (
    <>
      <div
        className={`relative flex min-h-48 flex-col justify-end overflow-hidden bg-gradient-to-br ${project.color} p-8 md:min-h-56`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <div className="relative">
          <p className="mb-2 text-sm text-muted-foreground">
            {project.subtitle}
          </p>
          <h3 className="heading-card pr-8">{project.title}</h3>
        </div>
        {project.url && (
          <ArrowUpRight
            aria-hidden="true"
            className="absolute right-7 top-7 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mb-6 mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-auto text-sm font-medium">
          {project.url ? (
            <>
              View project <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          ) : (
            <span className="text-muted-foreground">Details coming soon</span>
          )}
        </p>
      </div>
    </>
  );
  return (
    <article id={project.id} className="h-full scroll-mt-28">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass-card flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg"
          aria-label={`${project.title} (opens in a new tab)`}
        >
          {content}
        </a>
      ) : (
        <div className="glass-card flex h-full flex-col overflow-hidden">
          {content}
        </div>
      )}
    </article>
  );
};
export default ProjectCard;
