"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team",     label: "Our Team" },
  { href: "#contact",  label: "Contact" },
];

const services = [
  "RCC Contracting", "Residential Construction", "Commercial Construction",
  "Industrial Construction", "Interior Works", "Turnkey Solutions",
  "Estimation & Costing", "Construction Management",
];

export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ background: "#0D0D0D" }}>
      {/* Top sage accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#6B8C6B] to-transparent" />

      {/* Arch grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          className="grid lg:grid-cols-4 gap-10 mb-12"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
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
                className="object-contain h-20 w-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.88 }}
              />
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Where Incredible Is Possible. Building India&apos;s landmark structures with
              37+ years of excellence, precision, and trust since 1987.
            </p>

            <div className="space-y-3">
              <a href={`tel:${companyInfo.phones[1].number.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-white/40 hover:text-[#8FBB8F] text-sm transition-colors">
                <Phone className="w-4 h-4 text-[#6B8C6B] flex-shrink-0" />
                {companyInfo.phones[1].number}
              </a>
              <a href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-white/40 hover:text-[#8FBB8F] text-sm transition-colors">
                <Mail className="w-4 h-4 text-[#6B8C6B] flex-shrink-0" />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-2.5 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-[#6B8C6B] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-5">Quick Links</h4>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  className="block text-white/40 hover:text-[#8FBB8F] text-sm transition-colors text-left">
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-5">Our Services</h4>
            <div className="space-y-2.5">
              {services.map((s) => (
                <button key={s} onClick={() => scrollTo("#services")}
                  className="block text-white/40 hover:text-[#8FBB8F] text-sm transition-colors text-left">
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-5">Start Your Project</h4>
            <div className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#6B8C6B]/30 transition-colors">
              <div className="text-[#8FBB8F] font-bold text-2xl mb-1">Free</div>
              <div className="text-white font-bold text-lg mb-3">Consultation</div>
              <p className="text-white/45 text-xs leading-relaxed mb-5">
                Talk to our experts about your construction project. Get a detailed quote within 24 hours.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold py-2.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-[#6B8C6B]/25 hover:-translate-y-0.5"
              >
                Get Free Quote →
              </button>
              <div className="mt-3 text-center">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] text-xs font-semibold hover:underline"
                >
                  Or chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[#6B8C6B] text-xs font-bold uppercase tracking-[0.15em] mb-2">Service Areas</div>
              <div className="text-white/35 text-xs leading-relaxed">
                Maharashtra: Mumbai · Nashik · Pune · Goa<br />
                Gujarat: Surat · Ahmedabad · Jamnagar · Valsad
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nexerra Infrastructure. All Rights Reserved.
              Est. 1987 — Building India&apos;s Future.
            </p>
            <div className="flex items-center gap-6 text-white/25 text-xs">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <button
                onClick={() => scrollTo("#home")}
                className="w-9 h-9 bg-[#6B8C6B]/15 border border-[#6B8C6B]/25 rounded-lg flex items-center justify-center hover:bg-[#6B8C6B]/25 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-[#6B8C6B]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
