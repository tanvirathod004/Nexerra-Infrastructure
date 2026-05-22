"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";
import { teamMembers, partnerCompanies } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────── */}
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
              The People Behind the Projects
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight"
          >
            Three generations of builders.
            <br />
            <span className="sage-text">One name on the door.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            Nexerra is led by a hands-on family team — a founder who learned the trade in
            the field, and two engineers carrying it forward with modern construction management.
          </motion.p>
        </motion.div>

        {/* ── Core team cards ────────────────── */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariant}
              className="group flex flex-col bg-[#F5F4EF] rounded-lg border border-[#E2E1DC] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card body */}
              <div className="flex-1 p-6">
                {/* Top row: avatar + tag */}
                <div className="flex items-start justify-between mb-5">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#1B2A3B] rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-[#8FBB8F] font-black text-xl tracking-tight">
                        {member.initials}
                      </span>
                    </div>
                    {/* Gold checkmark badge */}
                    <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-[#6B8C6B] rounded-full flex items-center justify-center shadow">
                      <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 fill-white">
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Role tag */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B8C6B]">
                    {member.tag}
                  </span>
                </div>

                {/* Name + role */}
                <h3 className="text-lg font-black text-[#1A1A1A] mb-0.5 leading-snug">
                  {member.name}
                </h3>
                <div className="text-[#6B8C6B] font-semibold text-sm mb-4">
                  {member.role}
                </div>

                {/* Description */}
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Footer row */}
              <div className="px-6 py-4 border-t border-[#E2E1DC] flex items-center justify-between">
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-[#5A5A5A] text-sm hover:text-[#6B8C6B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6B8C6B]" />
                  {member.phone}
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="text-[#1A1A1A] font-semibold text-sm hover:text-[#6B8C6B] transition-colors"
                >
                  Connect &rarr;
                </a>
              </div>

              {/* Amber bottom accent */}
              <div className="h-0.5 bg-[#6B8C6B] w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Team capacity ──────────────────── */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="rounded-2xl p-8 mb-16"
          style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-white text-2xl font-bold mb-2">Our Full Team Strength</h3>
            <p className="text-white/50 text-sm">37+ years of crafted excellence backed by a dedicated multi-disciplinary team</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {teamCapacity.map((item) => (
              <div key={item.role} className="text-center bg-white/5 border border-white/8 rounded-xl p-4 hover:border-[#6B8C6B]/30 transition-colors">
                <div className="text-3xl font-black text-[#8FBB8F] mb-2">{item.count}</div>
                <div className="text-white/55 text-xs leading-snug">{item.role}</div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* ── Partner companies ──────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Sub-header */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-[#6B8C6B] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#6B8C6B]" />
              Our Extended Family
            </p>
            <h3 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight">
              Two strong pillars
              <br />
              standing with Nexerra.
            </h3>
            <p className="text-[#5A5A5A] text-base max-w-2xl mx-auto font-light leading-relaxed">
              Both sister concerns are based in Surat, Gujarat — together we offer a full range
              of services for architects, consultants, developers, contractors and individuals,
              with great cost control across all sectors.
            </p>
          </motion.div>

          {/* Split panel */}
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {partnerCompanies.map((partner) => (
              <div key={partner.company} className="flex flex-col p-8 bg-[#F5F4EF] border border-[#E2E1DC] rounded-lg border-l-4 border-l-[#6B8C6B]">
                {/* Top: name + stat */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-2xl font-black text-[#1A1A1A] leading-snug mb-1">
                      {partner.company}
                    </h4>
                    <p className="text-[#6B8C6B] text-xs font-bold tracking-widest uppercase">
                      {partner.established} · {partner.location}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-3xl font-black text-[#6B8C6B] leading-none">{partner.stat}</div>
                    <div className="text-[#9A9A9A] text-[10px] font-bold tracking-[0.15em] uppercase mt-0.5">{partner.statLabel}</div>
                  </div>
                </div>

                {/* Specialty */}
                <p className="text-[#1A1A1A] font-bold text-sm mb-3">{partner.specialty}</p>

                {/* Description */}
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">{partner.description}</p>

                {/* Divider */}
                <div className="border-t border-[#E2E1DC] mb-5" />

                {/* Team members */}
                <div className="space-y-3 mt-auto">
                  {partner.team.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#1B2A3B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-[#8FBB8F] font-black text-xs">{member.initials}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#1A1A1A] text-sm">{member.name}</span>
                        <span className="text-[#7A7A7A] text-xs ml-2">{member.meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom dark banner */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, #1B2A3B 0%, #0F1A28 100%)" }}
          >
            <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
              Together, Nexerra and our sister concerns operate as{" "}
              <span className="text-[#8FBB8F] font-semibold">three strong pillars</span>
              {" "}— investing in technology, equipment and people to deliver high-standard
              customer satisfaction and dispute-less construction across India.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="shrink-0 inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Learn about our sister concerns &rarr;
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
