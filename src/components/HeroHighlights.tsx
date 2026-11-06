"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, CalendarClock, FolderKanban, Lock, Smartphone, Users } from "lucide-react";
import { clientWork, experience, nowBuilding, projects, stats, type Project } from "@/data/profile";

const job = experience[0];
const years = stats.find((s) => s.label.toLowerCase().includes("year"));

const projectBadge: Record<Project["type"], string> = {
  personal: "Full-stack",
  client: "Client",
  confidential: "Confidential",
};

const card =
  "group block rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur-sm transition-colors hover:border-accent/40";

function Item({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function CardLabel({ icon: Icon, children }: { icon: typeof Users; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-1.5 text-xs font-medium text-subtle">
      <Icon className="size-3.5 text-accent" />
      {children}
      <ArrowUpRight className="ml-auto size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
    </p>
  );
}

export function HeroHighlights() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Item index={0} className="col-span-2">
        <a href="#experience" className={card}>
          <CardLabel icon={Briefcase}>Currently at {job.company}</CardLabel>
          <p className="mt-2 flex items-start gap-2 font-medium">
            <span className="relative mt-2 flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Building a multi-vendor e-commerce solution
          </p>
          <p className="mt-1 pl-4 text-xs text-subtle">{job.role}</p>
        </a>
      </Item>

      <Item index={1}>
        <a href="#clients" className={`${card} h-full`}>
          <CardLabel icon={Users}>Clients</CardLabel>
          <p className="mt-2 text-3xl font-semibold tracking-tight">{clientWork.count}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">Onboarding &amp; negotiation</p>
        </a>
      </Item>

      <Item index={2}>
        <a href="#experience" className={`${card} h-full`}>
          <CardLabel icon={CalendarClock}>Experience</CardLabel>
          <p className="mt-2 text-3xl font-semibold tracking-tight">{years?.value}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">Years building for the web</p>
        </a>
      </Item>

      <Item index={3} className="col-span-2">
        <a href="#projects" className={card}>
          <CardLabel icon={FolderKanban}>Projects</CardLabel>
          <ul className="mt-2 divide-y divide-line">
            {projects.map((p) => (
              <li key={p.title} className="flex items-center justify-between gap-3 py-2 first:pt-1 last:pb-0">
                <span className="truncate text-sm font-medium">{p.title}</span>
                <span
                  className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                    p.type === "personal" ? "border border-line text-subtle" : "bg-accent-soft text-accent"
                  }`}
                >
                  {p.type === "confidential" && <Lock className="size-3" />}
                  {projectBadge[p.type]}
                </span>
              </li>
            ))}
          </ul>
        </a>
      </Item>

      <Item index={4} className="col-span-2">
        <a href="#now" className={`${card} flex items-center gap-3`}>
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
            <Smartphone className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium">Building a mobile app</span>
            <span className="block truncate text-xs text-subtle">{nowBuilding.tech.slice(0, 2).join(" + ")} · In progress</span>
          </span>
          <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-subtle opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </Item>
    </div>
  );
}
