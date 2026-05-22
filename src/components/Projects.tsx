"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";
import ProjectDetailModal, { type ProjectData } from "./ProjectDetailModal";

type Category     = "all" | "residential" | "commercial" | "industrial" | "ongoing";
type StatusFilter = "all" | "completed" | "ongoing";

type Project = ProjectData & { category: Category };

const projects: Project[] = [
  {
    title: "GP Farm Temple",
    location: "Gangapur Road, Nashik",
    type: "Institutional",
    work: "RCC, Brick Work, Plaster & Interior",
    status: "Ongoing",
    category: "ongoing",
    floors: "G+1",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description: "An ongoing institutional construction project on Gangapur Road featuring comprehensive RCC framework, quality brick masonry, premium plaster finish, and full interior fit-out works.",
  },
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
    title: "Keshar Plaza",
    location: "Peth Road, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+6",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    description: "A commercial plaza on Peth Road built to exacting standards with full RCC framework, quality brick masonry, and smooth plaster finishes throughout.",
  },
  {
    title: "Agrawal Builders",
    location: "Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    category: "commercial",
    floors: "G+7",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    description: "A multi-floor commercial development for Agrawal Builders in Nashik, delivering robust RCC construction with quality brickwork and professional plaster finish.",
  },
  {
    title: "Garuda Multi Speciality Hospital",
    location: "Surat, Gujarat",
    type: "Industrial",
    work: "Turnkey Execution",
    status: "Completed",
    category: "industrial",
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
    location: "Goa",
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
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
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
    title: "Kopargaon Row Bungalow",
    location: "Kopargaon, Maharashtra",
    type: "Residential",
    work: "RCC & Plaster",
    status: "Completed",
    category: "residential",
    floors: "G+1",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    description: "A row bungalow development in Kopargaon featuring RCC structural work and quality plaster finish, delivering comfortable residential spaces with clean construction standards.",
  },
  {
    title: "M/s Tribeni Group Office",
    location: "Surat, Gujarat",
    type: "Commercial",
    work: "Turnkey Execution",
    status: "Ongoing",
    category: "ongoing",
    floors: "G+3",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Ongoing turnkey execution for a corporate office complex in Surat, featuring premium interiors and full-service project management.",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All",         value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial",  value: "commercial" },
  { label: "Industrial",  value: "industrial" },
  { label: "Ongoing",     value: "ongoing" },
];

type Props = { showAll?: boolean };

