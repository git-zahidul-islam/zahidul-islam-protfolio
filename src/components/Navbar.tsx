"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="ml-1 grid size-9 place-items-center rounded-full border border-line text-muted sm:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-5 rounded-2xl border border-line bg-surface px-4 py-2 sm:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md py-2.5 text-sm text-muted hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
