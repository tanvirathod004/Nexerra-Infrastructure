"use client";

import { motion } from "framer-motion";
import {
  Building2, Home, Store, Factory, Layers, ClipboardList, Calculator, Key, ArrowRight,
} from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";

const services = [
  {
    title: "RCC Contracting",
    description: "Expert reinforced concrete construction with shuttering capability of 11,500+ sq.ft simultaneously — delivering precision and structural integrity at scale.",
    Icon: Building2,
  },
  {
    title: "Residential Construction",
    description: "Crafting custom homes with meticulous attention to detail and personalized touches, tailored to homeowners' unique visions and lifestyles.",
    Icon: Home,
  },
  {
    title: "Commercial Construction",
    description: "High-performance commercial spaces that optimize productivity, customer experience, and business efficiency with aesthetic appeal.",
    Icon: Store,
  },
  {
    title: "Industrial Construction",
    description: "Durable industrial facilities designed for large-scale production — prioritizing safety, efficiency, and long-term operational functionality.",
    Icon: Factory,
  },
  {
    title: "Interior Works",
    description: "Transforming spaces with exquisite interior design that blends functionality with aesthetics — creating inspiring environments tailored to client needs.",
    Icon: Layers,
  },
  {
    title: "Construction Management",
    description: "Comprehensive project oversight from planning to handover — ensuring quality, timeline adherence, budget control, and complete satisfaction.",
    Icon: ClipboardList,
  },
  {
    title: "Estimation & Costing",
    description: "Software-based precision estimation using industry-leading tools — offering accurate budget planning for guaranteed cost-effectiveness.",
    Icon: Calculator,
  },
  {
    title: "Turnkey Solutions",
    description: "End-to-end project delivery — civil, interior, and finishing works from concept to handover. Your single-point accountability partner.",
    Icon: Key,
  },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ───────────────────────────── */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp}>
            <span className="section-chip mb-5 inline-flex">
              <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
              What We Build
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight"
          >
            Comprehensive{" "}
            <span className="sage-text">Construction Services</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            From structural RCC contracting to complete turnkey execution, we deliver excellence
            across every construction discipline with 37+ years of hands-on expertise.
          </motion.p>
        </motion.div>

        {/* ── Services grid ────────────────────── */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E2E1DC]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="group relative border-r border-b border-[#E2E1DC] bg-white hover:bg-[#F7F6F2] transition-colors duration-250 cursor-pointer p-7 flex flex-col"
            >
              {/* Hover top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#6B8C6B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon + number row */}
              <div className="flex items-start justify-between mb-6">
                <service.Icon
                  className="w-7 h-7 text-[#6B8C6B] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span className="text-[#CECAC2] text-[13px] font-semibold tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[#1A1A1A] font-bold text-[1.05rem] leading-snug mb-3"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              {/* Learn more */}
              <div className="flex items-center gap-1.5 text-[#6B8C6B] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ───────────────────────── */}
        <motion.div
          className="mt-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-[#5A5A5A] mb-5 font-light">
            Not sure which service fits your project?
          </p>
          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#6B8C6B]/25 transition-colors duration-300"
          >
            Talk to Our Experts
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
