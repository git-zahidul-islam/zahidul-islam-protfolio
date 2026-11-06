import { profile, stats } from "@/data/profile";
import { Reveal, Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="A developer who also speaks client.">
      <Reveal>
        <p className="max-w-2xl leading-relaxed text-muted">{profile.summary}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <dl className="mt-10 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-6 text-center sm:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
              <p className="mt-1 text-xs text-subtle sm:text-sm">{s.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
