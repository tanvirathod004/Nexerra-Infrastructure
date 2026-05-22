"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { companyInfo } from "@/lib/data";

const mapCities = [
  { name: "Ahmedabad",  x: 238, y: 188, count: "3+",  r: 3.5, highlight: false, side: "right" },
  { name: "Vadodara",   x: 268, y: 214, count: "1+",  r: 2.5, highlight: false, side: "right" },
  { name: "Jamnagar",   x: 130, y: 160, count: "2+",  r: 2.5, highlight: false, side: "left"  },
  { name: "Surat",      x: 265, y: 260, count: "6+",  r: 6,   highlight: true,  side: "right" },
  { name: "Valsad",     x: 275, y: 296, count: "2+",  r: 2.5, highlight: false, side: "right" },
  { name: "Nashik",     x: 315, y: 352, count: "20+", r: 6,   highlight: true,  side: "right" },
  { name: "Kopargaon",  x: 348, y: 322, count: "2+",  r: 2.5, highlight: false, side: "right" },
  { name: "Mumbai",     x: 224, y: 392, count: "5+",  r: 3.5, highlight: false, side: "right" },
  { name: "Pune",       x: 298, y: 424, count: "4+",  r: 2.5, highlight: false, side: "right" },
  { name: "Goa",        x: 260, y: 512, count: "1",   r: 2.5, highlight: false, side: "right" },
] as const;

export default function Presence() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0D0D0D 0%, #1A1A1A 55%, #0F160F 100%)" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-40" />

      {/* Corner glows */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(107,140,107,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(107,140,107,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: content ────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#6B8C6B] text-xs font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
            >
              <span className="w-6 h-px bg-[#6B8C6B]" />
              Pan India Presence
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5"
            >
              Two states.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6B8C6B 0%, #8FBB8F 50%, #3D5E3D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Twelve cities.
              </span>
              <br />
              Counting.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-base leading-relaxed font-light mb-8 max-w-md"
            >
              Nexerra has executed RCC, brickwork and plaster contracts across
              Maharashtra and Gujarat — supported on the ground by our sister
              concerns based in Surat.
            </motion.p>

            {/* State rows */}
            <motion.div variants={fadeUp} className="space-y-3 mb-4">
              {[
                { state: "Maharashtra", cities: "Mumbai · Nashik · Pune · Kopargaon · Goa" },
                { state: "Gujarat",     cities: "Surat · Ahmedabad · Jamnagar · Valsad · Dumas · Vadodara" },
              ].map((s) => (
                <div
                  key={s.state}
                  className="flex items-start gap-5 bg-white/4 border border-white/8 rounded-xl px-5 py-4"
                >
                  <span className="text-[#8FBB8F] font-bold text-sm shrink-0 w-28">{s.state}</span>
                  <span className="text-white/50 text-sm leading-relaxed">{s.cities}</span>
                </div>
              ))}
            </motion.div>

            {/* Head office */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 bg-[#6B8C6B]/15 border border-[#6B8C6B]/25 rounded-xl px-5 py-4"
            >
              <MapPin className="w-4 h-4 text-[#8FBB8F] shrink-0" />
              <div>
                <p className="text-[#8FBB8F] text-[10px] font-bold uppercase tracking-[0.15em] mb-0.5">
                  Head Office
                </p>
                <p className="text-white text-sm font-medium">
                  {companyInfo.address}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: SVG map ───────────────── */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <svg
              viewBox="0 0 440 590"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(107,140,107,0.07)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {/* Soft background glow */}
              <ellipse cx="240" cy="295" rx="210" ry="275" fill="url(#mapGlow)" />

              {/* Western India outline (Gujarat + Maharashtra) */}
              <path
                d="M 235 20
                   C 288 14 355 38 383 85
                   L 396 152
                   C 400 192 398 232 390 265
                   L 384 302
                   C 387 332 390 362 378 390
                   L 362 428
                   C 346 460 326 488 303 512
                   C 283 532 263 540 245 534
                   C 227 528 213 512 207 488
                   C 199 462 205 437 213 414
                   C 221 390 231 370 224 348
                   C 217 326 203 314 197 292
                   L 193 264
                   C 187 240 180 214 190 188
                   L 202 158
                   C 194 138 183 112 186 87
                   C 183 67 172 54 158 57
                   C 141 61 124 74 118 90
                   C 110 108 114 130 126 145
                   C 138 160 159 166 178 161
                   C 197 156 211 144 219 130
                   L 227 107
                   C 232 83 235 48 235 20 Z"
                stroke="rgba(143,187,143,0.28)"
                strokeWidth="1.5"
                fill="rgba(107,140,107,0.05)"
              />

              {/* City dots + labels */}
              {mapCities.map((city) => {
                const isLeft = city.side === "left";
                const labelX = isLeft ? city.x - city.r - 7 : city.x + city.r + 7;
                const anchor = isLeft ? "end" : "start";
                return (
                  <g key={city.name}>
                    {/* Halo for highlighted cities */}
                    {city.highlight && (
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.r + 5}
                        fill="rgba(107,140,107,0.15)"
                        stroke="rgba(143,187,143,0.35)"
                        strokeWidth="1"
                      />
                    )}
                    {/* Dot */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.r}
                      fill={city.highlight ? "#8FBB8F" : "rgba(255,255,255,0.7)"}
                    />
                    {/* Label */}
                    <text
                      x={labelX}
                      y={city.y + 4}
                      textAnchor={anchor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      <tspan
                        fill={city.highlight ? "#8FBB8F" : "rgba(255,255,255,0.6)"}
                        fontSize={city.highlight ? "11" : "9.5"}
                        fontWeight={city.highlight ? "700" : "400"}
                      >
                        {city.name}
                      </tspan>
                      <tspan fill="rgba(255,255,255,0.3)" fontSize="8.5" dx="3">
                        {city.count}
                      </tspan>
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
