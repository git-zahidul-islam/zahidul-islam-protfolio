"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { openWhatsAppWidget } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";
import { Reveal, Section } from "./Section";

export function Contact() {
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: profile.location },
  ];

  return (
    <Section id="contact" label="Contact" title="Let's build something together.">
      <Reveal>
        <p className="max-w-xl leading-relaxed text-muted">
          Have a project in mind, need a web or mobile app, or just want to say hi? The fastest way to
          reach me is WhatsApp — or drop me an email.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openWhatsAppWidget}
            className="inline-flex items-center gap-2 rounded-full bg-wa-strong px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-4" />
            Message on WhatsApp
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            <Mail className="size-4" />
            Send an email
          </a>
        </div>

        <ul className="mt-10 space-y-3">
          {items.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-muted">
              <Icon className="size-4 text-subtle" />
              {href ? (
                <a href={href} className="transition-colors hover:text-fg">
                  {label}
                </a>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm font-medium text-subtle">Find me online</p>
        <SocialLinks
          className="mt-3 gap-2"
          linkClassName="grid size-11 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
        />
      </Reveal>
    </Section>
  );
}
