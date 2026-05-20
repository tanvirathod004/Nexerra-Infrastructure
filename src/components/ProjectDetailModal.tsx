"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin, CheckCircle, Clock, Layers, Wrench } from "lucide-react";

export type ProjectData = {
  title: string;
  location: string;
  type: string;
  work: string;
  status: string;
  floors: string;
  image: string;
  description: string;
};

type Props = {
  project: ProjectData | null;
  onClose: () => void;
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const typeColors: Record<string, string> = {
  Residential: "#6B8C6B",
  Commercial:  "#3D5E3D",
  Industrial:  "#4E7450",
  Turnkey:     "#8FBB8F",
};

export default function ProjectDetailModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[199]"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.35, ease }}
            >
              {/* Hero image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-5">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg ${
                    project.status === "Completed" ? "bg-[#6B8C6B] text-white" : "bg-amber-500 text-white"
                  }`}>
                    {project.status === "Completed"
                      ? <CheckCircle className="w-3 h-3" />
                      : <Clock className="w-3 h-3" />}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div
                  className="text-xs font-bold uppercase tracking-[0.15em] mb-2"
                  style={{ color: typeColors[project.type] || "#6B8C6B" }}
                >
                  {project.type}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-5 leading-tight">
                  {project.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#F5F4EF] rounded-xl p-4 border border-[#E2E1DC]">
                    <div className="flex items-center gap-1.5 text-[#6B8C6B] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <MapPin className="w-3 h-3" /> Location
                    </div>
                    <div className="text-[#1A1A1A] font-semibold text-sm leading-tight">{project.location}</div>
                  </div>
                  <div className="bg-[#F5F4EF] rounded-xl p-4 border border-[#E2E1DC]">
                    <div className="flex items-center gap-1.5 text-[#6B8C6B] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <Layers className="w-3 h-3" /> Floors
                    </div>
                    <div className="text-[#1A1A1A] font-semibold text-sm">
                      {project.floors !== "—" ? `${project.floors} Floors` : "—"}
                    </div>
                  </div>
                  <div className="bg-[#F5F4EF] rounded-xl p-4 border border-[#E2E1DC] col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1.5 text-[#6B8C6B] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <Wrench className="w-3 h-3" /> Scope
                    </div>
                    <div className="text-[#1A1A1A] font-semibold text-sm leading-tight">{project.work}</div>
                  </div>
                </div>

                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 rounded-xl border-2 border-[#E2E1DC] text-[#3D3D3D] font-semibold text-sm hover:border-[#6B8C6B] hover:text-[#6B8C6B] transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold text-sm transition-colors"
                  >
                    Start Similar Project →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
