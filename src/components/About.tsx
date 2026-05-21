"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Target, Eye, Users, MapPin } from "lucide-react";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

const strengths = [
  "RCC shuttering capacity of 11,500+ sq.ft simultaneously",
  "Full in-house team: engineers, architects, estimators & skilled labour",
  "BIM Certified team leveraging AutoCAD, AI & digital estimation tools",
  "ISO-aligned quality control at every construction stage",
  "On-time delivery track record across 40+ projects",
  "Transparent reporting with client involvement from inception to handover",
];

const timeline = [
  { year: "1987", label: "Founded", desc: "Nexerra begins operations in Nashik" },
  { year: "2000", label: "Expansion", desc: "Entered Gujarat market — Surat & Ahmedabad" },
  { year: "2012", label: "Scale-Up", desc: "Crossed 10 lakh sq.ft constructed milestone" },
  { year: "2022", label: "Innovation", desc: "BIM certification & AI-driven construction tools adopted" },
  { year: "2024", label: "Present", desc: "40+ projects, 15L+ sq.ft across Maharashtra & Gujarat" },
];

const counters = [
  { value: "37+", label: "Years of Mastery", sub: "Since 1987" },
  { value: "40+", label: "Projects Delivered", sub: "Pan India" },
  { value: "15L+", label: "Sq.Ft Constructed", sub: "Maharashtra & Gujarat" },
  { value: "12+", label: "Cities Served", sub: "Growing network" },
];

export default function About() {
  const counterRef = useRef<HTMLDivElement>(null);
  const counterInView = useInView(counterRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-28 overflow-hidden" style={{ background: "#F5F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ───────────────────── */}
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
              Who We Are
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight mb-5"
          >
            India&apos;s Trusted{" "}
            <span className="sage-text">Construction Partner</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            Nexerra Infrastructure is a premier construction company with 37+ years of devoted
            service, delivering quality under innovative leadership since 1987.
          </motion.p>
        </motion.div>

        {/* ── Animated stat counters ───────────── */}
        {/* <div ref={counterRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={counterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-white rounded-2xl p-6 text-center shadow-sm border border-[#E2E1DC] overflow-hidden group hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B8C6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-3xl lg:text-4xl font-black text-[#6B8C6B] mb-1">{c.value}</div>
              <div className="text-[#1A1A1A] font-bold text-sm mb-0.5">{c.label}</div>
              <div className="text-[#5A5A5A] text-xs">{c.sub}</div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B8C6B] to-[#8FBB8F] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div> */}

        {/* ── Split layout: story + cards ──────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left — Story & strengths */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h3 variants={fadeLeft} className="text-2xl font-bold text-[#1A1A1A] mb-5">
              Our Story of Excellence
            </motion.h3>
            <motion.p variants={fadeLeft} className="text-[#5A5A5A] leading-relaxed mb-4">
              Founded in 1987, Nexerra Infrastructure has built a solid reputation for excellence,
              reliability, and innovation across India. With a proven track record of 40+ projects
              and 15 lakh+ square feet of construction delivered, we stand as a trusted name in
              the industry.
            </motion.p>
            <motion.p variants={fadeLeft} className="text-[#5A5A5A] leading-relaxed mb-4">
              From high-rise residential apartments and commercial complexes to industrial
              facilities and turnkey projects, we approach every endeavor with dedication and
              integrity, striving to exceed expectations at every step.
            </motion.p>
            <motion.p variants={fadeLeft} className="text-[#5A5A5A] leading-relaxed mb-10">
              We work closely with architects, developers, and individual homeowners — keeping
              clients informed and involved from inception to completion with full transparency.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-3">
              {strengths.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeLeft}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6B8C6B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#3D3D3D] text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Mission, Vision, Who We Serve */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-5"
          >
            {/* Mission */}
            <motion.div
              variants={fadeRight}
              className="rounded-2xl p-7 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2"
                style={{ background: "radial-gradient(circle, rgba(107,140,107,0.15) 0%, transparent 70%)" }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6B8C6B]/20 rounded-xl flex items-center justify-center border border-[#6B8C6B]/30">
                  <Target className="w-5 h-5 text-[#8FBB8F]" />
                </div>
                <h3 className="text-lg font-bold">Our Mission</h3>
              </div>
              <p className="text-white/65 leading-relaxed text-sm">
                We are committed to building lasting structures with top-notch craftsmanship and
                innovative solutions. Our goal is to exceed client expectations by delivering
                quality, safety, and value in every project — guided by integrity and a relentless
                pursuit of excellence, creating lasting value for our clients, employees, and
                stakeholders.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeRight}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #6B8C6B 0%, #3D5E3D 100%)" }}
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full translate-y-1/2 -translate-x-1/2"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/75 leading-relaxed text-sm">
                We aim to be the go-to name for construction excellence — known for our dedication
                to quality, safety, and sustainability. We aspire to create iconic landmarks that
                inspire awe, enrich lives, and leave a positive legacy for generations to come,
                continuously pushing boundaries and redefining what is possible.
              </p>
            </motion.div>

            {/* Who we serve */}
            <motion.div
              variants={fadeRight}
              className="bg-white rounded-2xl p-7 border border-[#E2E1DC]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#6B8C6B]/10 rounded-xl flex items-center justify-center border border-[#6B8C6B]/20">
                  <Users className="w-5 h-5 text-[#6B8C6B]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Who We Serve</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Architects & Designers", "Property Developers",
                  "Consultants", "Contractors",
                  "Corporate Owners", "Government Bodies",
                ].map((client) => (
                  <div key={client} className="flex items-center gap-2 text-[#3D3D3D] text-sm py-1.5">
                    <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full flex-shrink-0" />
                    {client}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Timeline ────────────────────────── */}
        <motion.div
          className="mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Our Journey</h3>
            <div className="sage-divider mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B8C6B]/30 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#6B8C6B] flex items-center justify-center z-10 mb-4 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-[#6B8C6B]" />
                  </div>
                  <div className="text-[#6B8C6B] font-black text-lg mb-1">{item.year}</div>
                  <div className="text-[#1A1A1A] font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-[#5A5A5A] text-xs leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Pan-India locations banner ────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 60%, #1A1A1A 100%)" }}
        >
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#8FBB8F]" />
                  <h3 className="text-white text-xl font-bold">Pan-India Operations</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Delivering excellence across Maharashtra & Gujarat with an ever-expanding footprint.
                </p>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[#8FBB8F] font-bold text-xs uppercase tracking-[0.15em] mb-3">
                    Maharashtra
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Mumbai", "Nashik", "Pune", "Kopargaon", "Goa"].map((city) => (
                      <span key={city}
                        className="text-white/70 text-xs bg-white/8 border border-white/10 px-3 py-1.5 rounded-lg"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[#8FBB8F] font-bold text-xs uppercase tracking-[0.15em] mb-3">
                    Gujarat
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Surat", "Ahmedabad", "Jamnagar", "Valsad", "Dumas"].map((city) => (
                      <span key={city}
                        className="text-white/70 text-xs bg-white/8 border border-white/10 px-3 py-1.5 rounded-lg"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
