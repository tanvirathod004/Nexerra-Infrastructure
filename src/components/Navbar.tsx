"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { companyInfo } from "@/lib/data";

const navLinks = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team",     label: "Team" },
  { href: "#contact",  label: "Contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm shadow-black/8 py-3"
    : "bg-transparent py-5";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ───────────────────────────── */}
          <button
            onClick={() => scrollTo("#home")}
            className="group focus:outline-none"
          >
            <div className="group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/nexerra-logo.png"
                alt="Nexerra Infrastructure"
                width={200}
                height={160}
                className="object-contain h-28 w-auto"
                priority
              />
            </div>
          </button>

          {/* ── Desktop links ───────────────────── */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group focus:outline-none ${
                  scrolled ? "text-[#3D3D3D] hover:text-[#6B8C6B]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6B8C6B] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* ── Desktop CTA ─────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phones[1].number.replace(/\s/g,"")}`}
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                scrolled ? "text-[#6B8C6B]" : "text-[#8FBB8F]"
              } hover:text-[#3D5E3D]`}
            >
              <Phone className="w-3.5 h-3.5" />
              {companyInfo.phones[1].number}
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#6B8C6B]/30 hover:-translate-y-0.5"
            >
              Get Quote
            </button>
          </div>

          {/* ── Mobile toggle ───────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              scrolled ? "text-[#1A1A1A] hover:bg-[#6B8C6B]/10" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{  opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-t border-[#E2E1DC] shadow-xl px-4 py-5 space-y-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => { scrollTo(link.href); setIsOpen(false); }}
                className="w-full text-left text-[#2D2D2D] hover:text-[#6B8C6B] hover:bg-[#F2F5F2] font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#E2E1DC] flex flex-col gap-2">
              <a
                href={`tel:${companyInfo.phones[1].number.replace(/\s/g,"")}`}
                className="flex items-center gap-2 text-[#6B8C6B] font-semibold text-sm px-4 py-2"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.phones[1].number}
              </a>
              <button
                onClick={() => { scrollTo("#contact"); setIsOpen(false); }}
                className="bg-[#6B8C6B] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-[#3D5E3D] transition-colors"
              >
                Get a Free Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
