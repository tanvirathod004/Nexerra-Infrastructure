"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { staggerContainer, fadeUp, fadeRight, viewportConfig } from "@/lib/animations";

const projectTypes = [
  "Residential", "Commercial", "Industrial", "Interior fit-out", "Estimation only", "Other",
];

type FormState = {
  name: string; phone: string; email: string; projectType: string; message: string;
};

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-[#E2E1DC] text-[#1A1A1A] text-sm placeholder:text-[#BEBCB8] bg-white focus:outline-none focus:border-[#6B8C6B] focus:ring-2 focus:ring-[#6B8C6B]/15 transition-all";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Nexerra Infrastructure! I'm interested in your ${form.projectType || "construction"} services. My name is ${form.name || "..."} and I'd like to discuss a project.`
  );

  return (
    <section id="contact" className="py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Centered header ──────────────────── */}
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
              Contact Us
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight mb-4"
          >
            Tell us about{" "}
            <span className="sage-text">your project.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-5" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-base leading-relaxed font-light max-w-xl mx-auto"
          >
            We&apos;d love to hear about what you&apos;re building. Drop your details and
            one of our directors will personally call you back within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: info cards ─────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Info cards */}
            <motion.div variants={fadeUp} className="space-y-4">
              {/* Head Office */}
              <div className="flex items-start gap-4 bg-[#F5F4EF] border border-[#E2E1DC] border-l-2 border-l-[#6B8C6B]/50 rounded-lg px-5 py-4">
                <MapPin className="w-4 h-4 text-[#6B8C6B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#6B8C6B] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                    Head Office
                  </p>
                  <p className="text-[#1A1A1A] text-sm leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 bg-[#F5F4EF] border border-[#E2E1DC] border-l-2 border-l-[#6B8C6B]/50 rounded-lg px-5 py-4">
                <Phone className="w-4 h-4 text-[#6B8C6B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#6B8C6B] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                    Phone (Directors)
                  </p>
                  <div className="space-y-0.5">
                    {companyInfo.phones.map((p) => (
                      <p key={p.number} className="text-[#1A1A1A] text-sm">
                        {p.name} &mdash;{" "}
                        <a
                          href={`tel:${p.number.replace(/\s/g, "")}`}
                          className="hover:text-[#6B8C6B] transition-colors"
                        >
                          {p.number}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-[#F5F4EF] border border-[#E2E1DC] border-l-2 border-l-[#6B8C6B]/50 rounded-lg px-5 py-4">
                <Mail className="w-4 h-4 text-[#6B8C6B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#6B8C6B] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-[#1A1A1A] text-sm hover:text-[#6B8C6B] transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={fadeUp}
              className="mt-4 bg-[#F5F4EF] border border-[#E2E1DC] rounded-lg px-5 py-4"
            >
              <p className="font-bold text-[#1A1A1A] text-sm mb-3">Business Hours</p>
              <div className="space-y-2 text-sm mb-4">
                {[
                  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
                  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-[#5A5A5A]">
                    <span>{h.day}</span>
                    <span className="font-semibold text-[#1A1A1A]">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E2E1DC] pt-3 flex items-center gap-2 text-[#6B8C6B] text-sm font-semibold">
                <span className="w-2 h-2 bg-[#6B8C6B] rounded-full" />
                Available for urgent project calls
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: form ──────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="border border-[#E2E1DC] rounded-xl p-8 bg-[#F5F4EF]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#6B8C6B]/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-[#6B8C6B]/20">
                    <CheckCircle className="w-8 h-8 text-[#6B8C6B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Thank you!</h3>
                  <p className="text-[#5A5A5A] mb-6 text-sm leading-relaxed">
                    Your enquiry has been received. One of our directors will call you back within 24 hours.
                  </p>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#22c55e] transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continue on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
                        Your Name <span className="text-[#6B8C6B]">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required
                        placeholder="Full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
                        Phone <span className="text-[#6B8C6B]">*</span>
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={handleChange} required
                        placeholder="+91"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">Email</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Row 3: Project type pills */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2.5">
                      Project Type <span className="text-[#6B8C6B]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`px-4 py-1.5 rounded-lg border text-sm font-medium transition-all duration-150 ${form.projectType === type
                              ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                              : "bg-white text-[#3D3D3D] border-[#E2E1DC] hover:border-[#6B8C6B]/50"
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
                      Tell us about the project
                    </label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} rows={4}
                      placeholder="Location, scope, timeline — anything helpful."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white font-bold py-3.5 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Enquiry &rarr;</>
                    )}
                  </button>

                  <p className="text-center text-[#AEADAB] text-xs">
                    Your details stay with us — no spam, no third-party sharing.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
