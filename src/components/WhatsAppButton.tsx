"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917769091666?text=Hi%20Nexerra%20Infrastructure!%20I%20would%20like%20to%20discuss%20a%20construction%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:shadow-green-500/60 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
    </a>
  );
}
