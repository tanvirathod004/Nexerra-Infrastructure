"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { companyInfo } from "@/lib/data";

const navLinks = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services", dropdown: false },
  { href: "#projects", label: "Projects" },
  { href: "#team",     label: "Team" },
  { href: "#contact",  label: "Contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top announcement bar ────────────────────────── */}
      <div className="bg-[#1A1A1A] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[30px] text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyInfo.phones[1].number.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-white/55 hover:text-white transition-colors"
            >
              <Phone className="w-2.5 h-2.5" />
              {companyInfo.phones[1].number}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1.5 text-white/55 hover:text-white transition-colors"
            >
              <Mail className="w-2.5 h-2.5" />
              {companyInfo.email}
            </a>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8C6B]" />
              <span className="text-[#8FBB8F] font-semibold">ISO 9001:2015 Certified RCC Contractor</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/45">
            <span>Maharashtra · Gujarat · PAN India</span>
            <span className="text-white/20">|</span>
            {/* <button className="hover:text-white transition-colors">Careers</button> */}
            <button onClick={() => scrollTo("#contact")} className="hover:text-white transition-colors">Tenders</button>
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────── */}
      <nav className="bg-white shadow-sm shadow-black/8 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[66px]">

            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="focus:outline-none group">
              <Image
                src="/nexerra-logo.png"
                alt="Nexerra Infrastructure"
                width={130}
                height={104}
                className="object-contain h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center gap-0.5 px-3.5 py-2 text-sm font-medium text-[#3A3A3A] hover:text-[#6B8C6B] relative group transition-colors focus:outline-none"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 mt-0.5 opacity-50" />
                  )}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#6B8C6B] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </button>
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2 text-sm font-semibold border-2 border-[#2A2A2A] text-[#2A2A2A] rounded-lg hover:bg-[#2A2A2A] hover:text-white transition-all duration-200"
              >
                Talk to Us
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2 text-sm font-bold bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#6B8C6B]/30 hover:-translate-y-0.5"
              >
                Request a Quote →
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-[#6B8C6B]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-[#E8E8E8] shadow-xl px-4 py-5 space-y-1"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setIsOpen(false); }}
                  className="w-full text-left text-[#2D2D2D] hover:text-[#6B8C6B] hover:bg-[#F2F5F2] font-medium py-3 px-4 rounded-xl transition-colors text-sm flex items-center justify-between"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4 opacity-40" />}
                </button>
              ))}
              <div className="pt-3 border-t border-[#E8E8E8] flex flex-col gap-2">
                <button
                  onClick={() => { scrollTo("#contact"); setIsOpen(false); }}
                  className="w-full border-2 border-[#2A2A2A] text-[#2A2A2A] font-semibold py-3 px-4 rounded-xl text-sm hover:bg-[#2A2A2A] hover:text-white transition-colors"
                >
                  Talk to Us
                </button>
                <button
                  onClick={() => { scrollTo("#contact"); setIsOpen(false); }}
                  className="bg-[#6B8C6B] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-[#3D5E3D] transition-colors"
                >
                  Request a Quote →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </header>
  );
}
