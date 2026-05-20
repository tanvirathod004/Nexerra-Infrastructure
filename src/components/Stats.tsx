"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, TrendingUp, MapPin } from "lucide-react";
import { staggerContainer, viewportConfig } from "@/lib/animations";

const stats = [
  { Icon: Award,       value: 37, suffix: "+",          label: "Years of Excellence", sub: "Since 1987" },
  { Icon: CheckCircle, value: 40, suffix: "+",          label: "Projects Completed",  sub: "PAN India" },
  { Icon: TrendingUp,  value: 15, suffix: " Lakh+ Sq.Ft", label: "Constructed Area",   sub: "Across India" },
  { Icon: MapPin,      value: 12, suffix: "+",          label: "Cities Served",       sub: "MH & Gujarat" },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const step = end / (1800 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setCount(Math.floor(current));
      if (current >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 60%, #1A1A1A 100%)" }}
    >
      {/* Arch grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-30" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(107,140,107,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group text-center p-6 lg:p-8 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-[#6B8C6B]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#6B8C6B]/15 border border-[#6B8C6B]/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.Icon className="w-7 h-7 text-[#8FBB8F]" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#8FBB8F] font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/35 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
