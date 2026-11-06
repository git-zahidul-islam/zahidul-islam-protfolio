import { Smartphone } from "lucide-react";
import { nowBuilding } from "@/data/profile";
import { Reveal, Section, Tag } from "./Section";

export function NowBuilding() {
  return (
    <Section id="now" label="Now" title="Currently building">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
            <Smartphone className="size-8" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold">{nowBuilding.title}</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
                <span className="size-1.5 animate-pulse rounded-full bg-current" />
                In progress
              </span>
            </div>
            <p className="mt-2 leading-relaxed text-muted">{nowBuilding.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {nowBuilding.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
