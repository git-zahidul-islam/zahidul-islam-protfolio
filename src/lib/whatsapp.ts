import { profile } from "@/data/profile";

export const OPEN_WHATSAPP_EVENT = "open-whatsapp";

export function whatsappLink(message: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppWidget() {
  window.dispatchEvent(new Event(OPEN_WHATSAPP_EVENT));
}
