"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";
import ProjectDetailModal, { type ProjectData } from "./ProjectDetailModal";

type Category = "all" | "residential" | "commercial" | "industrial" | "turnkey";

type Project = ProjectData & { category: Category };

const projects: Project[] = [
  {
    title: "Asopalav Apartment",
    location: "Dwarka, Nashik",
    type: "Residential",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "residential",
    floors: "G+7",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "A premium G+7 residential complex featuring RCC framework construction with high-quality brick masonry and plaster finish. Delivered with meticulous structural integrity.",
  },
  {
    title: "Bytcoo Classic",
    location: "Nashik Road",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+6",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "A modern commercial complex featuring contemporary architectural design with robust RCC structure, quality masonry work, and premium plaster finish across 6 floors.",
  },
  {
    title: "Kulkarni Plaza",
    location: "Makhmalabad, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+5",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    description: "A 5-floor commercial development executed with precision RCC framing, quality brickwork, and superior plastering. Delivered ahead of schedule with complete client satisfaction.",
  },
  {
    title: "Chaitanya Plaza",
    location: "Gangapur Road, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+8",
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80",
    description: "An 8-floor landmark commercial tower on Gangapur Road. High-quality RCC construction with finished masonry and plasterwork executed to the highest standards.",
  },
  {
    title: "Canada Kricent",
    location: "Canada Corner, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+10",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "A G+10 mixed-use commercial tower at Canada Corner — one of Nashik's busiest intersections — showcasing Nexerra's high-rise construction expertise.",
  },
  {
    title: "Mark One",
    location: "Pipeline Road, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+9",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    description: "A 9-floor commercial complex on Pipeline Road featuring comprehensive RCC construction with premium brick and plaster finishes, delivered on schedule.",
  },
  {
    title: "Garuda Multi Speciality Hospital",
    location: "Surat, Gujarat",
    type: "Industrial",
    work: "Turnkey Execution",
    status: "Completed",
    category: "turnkey",
    floors: "G+4",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "Complete turnkey execution for a multi-specialty hospital in Surat, including structural works, MEP integration, and premium interior finishing to healthcare standards.",
  },
  {
    title: "Fern Resort",
    location: "Jambughoda, Gujarat",
    type: "Commercial",
    work: "External Development Works",
    status: "Completed",
    category: "commercial",
    floors: "—",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "External development and landscaping works for a resort property in Jambughoda, including civil infrastructure, outdoor amenities, and site finishing.",
  },
  {
    title: "Goa 3-Star Hotel",
    location: "Goa, Maharashtra",
    type: "Commercial",
    work: "Waterproofing Works",
    status: "Completed",
    category: "commercial",
    floors: "G+5",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive waterproofing works for a 3-star hotel in Goa, ensuring long-term structural protection against coastal weather and monsoon resilience.",
  },
  {
    title: "Neha Nisha Residency",
    location: "Hirawadi, Nashik",
    type: "Residential",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "residential",
    floors: "G+7",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    description: "A G+7 residential complex in Hirawadi featuring quality RCC framework with superior brick masonry and premium plaster finish, delivered to satisfied residents.",
  },
  {
    title: "Aradhana Bungalow",
    location: "Pune, Maharashtra",
    type: "Residential",
    work: "Complete Construction",
    status: "Completed",
    category: "residential",
    floors: "G+2",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "A complete construction project for a 2-floor premium bungalow in Pune, executed as a full turnkey package with high-end finishes and exceptional craftsmanship.",
  },
  {
    title: "M/s Tribeni Group Office",
    location: "Surat, Gujarat",
    type: "Commercial",
    work: "Turnkey Execution",
    status: "Ongoing",
    category: "turnkey",
    floors: "G+3",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Ongoing turnkey execution for a corporate office complex in Surat, featuring premium interiors and full-service project management.",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Projects",  value: "all" },
  { label: "Residential",   value: "residential" },
  { label: "Commercial",    value: "commercial" },
  { label: "Industrial",    value: "industrial" },
  { label: "Turnkey",       value: "turnkey" },
];

const typeColors: Record<string, string> = {
  Residential: "#6B8C6B",
  Commercial:  "#3D5E3D",
  Industrial:  "#4E7450",
  Turnkey:     "#8FBB8F",
};

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section id="projects" className="py-28 overflow-hidden" style={{ background: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ─────────────────────────────── */}
          <motion.div
            className="text-center mb-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp}>
              <span className="section-chip mb-5 inline-flex">
                <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight"
            >
              Projects That{" "}
              <span className="sage-text">Define Excellence</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
            <motion.p
              variants={fadeUp}
              className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed font-light"
            >
              A curated showcase of our landmark projects across residential, commercial,
              industrial, and turnkey sectors — built with precision and pride.
            </motion.p>
          </motion.div>

          {/* ── Filter tabs ────────────────────────── */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {filters.map((f) => (
              <motion.button
                key={f.value}
                onClick={() => setActive(f.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  active === f.value
                    ? "bg-[#6B8C6B] text-white shadow-lg shadow-[#6B8C6B]/30"
                    : "bg-white text-[#3D3D3D] border border-[#E2E1DC] hover:border-[#6B8C6B]/40 hover:bg-[#F2F5F2]"
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </motion.div>

          {/* ── Projects grid ──────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  variants={cardVariant}
                  className="group bg-white rounded-2xl border border-[#E2E1DC] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  {/* Image header */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Floor badge */}
                    <div className="absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
                      {project.floors !== "—" ? `${project.floors} Floors` : project.type}
                    </div>

                    {/* Status badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg ${
                        project.status === "Completed"
                          ? "bg-[#6B8C6B]/85 text-white"
                          : "bg-amber-500/85 text-white"
                      }`}>
                        {project.status === "Completed"
                          ? <CheckCircle className="w-3 h-3" />
                          : <Clock className="w-3 h-3" />}
                        {project.status}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div
                      className="text-xs font-bold uppercase tracking-[0.12em] mb-2"
                      style={{ color: typeColors[project.type] || "#6B8C6B" }}
                    >
                      {project.type}
                    </div>
                    <h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#6B8C6B] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#5A5A5A] text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#6B8C6B]" />
                      {project.location}
                    </div>
                    <div className="text-[#3D3D3D] text-xs bg-[#F2F5F2] rounded-lg px-3 py-2 border border-[#E2E1DC]">
                      {project.work}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── Summary bar ────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-2xl p-8 mb-10"
            style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { num: "12+", label: "Nashik Projects" },
                { num: "11+", label: "Residential Homes" },
                { num: "17+", label: "Turnkey Executions" },
                { num: "6+",  label: "Estimation Projects" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-[#8FBB8F] mb-1">{s.num}</div>
                  <div className="text-white/55 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CTA ───────────────────────────────── */}
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-[#5A5A5A] mb-5 font-light">
              Interested in working with us on your next project?
            </p>
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#6B8C6B]/25 transition-colors duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
