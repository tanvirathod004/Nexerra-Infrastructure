"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, FileText, Briefcase } from "lucide-react";
import { staggerContainer, fadeUp, fadeDown } from "@/lib/animations";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

/* ── Animated building skyline bars ──────────────────────────── */
const skylineBars = [
  { x: 4,  h: 28, w: 3, delay: 0.0 },
  { x: 9,  h: 38, w: 3, delay: 0.05 },
  { x: 14, h: 52, w: 3, delay: 0.1 },
  { x: 20, h: 70, w: 4, delay: 0.15 },
  { x: 27, h: 85, w: 5, delay: 0.2 },
  { x: 35, h: 100, w: 6, delay: 0.25 },
  { x: 44, h: 120, w: 6, delay: 0.3 },
  { x: 53, h: 95, w: 5, delay: 0.35 },
  { x: 61, h: 110, w: 4, delay: 0.4 },
  { x: 68, h: 130, w: 5, delay: 0.45 },
  { x: 76, h: 155, w: 6, delay: 0.5 },
  { x: 85, h: 135, w: 5, delay: 0.55 },
  { x: 93, h: 115, w: 4, delay: 0.6 },
];

const words = ["Excellence", "Innovation", "Precision", "Integrity"];

export default function Hero() {
  const [wordIdx,  setWordIdx]  = useState(0);
  const [wordVis,  setWordVis]  = useState(true);

  /* cycling headline word */
  useEffect(() => {
    const id = setInterval(() => {
      setWordVis(false);
      setTimeout(() => { setWordIdx(i => (i+1) % words.length); setWordVis(true); }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0D0D0D 0%, #1A1A1A 55%, #0F160F 100%)" }}
    >

      {/* ── Blueprint grid overlay ──────────── */}
      <div className="absolute inset-0 arch-grid opacity-100" />

      {/* ── Soft radial glow ────────────────── */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(107,140,107,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(107,140,107,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Animated scan line ──────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line" />
      </div>

      {/* ── Animated skyline at bottom ──────── */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end overflow-hidden pointer-events-none"
        style={{ height: "220px" }}
      >
        {skylineBars.map((bar, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{ left: `${bar.x}%`, width: `${bar.w * 0.6}%` }}
            initial={{ scaleY: 0, originY: "100%" }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: bar.delay + 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${bar.h}px`,
                background: `linear-gradient(to top, rgba(107,140,107,0.14), rgba(107,140,107,0.04))`,
                borderTop: "1px solid rgba(107,140,107,0.18)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ── Floating stat badges ────────────── */}
      <motion.div
        className="absolute top-36 right-8 lg:right-16 hidden md:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        style={{ animation: "float 5s ease-in-out 2s infinite" }}
      >
        <div className="glass-white rounded-2xl p-4 text-center shadow-xl border border-white/30">
          <div className="text-3xl font-black text-[#6B8C6B]">37<span className="text-xl">+</span></div>
          <div className="text-[#2D2D2D]/70 text-xs mt-0.5 font-medium">Years of Excellence</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-44 right-10 lg:right-28 hidden md:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        style={{ animation: "float2 6s ease-in-out 1s infinite" }}
      >
        <div className="glass-white rounded-2xl p-4 text-center shadow-xl border border-white/30">
          <div className="text-3xl font-black text-[#6B8C6B]">40<span className="text-xl">+</span></div>
          <div className="text-[#2D2D2D]/70 text-xs mt-0.5 font-medium">PAN India Projects</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-52 left-8 lg:left-16 hidden md:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.1, duration: 0.7 }}
        style={{ animation: "float 7s ease-in-out 3s infinite" }}
      >
        <div className="glass-white rounded-2xl p-4 text-center shadow-xl border border-white/30">
          <div className="text-2xl font-black text-[#6B8C6B]">15L+</div>
          <div className="text-[#2D2D2D]/70 text-xs mt-0.5 font-medium">Sq.Ft Constructed</div>
        </div>
      </motion.div>

      {/* ── Main content ─────────────────────── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-40"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Chip */}
        <motion.div variants={fadeDown}>
          <span className="inline-flex items-center gap-2 border border-[#6B8C6B]/40 text-[#8FBB8F] text-xs font-bold px-5 py-2 rounded-full tracking-[0.18em] uppercase mb-8">
            <span className="w-2 h-2 bg-[#6B8C6B] rounded-full pulse-sage" />
            Established 1987 · 37+ Years of Mastery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          <span className="block">Building Tomorrow&apos;s</span>
          <span className="block my-1">
            Infrastructure with{" "}
          </span>
          <span
            className="block"
            style={{
              opacity: wordVis ? 1 : 0,
              transform: wordVis ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.38s ease, transform 0.38s ease",
              background: "linear-gradient(135deg, #6B8C6B 0%, #8FBB8F 50%, #3D5E3D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            {words[wordIdx]}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Where Incredible Is Possible — Nexerra Infrastructure delivers world-class RCC
          contracting, residential, commercial &amp; industrial construction across India since 1987.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2.5 bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#6B8C6B]/30 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Contact Us Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 border-2 border-[#6B8C6B]/50 text-[#8FBB8F] font-bold px-8 py-4 rounded-xl text-base hover:border-[#6B8C6B] hover:bg-[#6B8C6B]/10 transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Get Free Quote
          </motion.button>

          <motion.button
            onClick={() => scrollTo("#projects")}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 border-2 border-white/15 text-white/60 font-bold px-8 py-4 rounded-xl text-base hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <Briefcase className="w-4 h-4" />
            Our Projects
          </motion.button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-6 mb-14"
        >
          {["Pan India Operations","BIM Certified Team","On-Time Delivery","Trusted Since 1987"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/35 text-sm">
              <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
              {t}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={fadeUp}
          onClick={() => scrollTo("#about")}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-[#6B8C6B] transition-colors mx-auto"
          style={{ animation: "float 2.5s ease-in-out infinite" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Bottom fade to off-white */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #F5F4EF, transparent)" }}
      />
    </section>
  );
}
