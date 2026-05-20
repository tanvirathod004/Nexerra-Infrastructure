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
    highlights: ["11,500+ Sq.Ft shuttering", "Modern formwork systems", "Quality concrete calibration"],
    featured: true,
  },
  {
    title: "Residential Construction",
    description: "Crafting custom homes with meticulous attention to detail and personalized touches, tailored to homeowners' unique visions and lifestyles.",
    Icon: Home,
    highlights: ["Custom bungalows & apartments", "End-to-end RCC execution", "Premium finishing works"],
    featured: false,
  },
  {
    title: "Commercial Construction",
    description: "High-performance commercial spaces that optimize productivity, customer experience, and business efficiency with aesthetic appeal.",
    Icon: Store,
    highlights: ["Office complexes & plazas", "Retail & showroom builds", "Multi-storey commercial"],
    featured: false,
  },
  {
    title: "Industrial Construction",
    description: "Durable industrial facilities designed for large-scale production — prioritizing safety, efficiency, and long-term operational functionality.",
    Icon: Factory,
    highlights: ["Factory & warehouse builds", "Compliance-ready structures", "Heavy-load foundations"],
    featured: false,
  },
  {
    title: "Interior Works",
    description: "Transforming spaces with exquisite interior design that blends functionality with aesthetics — creating inspiring environments tailored to client needs.",
    Icon: Layers,
    highlights: ["Turnkey interior execution", "Fit-out & finishing works", "Design-to-delivery solutions"],
    featured: false,
  },
  {
    title: "Construction Management",
    description: "Comprehensive project oversight from planning to handover — ensuring quality, timeline adherence, budget control, and complete satisfaction.",
    Icon: ClipboardList,
    highlights: ["PMC services", "Site supervision", "Contractor coordination"],
    featured: false,
  },
  {
    title: "Estimation & Costing",
    description: "Software-based precision estimation using industry-leading tools — offering accurate budget planning for guaranteed cost-effectiveness.",
    Icon: Calculator,
    highlights: ["BOQ preparation", "Tender documentation", "Cost tracking sheets"],
    featured: false,
  },
  {
    title: "Turnkey Solutions",
    description: "End-to-end project delivery — civil, interior, and finishing works from concept to handover. Your single-point accountability partner.",
    Icon: Key,
    highlights: ["Concept to completion", "Single-point responsibility", "Multi-trade coordination"],
    featured: true,
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
      style={{ background: "linear-gradient(180deg, #F5F4EF 0%, #EEECEA 100%)" }}
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className={`group relative rounded-2xl p-6 border cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                service.featured
                  ? "bg-[#1A1A1A] border-[#3D3D3D] hover:border-[#6B8C6B]/50"
                  : "bg-white border-[#E2E1DC] hover:border-[#6B8C6B]/40"
              }`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                service.featured
                  ? "bg-gradient-to-br from-[#6B8C6B]/10 to-transparent"
                  : "bg-gradient-to-br from-[#6B8C6B]/5 to-transparent"
              }`} />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B8C6B] to-[#8FBB8F] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-2xl" />

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${
                service.featured
                  ? "bg-[#6B8C6B]/20 border border-[#6B8C6B]/30"
                  : "bg-[#F2F5F2] border border-[#6B8C6B]/15"
              }`}>
                <service.Icon className={`w-6 h-6 ${service.featured ? "text-[#8FBB8F]" : "text-[#6B8C6B]"}`} />
              </div>

              {/* Title */}
              <h3 className={`font-bold text-base mb-3 transition-colors ${
                service.featured ? "text-white" : "text-[#1A1A1A]"
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 ${
                service.featured ? "text-white/60" : "text-[#5A5A5A]"
              }`}>
                {service.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-5">
                {service.highlights.map((h) => (
                  <div key={h} className={`flex items-center gap-2 text-xs ${
                    service.featured ? "text-white/50" : "text-[#3D3D3D]"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B8C6B] flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className={`flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-200 ${
                service.featured ? "text-[#8FBB8F]" : "text-[#6B8C6B]"
              }`}>
                Learn More
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