const statusFilters: { label: string; value: StatusFilter }[] = [
  { label: "All",       value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Ongoing",   value: "ongoing" },
];

export default function Projects({ showAll = false }: Props) {
  const [active, setActive]         = useState<Category>("all");
  const [status, setStatus]         = useState<StatusFilter>("all");
  const [selected, setSelected]     = useState<Project | null>(null);
  const [dropdownOpen, setDropdown] = useState(false);
  const dropdownRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = projects.filter((p) => {
    const categoryMatch = active === "all" || p.category === active;
    const statusMatch   = status === "all" || p.status.toLowerCase() === status;
    return categoryMatch && statusMatch;
  });
  const displayed = showAll ? filtered : filtered.slice(0, 9);

  return (
    <>
      <section id="projects" className="py-28 overflow-hidden" style={{ background: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Centered chip + heading (homepage only) ── */}
          {!showAll && (
            <motion.div
              className="text-center mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div variants={fadeUp}>
                <span className="section-chip mb-5 inline-flex">
                  <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
                  Featured Work
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4 leading-tight"
              >
                Projects we&apos;ve delivered —{" "}
                <span className="sage-text">and ones we&apos;re building right now.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="sage-divider mx-auto" />
            </motion.div>
          )}

          {/* ── Filter row ───────────────────────────── */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Left: status dropdown (projects page) OR subtext (homepage) */}
            {showAll ? (
              <motion.div variants={fadeUp} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdown((o) => !o)}
                  className="flex items-center gap-3 bg-white border border-[#E2E1DC] hover:border-[#6B8C6B]/50 text-[#1A1A1A] font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 min-w-[170px] justify-between"
                >
                  <span className="flex items-center gap-2">
                    {status === "ongoing" && (
                      <span className="w-1.5 h-1.5 bg-[#C4922A] rounded-full animate-pulse" />
                    )}
                    {statusFilters.find((f) => f.value === status)?.label ?? "All Status"}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#6B8C6B] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1.5 w-full bg-white border border-[#E2E1DC] rounded-lg shadow-lg overflow-hidden z-20"
                    >
                      {statusFilters.map((f) => (
                        <button
                          key={f.value}
                          onClick={() => { setStatus(f.value); setDropdown(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 transition-colors ${
                            status === f.value
                              ? "bg-[#F2F5F2] text-[#3D5E3D] font-bold"
                              : "text-[#3D3D3D] hover:bg-[#F5F4EF] font-medium"
                          }`}
                        >
                          {f.value === "ongoing" && (
                            <span className="w-1.5 h-1.5 bg-[#C4922A] rounded-full animate-pulse" />
                          )}
                          {f.value === "completed" && (
                            <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 text-[#6B8C6B]" fill="none">
                              <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {f.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.p
                variants={fadeUp}
                className="text-[#5A5A5A] text-base leading-relaxed font-light lg:max-w-sm"
              >
                A glimpse of the residential, commercial and hospitality projects Nexerra has
                executed across Maharashtra, Gujarat and beyond.
              </motion.p>
            )}

            {/* Right: category tabs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                    active === f.value
                      ? "bg-[#3D5E3D] text-white border-[#3D5E3D] shadow-sm"
                      : "bg-white text-[#3D3D3D] border-[#E2E1DC] hover:border-[#6B8C6B]/50 hover:text-[#3D5E3D]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Projects grid ──────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${status}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {displayed.map((project) => (
                <motion.div
                  key={project.title}
                  variants={cardVariant}
                  className="group bg-white rounded-lg border border-[#E2E1DC] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  {/* Image area */}
                  <div className="relative h-52 overflow-hidden bg-[#1E2A3A]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A3A]/40 via-[#1E2A3A]/20 to-[#1E2A3A]/60 mix-blend-multiply" />

                    {/* Status badge */}
                    {project.status === "Ongoing" ? (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#C4922A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Now Building
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#6B8C6B]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                        <svg viewBox="0 0 10 8" className="w-2.5 h-2.5" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Completed
                      </div>
                    )}

                    {/* Floor badge */}
                    <div className="absolute top-3 right-3 text-white/80 text-xs font-bold px-2.5 py-1 rounded-md bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/10">
                      {project.floors !== "—" ? project.floors : "—"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 pt-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2.5 text-[#7A7A7A]">
                      {project.type}&nbsp;·&nbsp;{project.work}
                    </div>
                    <h3 className="text-xl font-black text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#3D5E3D] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#5A5A5A] text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#6B8C6B]" />
                      {project.location}
                    </div>
                    {showAll && project.description && (
                      <p className="text-[#6A6A6A] text-sm leading-relaxed line-clamp-3 border-t border-[#F0EFEA] pt-3">
                        {project.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── Summary bar (projects page only) ──────── */}
          {showAll && <motion.div
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
          </motion.div>}

          {/* ── View all strip (homepage only) ─────────── */}
          {!showAll && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="rounded-xl px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
              style={{ background: "linear-gradient(135deg, #1B2A3B 0%, #0F1A28 100%)" }}
            >
              <div>
                <p className="text-[#8FBB8F] text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5">
                  40+ Delivered · Open On-Going
                </p>
                <h3
                  className="text-white text-lg font-black leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  See the full portfolio of Nexerra&apos;s work across India.
                </h3>
              </div>
              <Link
                href="/projects"
                className="shrink-0 inline-flex items-center gap-2.5 bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold px-7 py-3.5 rounded-lg text-sm shadow-lg shadow-[#6B8C6B]/20 transition-colors duration-300 whitespace-nowrap group"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          )}

        </div>
      </section>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
