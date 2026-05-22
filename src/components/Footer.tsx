"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Contractor & Developer", href: "#services" },
      { label: "Residential",            href: "#services" },
      { label: "Commercial",             href: "#services" },
      { label: "Industrial",             href: "#services" },
      { label: "Interior Fit-out",       href: "#services" },
      { label: "Estimation & Costing",   href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",       href: "#about" },
      { label: "Our Mission",    href: "#about" },
      { label: "Leadership",     href: "#team" },
      { label: "Capabilities",   href: "#services" },
      { label: "Sister Concerns",href: "#team" },
      { label: "Careers",        href: "#contact" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Featured Projects", href: "#projects" },
      { label: "Case Studies",      href: "#projects" },
      { label: "Press & Media",     href: "#about" },
      { label: "Testimonials",      href: "#testimonials" },
      { label: "Tenders",           href: "#contact" },
    ],
  },
];

const socials = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    href: `https://wa.me/917769091666`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ background: "#0D1117" }}>
      {/* Top sage accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#6B8C6B] to-transparent" />

      {/* Arch grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-20" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/nexerra-logo.png"
          alt=""
          width={500}
          height={400}
          className="object-contain"
          style={{ opacity: 0.06, filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main grid ──────────────────────────── */}
        <motion.div
          className="grid lg:grid-cols-5 gap-10 mb-12"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/nexerra-logo.png"
                alt="Nexerra Infrastructure"
                width={180}
                height={144}
                className="object-contain h-16 w-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.88 }}
              />
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              An RCC contractor and developer building India&apos;s future since 1987.
              Where incredible is possible.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#6B8C6B]/20 hover:border-[#6B8C6B]/40 hover:text-[#8FBB8F] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <motion.div key={col.heading} variants={fadeUp}>
              <h4 className="text-white font-bold text-sm mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/40 hover:text-[#8FBB8F] text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Get in Touch */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-sm mb-5">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2.5 text-white/45">
                <MapPin className="w-4 h-4 text-[#6B8C6B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>
              <a
                href={`tel:${companyInfo.phones[1].number.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-[#8FBB8F] font-semibold hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {companyInfo.phones[1].number}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-white/45 hover:text-[#8FBB8F] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6B8C6B] shrink-0" />
                {companyInfo.email}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ─────────────────────────── */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 Nexerra Infrastructure. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white/25 text-xs">
            <span className="hover:text-white/50 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white/50 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white/50 cursor-pointer transition-colors">Sitemap</span>
            <span className="text-[#6B8C6B] font-bold tracking-[0.12em] uppercase text-[10px]">
              Where Incredible Is Possible
            </span>
            <button
              onClick={() => scrollTo("#home")}
              className="w-8 h-8 bg-[#6B8C6B]/15 border border-[#6B8C6B]/25 rounded-lg flex items-center justify-center hover:bg-[#6B8C6B]/30 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#6B8C6B]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
