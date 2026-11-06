import { GraduationCap, Languages } from "lucide-react";
import { education, languages } from "@/data/profile";
import { Reveal, Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Education" title="Education & languages">
      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <GraduationCap className="size-5 text-accent" />
            <h3 className="mt-3 font-medium">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{education.institution}</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <Languages className="size-5 text-accent" />
            <ul className="mt-3 space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
