import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import { Reveal, Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I work">
      <ol className="space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[31px] top-1 grid size-4 place-items-center rounded-full border border-accent bg-bg sm:-left-[39px]">
              <span className="size-1.5 rounded-full bg-accent" />
            </span>
            <Reveal>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-subtle">{job.period}</p>
              </div>

              <p className="mt-4 inline-flex items-start gap-2 rounded-lg bg-accent-soft px-3 py-2 text-sm text-accent">
                <Briefcase className="mt-0.5 size-4 shrink-0" />
                {job.highlight}
              </p>

              <ul className="mt-5 max-w-3xl space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-subtle" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
