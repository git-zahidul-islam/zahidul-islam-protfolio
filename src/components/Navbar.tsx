"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} className="font-semibold tracking-tight">
      {profile.name.split(" ")[0]}
      <span className="text-accent">.</span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // While the menu is open: lock page scroll, close on Escape, close if resized to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 640px)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    closeRef.current?.focus();
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  // Close first (which unlocks scrolling), then scroll to the chosen section.
  function goTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }, 60);
  }

  return (
    <header>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

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
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="ml-1 grid size-9 place-items-center rounded-full border border-line text-muted sm:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.05 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-60 flex flex-col bg-bg/85 backdrop-blur-xl sm:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Logo onClick={() => setOpen(false)} />
              <div className="flex items-center gap-1">
                <ThemeToggle />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="ml-1 grid size-9 place-items-center rounded-full border border-line text-fg"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.08 + i * 0.06, ease: "easeOut" } }}
                  exit={{ opacity: 0, y: 12, transition: { duration: 0.15 } }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => goTo(e, link.href)}
                    className="group flex items-baseline gap-4 py-3"
                  >
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="space-y-4 border-t border-line px-8 py-6 text-sm text-muted"
            >
              <a href={`mailto:${profile.email}`} className="inline-flex min-w-0 items-center gap-2 hover:text-fg">
                <Mail className="size-4 shrink-0" />
                <span className="truncate">{profile.email}</span>
              </a>
              <SocialLinks
                className="-ml-2 gap-1"
                linkClassName="grid size-9 place-items-center rounded-full transition-colors hover:text-fg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
