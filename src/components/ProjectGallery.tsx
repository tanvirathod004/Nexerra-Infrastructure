"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Eye } from "lucide-react";
import { staggerContainer, fadeUp, cardVariant, viewportConfig } from "@/lib/animations";
import ProjectDetailModal, { type ProjectData } from "./ProjectDetailModal";

type GalleryCategory = "all" | "residential" | "commercial" | "turnkey" | "rcc" | "interior";

type GalleryItem = ProjectData & { category: GalleryCategory };

const galleryItems: GalleryItem[] = [
  {
    title: "Asopalav Apartment",
    location: "Dwarka, Nashik",
    type: "Residential",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    floors: "G+7",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "A premium G+7 residential complex featuring RCC framework construction with high-quality brick masonry and plaster finish. Delivered with meticulous structural integrity and superior finishing standards.",
    category: "residential",
  },
  {
    title: "Canada Kricent",
    location: "Canada Corner, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    floors: "G+10",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "A G+10 mixed-use commercial tower at Canada Corner — one of Nashik's busiest intersections — showcasing Nexerra's capability in high-rise construction and precision RCC execution.",
    category: "commercial",
  },
  {
    title: "Garuda Multi Speciality Hospital",
    location: "Surat, Gujarat",
    type: "Turnkey",
    work: "Turnkey Execution",
    status: "Completed",
    floors: "G+4",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "Complete turnkey execution for a multi-specialty hospital in Surat, including structural works, MEP integration, and premium interior finishing to healthcare standards.",
    category: "turnkey",
  },
  {
    title: "Chaitanya Plaza",
    location: "Gangapur Road, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    floors: "G+8",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    description: "An 8-floor landmark commercial tower on Gangapur Road. High-quality RCC construction with finished masonry and plasterwork executed to the highest industry standards.",
    category: "rcc",
  },
  {
    title: "Aradhana Bungalow",
    location: "Pune, Maharashtra",
    type: "Residential",
    work: "Complete Construction",
    status: "Completed",
    floors: "G+2",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "A complete construction project for a 2-floor premium bungalow in Pune, executed as a full turnkey package with high-end finishes and exceptional craftsmanship.",
    category: "residential",
  },
  {
    title: "Mark One",
    location: "Pipeline Road, Nashik",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    floors: "G+9",
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80",
    description: "A 9-floor commercial complex on Pipeline Road featuring comprehensive RCC construction with premium brick and plaster finishes, delivered on schedule.",
    category: "rcc",
  },
  {
    title: "Fern Resort",
    location: "Jambughoda, Gujarat",
    type: "Commercial",
    work: "External Development Works",
    status: "Completed",
    floors: "—",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "External development and landscaping works for a resort property in Jambughoda, including civil infrastructure, outdoor amenities, and site finishing.",
    category: "commercial",
  },
  {
    title: "M/s Tribeni Group Office",
    location: "Surat, Gujarat",
    type: "Turnkey",
    work: "Turnkey Execution",
    status: "Ongoing",
    floors: "G+3",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Ongoing turnkey execution for a corporate office complex in Surat, featuring premium interiors and full-service project management with state-of-the-art facilities.",
    category: "interior",
  },
  {
    title: "Neha Nisha Residency",
    location: "Hirawadi, Nashik",
    type: "Residential",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    floors: "G+7",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    description: "A G+7 residential complex in Hirawadi featuring quality RCC framework with superior brick masonry and premium plaster finish, delivered to satisfied residents.",
    category: "residential",
  },
  {
    title: "Goa 3-Star Hotel",
    location: "Goa, Maharashtra",
    type: "Commercial",
    work: "Waterproofing Works",
    status: "Completed",
    floors: "G+5",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive waterproofing works for a 3-star hotel in Goa, ensuring long-term structural protection against coastal weather and monsoon resilience.",
    category: "commercial",
  },
  {
    title: "Bytcoo Classic",
    location: "Nashik Road",
    type: "Commercial",
    work: "RCC, Brick Work & Plaster",
    status: "Completed",
    floors: "G+6",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "A modern commercial complex featuring contemporary architectural design with robust RCC structure, quality masonry work, and premium plaster finish across 6 floors.",
    category: "rcc",
  },
  {
    title: "CA Jay Chhaira Institute",
    location: "Surat, Gujarat",
    type: "Turnkey",
    work: "Turnkey Execution",
    status: "Completed",
    floors: "G+3",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    description: "Premium turnkey execution for a professional institute in Surat, featuring contemporary interiors, quality finishes, and seamless project coordination from concept to completion.",
    category: "interior",
  },
];

const galleryFilters: { label: string; value: GalleryCategory }[] = [
  { label: "All Work",    value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial",  value: "commercial" },
  { label: "Turnkey",     value: "turnkey" },
  { label: "RCC Work",    value: "rcc" },
  { label: "Interiors",   value: "interior" },
];

const typeColors: Record<string, string> = {
  Residential: "#6B8C6B",
  Commercial:  "#3D5E3D",
  Industrial:  "#4E7450",
  Turnkey:     "#8FBB8F",
};

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <section id="gallery" className="py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #EEECEA 0%, #F5F4EF 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────── */}
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
                Excellence in Execution
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight"
            >
              Built by{" "}
              <span className="sage-text">Nexerra</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
            <motion.p
              variants={fadeUp}
              className="text-[#5A5A5A] text-lg max-w-2xl mx-auto font-light"
            >
              A visual journey through our landmark projects — where every structure
              tells a story of precision, passion, and lasting quality.
            </motion.p>
          </motion.div>

          {/* ── Filters ─────────────────────────── */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {galleryFilters.map((f) => (
              <motion.button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-[#6B8C6B] text-white shadow-lg shadow-[#6B8C6B]/30"
                    : "bg-white text-[#3D3D3D] border border-[#E2E1DC] hover:border-[#6B8C6B]/40 hover:bg-[#F2F5F2]"
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </motion.div>

          {/* ── Gallery grid ────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={cardVariant}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => setSelected(item)}
                >
                  <div className={`relative overflow-hidden ${i % 3 === 0 ? "h-72" : "h-56"}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300" />

                    {/* Type badge */}
                    <div
                      className="absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm"
                      style={{ background: `${typeColors[item.type] || "#6B8C6B"}CC` }}
                    >
                      {item.type}
                    </div>

                    {/* View icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-base leading-tight mb-1">{item.title}</h4>
                      <div className="flex items-center gap-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── Count ───────────────────────────── */}
          <motion.p
            className="text-center text-[#5A5A5A] text-sm mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Showing{" "}
            <span className="font-bold text-[#1A1A1A]">{filtered.length}</span>
            {" "}of{" "}
            <span className="font-bold text-[#1A1A1A]">{galleryItems.length}</span>
            {" "}projects
          </motion.p>
        </div>
      </section>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
