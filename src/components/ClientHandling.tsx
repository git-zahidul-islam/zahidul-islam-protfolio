import { GraduationCap, Handshake, LifeBuoy, ListChecks } from "lucide-react";
import { clientWork } from "@/data/profile";
import { Reveal, Section } from "./Section";

const icons = [GraduationCap, ListChecks, Handshake, LifeBuoy];

export function ClientHandling() {
  return (
    <Section id="clients" label="Beyond code" title={clientWork.title}>
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <p className="text-6xl font-semibold tracking-tight text-accent sm:text-7xl">
            {clientWork.count}
          </p>
          <p className="max-w-xl leading-relaxed text-muted">
            <span className="font-medium text-fg">clients handled.</span> {clientWork.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {clientWork.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-surface p-5">
                <Icon className="size-5 text-accent" />
                <h3 className="mt-3 font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
