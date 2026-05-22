"use client";

import { motion } from "framer-motion";
import { PenTool, Users, Building2, HardHat, Home } from "lucide-react";
import { fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";

const audience = [
  { label: "Architects &\nDesigners", icon: PenTool },
  { label: "Consultants",            icon: Users },
  { label: "Developers",             icon: Building2 },
  { label: "Contractors",            icon: HardHat },
  { label: "Owners",                 icon: Home },
];

export default function WhoWeServe() {
  return (
    <section className="py-6 overflow-hidden" style={{ background: "#F5F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl border border-[#E2E1DC] px-10 py-10 flex flex-col lg:flex-row lg:items-center gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Left — label + heading */}
          <motion.div variants={fadeLeft} className="lg:w-64 shrink-0">
            <p className="text-[#6B8C6B] text-[10px] font-bold uppercase tracking-[0.22em] mb-3">
              Whom We Serve
            </p>
            <h3
              className="text-2xl lg:text-3xl font-black text-[#1B2A3B] leading-snug"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Across the construction value chain.
            </h3>
          </motion.div>

          {/* Vertical divider (desktop) */}
          <div className="hidden lg:block w-px self-stretch bg-[#E2E1DC]" />

          {/* Right — audience columns */}
          <motion.div
            variants={fadeRight}
            className="flex-1 grid grid-cols-3 sm:grid-cols-5 gap-0"
          >
            {audience.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center gap-3 py-2 px-4 ${
                    i < audience.length - 1 ? "border-r border-[#E2E1DC]" : ""
                  }`}
                >
                  <Icon className="w-7 h-7 text-[#6B8C6B]" strokeWidth={1.5} />
                  <span className="text-[#1B2A3B] text-xs font-bold text-center leading-snug whitespace-pre-line">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
