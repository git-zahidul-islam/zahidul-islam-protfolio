"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Open to new opportunities
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I&apos;m {profile.name}.
        </h1>
        <p className="mt-3 text-2xl font-medium tracking-tight text-muted sm:text-4xl">
          {profile.role}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.intro}
        </p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-subtle">
          <MapPin className="size-4" /> {profile.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            View my work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-fg"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-fg"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
