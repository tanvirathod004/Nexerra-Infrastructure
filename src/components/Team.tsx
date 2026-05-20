"use client";

import { motion } from "framer-motion";
import { Phone, GraduationCap, Briefcase } from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";

const teamNexerra = [
  {
    name: "Ramesh Chotaliya",
    role: "Founder & Director",
    experience: "37+ Years",
    phone: "+91 942 276 7733",
    description: "The visionary founder behind Nexerra Infrastructure. With over 37 years in the construction industry, his leadership has delivered 40+ landmark projects across India.",
    qualifications: ["37+ Years Field Experience", "PAN India Project Delivery"],
    initials: "RC",
    gradient: "from-[#1A1A1A] to-[#2D2D2D]",
  },
  {
    name: "Niravv Ramesh Chotaliyaa",
    role: "Director & Construction Manager",
    experience: "3+ Years",
    phone: "+91 776 909 1666",
    description: "Civil Engineer with a Master's in Construction Management. Expert in BIM, AutoCAD, AI tools, and modern project management systems.",
    qualifications: ["B.E. Civil Engineering – Pune University (2022)", "BIM India Certified", "PCM – Sandip University, Nashik"],
    initials: "NC",
    gradient: "from-[#3D5E3D] to-[#6B8C6B]",
  },
  {
    name: "Deep Ramesh Chotaliya",
    role: "Site Execution Engineer",
    experience: "3+ Years",
    phone: "+91 965 709 5333",
    description: "Dedicated RCC execution specialist with hands-on experience managing mega projects. Expert in on-site labour coordination and value engineering.",
    qualifications: ["B.Tech Civil Engineering – G.H. Raisoni, Jalgaon (2023)", "5+ Mega Projects in RCC Execution"],
    initials: "DC",
    gradient: "from-[#2D2D2D] to-[#4E7450]",
  },
];

const teamCapacity = [
  { role: "Senior Interior Designers & Architects", count: 2 },
  { role: "Structural Engineer", count: 1 },
  { role: "Senior Engineers", count: 6 },
  { role: "Junior Engineers", count: 7 },
  { role: "Estimation & Billing Engineers", count: 4 },
];

const partners = [
  {
    company: "Dynamic Consulting Engineers",
    established: "Est. 2017",
    location: "Surat, Gujarat",
    description: "Specializing in project coordination, quality assurance, tendering, and construction management.",
    gradient: "from-[#1A1A1A] to-[#2D2D2D]",
    team: [
      { name: "Mr. Roshan Shah",   role: "Senior Project Engineer",   exp: "14+ Years", qual: "B.E. Civil – Gujarat University | PGP PCIBM – MIT Pune", initials: "RS" },
      { name: "Mr. Vishal Patel",  role: "Interior Fit-out Engineer",  exp: "7+ Years",  qual: "Interior Project Coordination Specialist",               initials: "VP" },
    ],
  },
  {
    company: "Prince Construction",
    established: "Est. 2012",
    location: "Surat, Gujarat",
    description: "Expert in RCC execution and turnkey project delivery with 70+ completed projects across Gujarat.",
    gradient: "from-[#3D5E3D] to-[#4E7450]",
    team: [
      { name: "Mr. Hitesh Parmar", role: "RCC Execution Lead",         exp: "19+ Years", qual: "Diploma Civil Engg. – Govt. Polytechnic Valsad (2004) | 60+ Projects", initials: "HP" },
      { name: "Mr. Paresh Rathod", role: "Turnkey Solutions Expert",   exp: "21+ Years", qual: "Diploma Civil Engg. – Govt. Polytechnic Valsad (2002) | 70+ Projects", initials: "PR" },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 overflow-hidden" style={{ background: "#F5F4EF" }}>
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
            Experts in{" "}
            <span className="sage-text">Every Discipline</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            Crafting success with 37+ years of mastery — our team of professionals brings
            unmatched expertise across every phase of construction.
          </motion.p>
        </motion.div>

        {/* ── Core team ──────────────────────── */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {teamNexerra.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariant}
              className="group bg-white rounded-2xl border border-[#E2E1DC] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-32 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative`}>
                <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/25">
                  <span className="text-white font-black text-2xl">{member.initials}</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {member.experience}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                <div className="text-[#6B8C6B] font-semibold text-sm mb-3">{member.role}</div>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">{member.description}</p>
                <div className="space-y-1.5 mb-4">
                  {member.qualifications.map((q) => (
                    <div key={q} className="flex items-start gap-2 text-xs text-[#3D3D3D]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#6B8C6B] flex-shrink-0 mt-0.5" />
                      {q}
                    </div>
                  ))}
                </div>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-[#1A1A1A] font-semibold text-sm hover:text-[#6B8C6B] transition-colors group/phone"
                >
                  <div className="w-7 h-7 bg-[#6B8C6B]/10 rounded-lg flex items-center justify-center group-hover/phone:bg-[#6B8C6B]/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#6B8C6B]" />
                  </div>
                  {member.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Team capacity ──────────────────── */}
        <motion.div
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
        </motion.div>

        {/* ── Partner companies ──────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h3 className="text-3xl font-black text-[#1A1A1A] mb-2">Our Extended Family</h3>
            <p className="text-[#5A5A5A] text-base max-w-2xl mx-auto font-light">
              Two sister concerns standing as strong pillars alongside Nexerra Infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <motion.div
                key={partner.company}
                variants={cardVariant}
                className="bg-white border border-[#E2E1DC] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${partner.gradient} p-6 flex items-start justify-between`}>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{partner.company}</h4>
                    <div className="flex items-center gap-3 text-white/55 text-sm">
                      <span>{partner.established}</span>
                      <span>·</span>
                      <span>{partner.location}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#5A5A5A] text-sm mb-5">{partner.description}</p>
                  <div className="space-y-3">
                    {partner.team.map((member) => (
                      <div key={member.name} className="flex items-start gap-3 p-3 bg-[#F2F5F2] rounded-xl border border-[#E2E1DC]">
                        <div className={`w-10 h-10 bg-gradient-to-br ${partner.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-bold text-xs">{member.initials}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-[#1A1A1A] text-sm">{member.name}</div>
                          <div className="text-[#6B8C6B] text-xs font-medium mb-0.5">{member.role} · {member.exp}</div>
                          <div className="text-[#5A5A5A] text-xs">{member.qual}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
