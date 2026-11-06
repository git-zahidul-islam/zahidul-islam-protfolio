import { ArrowUpRight, Lock } from "lucide-react";
import { projects, type Project } from "@/data/profile";
import { Reveal, Section, Tag } from "./Section";

const badges: Record<Project["type"], { label: string; className: string }> = {
  personal: { label: "Personal · Full-stack", className: "border-line text-muted" },
  client: { label: "Client project", className: "border-accent/40 text-accent bg-accent-soft" },
  confidential: { label: "Client project · Confidential", className: "border-accent/40 text-accent bg-accent-soft" },
};

function ProjectCard({ project }: { project: Project }) {
  const badge = badges[project.type];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-subtle/60 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
        >
          {project.type === "confidential" && <Lock className="size-3" />}
          {badge.label}
        </span>
      </div>

      <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>

      <ul className="mt-5 space-y-2">
        {project.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>

      {project.note && (
        <p className="mt-5 flex items-start gap-2 rounded-lg border border-dashed border-line px-3 py-2.5 text-xs leading-relaxed text-subtle">
          <Lock className="mt-0.5 size-3.5 shrink-0" />
          {project.note}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {project.links && (
        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
