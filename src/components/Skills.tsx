import { skills } from "@/data/profile";
import { Reveal, Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools I work with">
      <div className="divide-y divide-line border-y border-line">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.03}>
            <div className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <h3 className="text-sm font-medium text-subtle">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
