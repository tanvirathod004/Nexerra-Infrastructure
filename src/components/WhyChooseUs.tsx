"use client";

import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Clock, HardHat, Cpu, Eye, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";

const reasons = [
  {
    Icon: Trophy,
    title: "37+ Years of Mastery",
    description: "Decades of hands-on construction experience since 1987. Our legacy speaks through every structure we've built across Maharashtra and Gujarat.",
    stat: "1987", statLabel: "Est. Year",
  },
  {
    Icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "Premium materials, rigorous quality checks at every phase, and adherence to IS codes ensure structures that stand the test of time.",
    stat: "100%", statLabel: "Quality Rate",
  },
  {
    Icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on meeting project deadlines without compromising quality. Your schedule is our commitment — every project, every time.",
    stat: "40+", statLabel: "Projects Delivered",
  },
  {
    Icon: HardHat,
    title: "Safety First Culture",
    description: "Complete safety gear, trained site professionals, strict on-site protocols, and modern machinery protect every worker and project.",
    stat: "0", statLabel: "Safety Incidents",
  },
  {
    Icon: Cpu,
    title: "Advanced Technology",
    description: "We leverage AutoCAD, BIM, AI tools, digital estimation software, and modern shuttering systems to deliver precision at scale.",
    stat: "BIM", statLabel: "Certified Team",
  },
  {
    Icon: Eye,
    title: "Full Transparency",
    description: "Clear communication, detailed reporting, and active client involvement at every stage — from planning to handover ensures your vision becomes reality.",
    stat: "100%", statLabel: "Client Updates",
  },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function WhyChooseUs() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0D0D0D 0%, #1A1A1A 55%, #0F160F 100%)" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-40" />

      {/* Corner glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(107,140,107,0.08) 0%, transparent 70%)" }}
      />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(107,140,107,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────── */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 border border-[#6B8C6B]/30 text-[#8FBB8F] text-xs font-bold px-5 py-2 rounded-full tracking-[0.15em] uppercase mb-5">
              <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
              Why Nexerra
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
          >
            The Nexerra{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6B8C6B 0%, #8FBB8F 50%, #3D5E3D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Advantage
            </span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            We don&apos;t just build structures — we build trust. Here&apos;s what sets Nexerra
            Infrastructure apart from the rest.
          </motion.p>
        </motion.div>

        {/* ── Reasons grid ────────────────────── */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariant}
              className="group relative bg-white/4 border border-white/8 rounded-2xl p-8 hover:bg-white/8 hover:border-[#6B8C6B]/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#6B8C6B]/15 border border-[#6B8C6B]/25 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.Icon className="w-6 h-6 text-[#8FBB8F]" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[#8FBB8F]">{reason.stat}</div>
                  <div className="text-white/35 text-xs">{reason.statLabel}</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#6B8C6B]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Equipment highlight ─────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white/4 border border-white/8 rounded-3xl p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-white text-2xl font-bold mb-3">
                Fully Equipped for Any Scale
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Nexerra owns a comprehensive fleet of construction equipment ensuring smooth
                execution on every project — from foundations to finishing.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 text-[#8FBB8F] font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Get a Detailed Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { material: "MS Plates",       qty: "1,700" },
                { material: "Jack Props",      qty: "700" },
                { material: "Wooden Props",    qty: "1,500" },
                { material: "Tier Rods",       qty: "1,000" },
                { material: "Metal Beams",     qty: "200" },
                { material: "Bar Bending M/C", qty: "1" },
                { material: "Cutter Machines", qty: "3" },
                { material: "Angle Grinders",  qty: "4" },
                { material: "Concrete Mixer",  qty: "1" },
              ].map((item) => (
                <div
                  key={item.material}
                  className="bg-white/4 border border-white/8 rounded-xl p-3 text-center hover:border-[#6B8C6B]/30 transition-colors"
                >
                  <div className="text-[#8FBB8F] font-bold text-lg">{item.qty}</div>
                  <div className="text-white/45 text-xs mt-0.5">{item.material}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
