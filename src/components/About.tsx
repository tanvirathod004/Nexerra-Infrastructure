"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";


const timeline = [
  { year: "1987", label: "Founded", desc: "Nexerra begins operations in Nashik" },
  { year: "2000", label: "Expansion", desc: "Entered Gujarat market — Surat & Ahmedabad" },
  { year: "2012", label: "Scale-Up", desc: "Crossed 10 lakh sq.ft constructed milestone" },
  { year: "2022", label: "Innovation", desc: "BIM certification & AI-driven construction tools adopted" },
  { year: "2026", label: "Present", desc: "40+ projects, 15L+ sq.ft across Maharashtra & Gujarat" },
];


export default function About() {
  return (
    <section id="about" className="pt-28 pb-16 overflow-hidden" style={{ background: "#F5F4EF" }}>
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

        {/* ── Split layout: story + numbered panels ──────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left — Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* "ABOUT NEXERRA" label with line */}
            <motion.div variants={fadeLeft} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#6B8C6B]" />
              <span className="text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.2em]">
                About Nexerra
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h3
              variants={fadeLeft}
              className="text-3xl lg:text-4xl font-black text-[#1A1A1A] leading-[1.1] mb-7"
            >
              Quality under innovative leadership since 1987.
            </motion.h3>

            {/* Para 1 */}
            <motion.p variants={fadeLeft} className="text-[#5A5A5A] leading-relaxed mb-5">
              Nexerra Infrastructure is a reputable name with{" "}
              <strong className="text-[#1A1A1A] font-bold">37+ years of devoted service</strong>{" "}
              in the construction business. We&apos;ve completed 40+ projects PAN India — a portfolio
              balanced between residential and commercial developments that demonstrates our
              adaptability and proficiency.
            </motion.p>

            {/* Para 2 */}
            <motion.p variants={fadeLeft} className="text-[#5A5A5A] leading-relaxed mb-9">
              With our dedication to quality and creativity, we have helped to build over{" "}
              <strong className="text-[#1A1A1A] font-bold">15 lakh+ square feet</strong> across
              India — and we&apos;re still standing firm, still looking for opportunities to turn
              ideas into reality.
            </motion.p>

            {/* Quote block */}
            <motion.blockquote
              variants={fadeLeft}
              className="bg-white border border-[#E2E1DC] border-l-[4px] border-l-[#6B8C6B] px-6 py-5 flex items-start gap-4"
            >
              <span
                className="text-[#6B8C6B] text-[2.8rem] leading-none font-serif select-none flex-shrink-0 mt-[-4px]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="text-[#3D4560] italic leading-relaxed text-[0.97rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                We meet deadlines, stay within budget, and produce outstanding
                outcomes — putting a priority on client satisfaction.
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right — Mission / Vision / Approach cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-5"
          >
            {[
              {
                num: "01",
                label: "Our Mission",
                heading: "Building lasting structures with top-notch craftsmanship.",
                desc: "We exceed client expectations by delivering quality, safety and value in every project — guided by integrity, innovation, and a commitment to excellence. Through collaborative partnerships we create lasting value for clients, employees and stakeholders.",
              },
              {
                num: "02",
                label: "Our Vision",
                heading: "To be the go-to name for construction excellence.",
                desc: "Known for dedication to quality, safety and sustainability. Our vision extends beyond mere structures — we aspire to create iconic landmarks that inspire awe, enrich lives, and leave a positive legacy for generations to come.",
              },
              {
                num: "03",
                label: "Our Approach",
                heading: "Communication, transparency, accountability.",
                desc: "We work closely with our clients, keeping them informed and involved from inception to completion — to ensure their vision becomes a reality. No surprises, no shortcuts.",
              },
            ].map((item) => (
              <motion.div
                key={item.num}
                variants={fadeRight}
                className="bg-white border border-[#E2E1DC] border-t-[3px] border-t-[#6B8C6B] p-7"
              >
                {/* Top row: label+heading on left, number on right */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <span className="block text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.22em] mb-2">
                      {item.label}
                    </span>
                    <h4
                      className="text-[#1A1A1A] font-bold text-[1.2rem] leading-[1.3]"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {item.heading}
                    </h4>
                  </div>
                  <span
                    className="font-black text-[3.5rem] leading-none select-none flex-shrink-0"
                    style={{ color: "#D8D5CE", lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Timeline ────────────────────────── */}
        <motion.div
          className=""
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
              {timeline.map((item) => (
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
        {/* <motion.div
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
        </motion.div> */}

      </div>
    </section>
  );
}
