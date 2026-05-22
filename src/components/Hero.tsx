"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, LayoutGrid, Maximize2, MapPin } from "lucide-react";
import Image from "next/image";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

const skylineBars = [
  { x: 2,  h: 60,  w: 2.5, delay: 0.0  },
  { x: 6,  h: 80,  w: 2.5, delay: 0.05 },
  { x: 10, h: 110, w: 3,   delay: 0.1  },
  { x: 15, h: 145, w: 3.5, delay: 0.15 },
  { x: 20, h: 175, w: 4,   delay: 0.2  },
  { x: 26, h: 205, w: 5,   delay: 0.25 },
  { x: 33, h: 240, w: 5.5, delay: 0.3  },
  { x: 40, h: 215, w: 4.5, delay: 0.35 },
  { x: 47, h: 255, w: 5,   delay: 0.4  },
  { x: 54, h: 285, w: 5.5, delay: 0.45 },
  { x: 62, h: 265, w: 5,   delay: 0.5  },
  { x: 69, h: 230, w: 4,   delay: 0.55 },
  { x: 75, h: 195, w: 3.5, delay: 0.6  },
  { x: 81, h: 160, w: 3,   delay: 0.65 },
  { x: 86, h: 125, w: 2.5, delay: 0.7  },
  { x: 91, h: 90,  w: 2.5, delay: 0.75 },
  { x: 95, h: 65,  w: 2,   delay: 0.8  },
];

const stats = [
  { Icon: Clock,      value: "37+",  label: "Years of\nExperience"  },
  { Icon: LayoutGrid, value: "40+",  label: "Projects\nDelivered"   },
  { Icon: Maximize2,  value: "15L+", label: "Sq Ft Built\nPan India" },
  { Icon: MapPin,     value: "12+",  label: "Cities Served\nGrowing network" },
];

const trustBrands = ["L&T", "GODREJ", "TATA", "HIRANANDANI", "SOBHA"];

const words = ["rock-solid", "unmatched", "precision", "excellence"];

const fade = (y = 20) => ({
  hidden:  { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVis, setWordVis] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setWordVis(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % words.length); setWordVis(true); }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen relative"
      /* offset for fixed header: 30px top-bar + 66px nav = 96px on desktop, 66px on mobile */
    >

      {/* ══════════════ LEFT PANEL ══════════════ */}
      <div className="w-full lg:w-[46%] flex-shrink-0 flex flex-col justify-center bg-[#F5F4EF] px-6 sm:px-10 lg:px-14 xl:px-20 pt-[110px] md:pt-[110px] pb-16 relative">

        <motion.div
          className="w-full max-w-lg"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
        >

          {/* Badge */}
          <motion.div variants={fade(14)}>
            <span className="inline-flex items-center gap-2 border border-[#6B8C6B]/35 text-[#6B8C6B] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.16em] uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-[#6B8C6B] rounded-full" />
              Serving India Since 1987
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fade(22)}
            className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black text-[#181818] leading-[1.07] tracking-tight mb-6"
          >
            Building India&apos;s<br />
            future on{" "}
            <em
              className="not-italic font-black"
              style={{
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                color: "#6B8C6B",
                opacity: wordVis ? 1 : 0,
                transform: wordVis ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.38s ease, transform 0.38s ease",
                display: "inline-block",
              }}
            >
              {words[wordIdx]}
            </em>
            <br />
            foundations.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fade(16)}
            className="text-[#555] text-base sm:text-[1.05rem] leading-relaxed mb-10 max-w-md"
          >
            Where Incredible Is Possible — Nexerra Infrastructure is trusted across residential, commercial and industrial construction. Quality craftsmanship, on-time
            delivery, complete transparency — the Nexerra way.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fade(14)} className="flex flex-wrap items-center gap-4 mb-12">
            <motion.button
              onClick={() => scrollTo("#projects")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#181818] hover:bg-[#333] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-black/20"
            >
              View Our Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => scrollTo("#about")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 border-2 border-[#2D2D2D]/20 text-[#2D2D2D] hover:border-[#6B8C6B] hover:text-[#6B8C6B] font-bold px-6 py-3.5 rounded-xl text-sm transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-[#2D2D2D]/8 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              Watch Our Story
            </motion.button>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={fade(10)}>
            <p className="text-[#AAA] text-[10px] font-bold uppercase tracking-[0.22em] mb-3">
              Trusted by 40+ Clients &amp; Architects
            </p>
            {/* <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {trustBrands.map((brand) => (
                <span key={brand} className="text-[#2D2D2D]/30 text-sm font-black tracking-widest">
                  {brand}
                </span>
              ))}
            </div> */}
          </motion.div>

        </motion.div>
      </div>

      {/* ══════════════ STAT CARDS — boundary overlay ══════════════ */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-[44%] flex-col gap-3 z-20">
        {stats.map(({ Icon, value, label }, i) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.18, duration: 0.55, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl border border-white/20 border-l-4 border-l-[#6B8C6B] min-w-[200px]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6B8C6B]/12 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-[#6B8C6B]" />
            </div>
            <div>
              <div className="text-2xl font-black text-[#181818] leading-none mb-0.5">{value}</div>
              <div className="text-[11px] text-[#666] leading-snug whitespace-pre-line">{label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ══════════════ RIGHT PANEL ══════════════ */}
      <div
        className="hidden lg:flex flex-1 relative overflow-hidden pt-[110px]"
        style={{ background: "linear-gradient(160deg, #0D1410 0%, #1A2A1A 55%, #0F1A0F 100%)" }}
      >
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 arch-grid opacity-50" />

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(107,140,107,0.1) 0%, transparent 65%)" }}
        />

        {/* Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <Image
            src="/nexerra-logo.png"
            alt=""
            width={460}
            height={368}
            className="object-contain"
            style={{ opacity: 0.04, filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Skyline bars */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
          style={{ height: "320px" }}
        >
          {skylineBars.map((bar, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{ left: `${bar.x}%`, width: `${bar.w}%` }}
              initial={{ scaleY: 0, originY: "bottom" }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.6, delay: bar.delay + 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${bar.h}px`,
                  background: "linear-gradient(to top, rgba(107,140,107,0.2), rgba(107,140,107,0.05))",
                  borderTop: "1px solid rgba(107,140,107,0.22)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* "Now Building" live badge */}
        <motion.div
          className="absolute bottom-8 left-8 z-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.55 }}
        >
          <div className="bg-[#0A150A]/85 backdrop-blur-sm border border-[#6B8C6B]/30 rounded-xl px-4 py-3 shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#6B8C6B] animate-pulse" />
              <span className="text-[#8FBB8F] text-[10px] font-bold uppercase tracking-[0.2em]">Now Building</span>
            </div>
            <div className="text-white text-sm font-bold">Industrial Complex — Nashik</div>
            <div className="text-white/40 text-xs mt-0.5">G+4 RCC · Maharashtra · ETA Q2 2026</div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
