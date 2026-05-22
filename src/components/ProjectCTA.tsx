"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { companyInfo } from "@/lib/data";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function ProjectCTA() {
  const phone = companyInfo.phones[1];

  return (
    <section
      className="py-20 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #1B2A3B 0%, #0F1A28 60%, #1B2A3B 100%)" }}
    >
      {/* Subtle arch grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-10" />

      {/* Sage accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B8C6B]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Left — Heading */}
          <motion.div variants={fadeLeft} className="lg:max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#6B8C6B]" />
              <span className="text-[#8FBB8F] text-[11px] font-bold uppercase tracking-[0.22em]">
                Start Your Project
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-white leading-[1.1]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Let&apos;s turn your{" "}
              <em className="not-italic" style={{ color: "#8FBB8F" }}>idea</em>
              <br />
              into a structure that
              <br />
              lasts a generation.
            </h2>
          </motion.div>

          {/* Right — CTAs */}
          <motion.div variants={fadeRight} className="flex flex-col gap-4 lg:min-w-[300px]">
            {/* Primary CTA */}
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between gap-3 bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold px-7 py-4 rounded-xl text-base shadow-lg shadow-[#6B8C6B]/20 transition-colors duration-300 group"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            {/* Secondary CTA — phone */}
            <a
              href={`tel:${phone.number.replace(/\s/g, "")}`}
              className="flex items-center justify-between gap-3 border border-white/20 hover:border-[#6B8C6B]/60 hover:bg-white/5 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all duration-300 group"
            >
              <span>Call {phone.number}</span>
              <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#6B8C6B]/50 flex items-center justify-center transition-colors">
                <Phone className="w-3.5 h-3.5 text-white/60 group-hover:text-[#8FBB8F] transition-colors" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Sage accent bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B8C6B]/30 to-transparent" />
    </section>
  );
}
