"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";
import { profile } from "@/data/profile";
import { OPEN_WHATSAPP_EVENT, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

const firstName = profile.name.split(" ")[0];

const quickMessages = [
  "I'd like to hire you for a project.",
  "I want to discuss a website.",
  "I have a mobile app idea.",
  "Just saying hi!",
];

const defaultMessage = `I found your portfolio and would like to get in touch.`;

function buildMessage(name: string, message: string) {
  const greeting = name.trim() ? `Hi ${firstName}, I'm ${name.trim()}.` : `Hi ${firstName}!`;
  return `${greeting}\n\n${message.trim() || defaultMessage}`;
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sentCount, setSentCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Open from anywhere on the page (e.g. the Contact section button).
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_WHATSAPP_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_WHATSAPP_EVENT, onOpen);
  }, []);

  // Close on Escape or click outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    const t = setTimeout(() => textareaRef.current?.focus(), 150);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      clearTimeout(t);
    };
  }, [open]);

  function send(e?: React.FormEvent) {
    e?.preventDefault();
    window.open(whatsappLink(buildMessage(name, message)), "_blank", "noopener,noreferrer");
    // Keep the name, clear the message so the visitor can send another one.
    setMessage("");
    setSentCount((n) => n + 1);
  }

  return (
    <div ref={containerRef} className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id="whatsapp-panel"
            role="dialog"
            aria-label="Send a WhatsApp message"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[calc(100vw-2rem)] max-w-sm origin-bottom-right overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/10"
          >
            <div className="flex items-center gap-3 bg-wa-strong px-4 py-3 text-white">
              <div className="grid size-10 place-items-center rounded-full bg-white/20 text-sm font-semibold">
                {profile.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{profile.name}</p>
                <p className="text-xs text-white/80">Usually replies within a few hours</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid size-8 place-items-center rounded-full hover:bg-white/15"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={send} className="space-y-3 p-4">
              <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-bg px-3 py-2 text-sm">
                Hi there 👋 Write your message below and it will open in WhatsApp.
              </div>

              {sentCount > 0 && (
                <p className="flex items-center gap-2 rounded-lg bg-accent-soft px-3 py-2 text-xs text-accent">
                  <CheckCircle2 className="size-4 shrink-0" />
                  Opened in WhatsApp. You can send another message anytime.
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {quickMessages.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      setMessage(q);
                      textareaRef.current?.focus();
                    }}
                    className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                      message === q
                        ? "border-wa-strong bg-wa-strong text-white"
                        : "border-line text-muted hover:border-subtle hover:text-fg"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                aria-label="Your name"
                className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none placeholder:text-subtle focus:border-wa-strong"
              />
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) send();
                }}
                rows={3}
                placeholder="Type your message…"
                aria-label="Your message"
                className="w-full resize-none rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none placeholder:text-subtle focus:border-wa-strong"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-wa-strong px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Send className="size-4" />
                {sentCount > 0 ? "Send another message" : "Send on WhatsApp"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        aria-controls="whatsapp-panel"
        className="group relative grid size-14 place-items-center rounded-full bg-wa text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-wa opacity-25 motion-reduce:hidden" />}
        {open ? <X className="relative size-6" /> : <WhatsAppIcon className="relative size-7" />}
        {!open && (
          <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-fg px-2.5 py-1 text-xs font-medium whitespace-nowrap text-bg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
        )}
      </button>
    </div>
  );
}
