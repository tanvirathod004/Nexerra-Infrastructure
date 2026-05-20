"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const testimonials = [
  {
    name: "Ar. Sanjay Pabhari", role: "Architect", location: "Gangapur Road, Nashik",
    text: "Nexerra Infrastructure delivered exceptional quality on multiple residential and commercial projects. Their team's attention to detail and commitment to timelines is unmatched in the industry. I have been collaborating with them on numerous projects, and each time they exceed expectations.",
    rating: 5, initials: "SP", projects: "3 Projects Collaborated",
  },
  {
    name: "Mr. Amit Pawar", role: "Property Owner", location: "LIC Colony, Nashik",
    text: "Working with Nexerra was a seamless experience from start to finish. Every stage — from foundation to plastering — was handled with professionalism and complete transparency. I was kept informed at every step, and the finished quality of my home exceeded my expectations.",
    rating: 5, initials: "AP", projects: "Residential Bungalow",
  },
  {
    name: "Ar. Kiran Suryawanshi", role: "Senior Architect", location: "Mashrool, Nashik",
    text: "The RCC execution team at Nexerra demonstrated outstanding precision and exemplary site management. They completed our project within budget and ahead of the agreed schedule. The structural quality was verified and met all IS code standards perfectly.",
    rating: 5, initials: "KS", projects: "RCC Construction Project",
  },
  {
    name: "CA Jay Chhaira", role: "Business Owner", location: "Surat, Gujarat",
    text: "The turnkey execution for our institute was managed flawlessly by the Nexerra team. Every trade was coordinated efficiently, and the final handover was immaculate. We are incredibly proud of our space and would recommend Nexerra to anyone looking for reliable construction partners.",
    rating: 5, initials: "JC", projects: "CA Jay Chhaira Institute",
  },
  {
    name: "Ar. Dinesh Shah", role: "Architect", location: "Gangmal, Nashik",
    text: "What impressed me most was Nexerra's ability to maintain quality even on complex RCC structures with curved elements. Their expertise in formwork and shuttering is truly top-tier. A dependable partner for any architectural challenge.",
    rating: 5, initials: "DS", projects: "Custom RCC Design Project",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((i) => (i + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #EEECEA 0%, #F5F4EF 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ───────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp}>
            <span className="section-chip mb-5 inline-flex">
              <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
              Client Stories
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight"
          >
            What Our{" "}
            <span className="sage-text">Clients Say</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-2xl mx-auto font-light"
          >
            Trusted by architects, developers, and business owners across India.
            Here&apos;s what they say about working with Nexerra.
          </motion.p>
        </motion.div>

        {/* ── Main testimonial card ─────────────── */}
        <motion.div
          className="max-w-4xl mx-auto mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div
            className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 60%, #1A1A1A 100%)" }}
          >
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32"
              style={{ background: "radial-gradient(circle, rgba(107,140,107,0.08) 0%, transparent 70%)" }}
            />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-24 -translate-x-24"
              style={{ background: "radial-gradient(circle, rgba(107,140,107,0.06) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#6B8C6B]/20 border border-[#6B8C6B]/30 rounded-xl flex items-center justify-center mb-8">
                <Quote className="w-6 h-6 text-[#8FBB8F]" />
              </div>

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#8FBB8F] fill-current" />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 italic"
                >
                  &ldquo;{t.text}&rdquo;
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#6B8C6B] to-[#3D5E3D] rounded-full flex items-center justify-center border-2 border-white/15">
                      <span className="text-white font-black text-lg">{t.initials}</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{t.name}</div>
                      <div className="text-[#8FBB8F] text-sm font-medium">{t.role}</div>
                      <div className="text-white/45 text-xs mt-0.5">{t.location}</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-white/35 text-xs uppercase tracking-widest mb-1">Project</div>
                    <div className="text-white/65 text-sm font-medium">{t.projects}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? "w-8 h-2.5 bg-[#6B8C6B]" : "w-2.5 h-2.5 bg-[#CBCAC5] hover:bg-[#6B8C6B]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border-2 border-[#E2E1DC] flex items-center justify-center text-[#5A5A5A] hover:border-[#6B8C6B] hover:text-[#6B8C6B] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-[#6B8C6B] hover:bg-[#3D5E3D] flex items-center justify-center text-white transition-colors shadow-lg shadow-[#6B8C6B]/25"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Mini cards row ─────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((t2, i) => (
            <motion.button
              key={i}
              variants={fadeUp}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                i === current
                  ? "border-[#6B8C6B] bg-[#6B8C6B]/8"
                  : "border-[#E2E1DC] bg-white hover:border-[#6B8C6B]/40"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                  i === current
                    ? "bg-gradient-to-br from-[#6B8C6B] to-[#3D5E3D] text-white"
                    : "bg-[#F2F5F2] text-[#5A5A5A]"
                }`}>
                  {t2.initials}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 text-[#8FBB8F] fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-[#1A1A1A] font-semibold text-xs leading-tight">{t2.name}</div>
              <div className="text-[#5A5A5A] text-xs mt-0.5">{t2.role}</div>
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
