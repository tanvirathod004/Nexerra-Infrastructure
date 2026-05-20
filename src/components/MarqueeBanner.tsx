"use client";

const items = [
  "37+ Years of Excellence",
  "40+ Projects PAN India",
  "15 Lakh+ Sq.Ft Constructed",
  "RCC Contracting Experts",
  "Residential · Commercial · Industrial",
  "Maharashtra & Gujarat",
  "Quality First Approach",
  "On-Time Delivery Guaranteed",
  "BIM Certified Engineers",
  "Turnkey Construction Solutions",
];

export default function MarqueeBanner() {
  return (
    <div className="py-3 overflow-hidden" style={{ background: "linear-gradient(90deg, #6B8C6B 0%, #3D5E3D 50%, #6B8C6B 100%)" }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-white/90 font-semibold text-sm"
          >
            <span className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
