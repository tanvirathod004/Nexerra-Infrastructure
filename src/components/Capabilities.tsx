"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

const materialInventory = [
  { item: "MS Plates",                qty: "1,700" },
  { item: "Metal Props / Jack Props", qty: "700"   },
  { item: "Wooden Props",             qty: "1,500" },
  { item: "Tier Rods",                qty: "1,000" },
  { item: "Metal Beams",              qty: "200"   },
  { item: "Metal Spans",              qty: "100"   },
  { item: "Clampers",                 qty: "200"   },
  { item: "H-Frames",                 qty: "50"    },
  { item: "Concrete Calibrators",     qty: "05"    },
];

const machinery = [
  { name: "Bar Bending Machine",  qty: "01" },
  { name: "Cutter Machines",      qty: "03" },
  { name: "Angle Grinders",       qty: "04" },
  { name: "Digital Web Batcher",  qty: "01" },
  { name: "Concrete Mixer",       qty: "01" },
  { name: "Winch Machine",        qty: "01" },
];

const team = [
  { count: "2", role: "Senior Interior Designers / Architects" },
  { count: "1", role: "Structural Engineer"                    },
  { count: "6", role: "Senior Engineers"                       },
  { count: "7", role: "Junior Engineers"                       },
  { count: "4", role: "Estimation & Billing Engineers"         },
];

const alsoOnSite = [
  "Full safety equipment",
  "Modern machinery",
  "Estimation software",
  "Experienced labour",
  "Trained professionals",
  "Latest tools & techniques",
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-28 overflow-hidden"
      style={{ background: "#F5F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────── */}
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
              Capabilities &amp; Capacity
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight mb-5"
          >
            Equipped, Staffed and{" "}
            <span className="sage-text">Ready for Any Scale</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            On any given day, our shuttering capacity alone runs to 110–120 brass (11,500+ sq ft)
            at a single pour. Here&apos;s what stands behind that.
          </motion.p>
        </motion.div>

        {/* ── Main 3-column layout ──────────────── */}
        <div className="grid lg:grid-cols-[2fr_1.4fr_1.6fr] gap-5 mb-5">

          {/* ── Left: Shuttering capacity ─────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-xl p-8 flex flex-col justify-between relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #0D1A10 0%, #1A2A1A 60%, #0D1A10 100%)" }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(107,140,107,0.15) 0%, transparent 65%)", transform: "translate(30%, -30%)" }}
            />

            <div>
              <p className="text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.22em] mb-6">
                Shuttering Capacity
              </p>

              {/* Big number */}
              <div className="mb-2">
                <span
                  className="text-white font-black leading-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: "Georgia, serif" }}
                >
                  110–120
                </span>
                <span className="text-[#8FBB8F] text-lg font-semibold ml-2">brass</span>
              </div>
              <p className="text-white/45 text-sm mb-6">= 11,500+ sq ft at a single pour</p>

              <p className="text-white/60 text-sm leading-relaxed">
                This raw capacity is how we&apos;ve delivered{" "}
                <strong className="text-white font-bold">14 lakh+ sq ft</strong> in Maharashtra
                alone. Whether the slab is small or city-block-sized, we own the equipment and the
                trained crews to pour it on schedule.
              </p>
            </div>

            {/* Bottom stat strip */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              {[
                { val: "40+",  sub: "Projects Pan India" },
                { val: "15L+", sub: "Sq Ft Built"        },
                { val: "20+",  sub: "Team In-House"      },
              ].map((s) => (
                <div key={s.sub}>
                  <div className="text-[#8FBB8F] font-black text-xl leading-none mb-1">{s.val}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">{s.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Middle: Material inventory ─────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white border border-[#E2E1DC] rounded-xl p-7"
          >
            <p className="text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.22em] mb-5">
              Material Inventory
            </p>
            <div className="space-y-0 divide-y divide-[#F0EEE8]">
              {materialInventory.map((row) => (
                <div key={row.item} className="flex items-center justify-between py-2.5">
                  <span className="text-[#444] text-sm">{row.item}</span>
                  <span className="text-[#1A1A1A] font-bold text-sm tabular-nums">{row.qty}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Machinery + Team stacked ───── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-5"
          >
            {/* Machinery */}
            <div className="bg-white border border-[#E2E1DC] rounded-xl p-7 flex-1">
              <p className="text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.22em] mb-5">
                Machinery On Site
              </p>
              <div className="space-y-0 divide-y divide-[#F0EEE8]">
                {machinery.map((m) => (
                  <div key={m.name} className="flex items-center justify-between py-2">
                    <span className="text-[#444] text-sm">{m.name}</span>
                    <span className="text-[#1A1A1A] font-bold text-sm tabular-nums">{m.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-house team */}
            <div
              className="rounded-xl p-7"
              style={{ background: "linear-gradient(135deg, #0D1A10 0%, #1A2A1A 100%)" }}
            >
              <p className="text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.22em] mb-5">
                In-House Team
              </p>
              <div className="space-y-3">
                {team.map((t) => (
                  <div key={t.role} className="flex items-center gap-4">
                    <span className="text-[#8FBB8F] font-black text-2xl leading-none w-7 flex-shrink-0">
                      {t.count}
                    </span>
                    <span className="text-white/70 text-sm leading-snug">{t.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Also on site strip ─────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white border border-[#E2E1DC] rounded-xl px-7 py-5 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <span className="text-[#6B8C6B] text-[11px] font-bold uppercase tracking-[0.22em] flex-shrink-0">
            Also On Site
          </span>
          <div className="w-px h-4 bg-[#E2E1DC] hidden sm:block flex-shrink-0" />
          {alsoOnSite.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[#444] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#6B8C6B] flex-shrink-0" />
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
