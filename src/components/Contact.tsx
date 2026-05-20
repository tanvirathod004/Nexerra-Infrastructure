"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

type FormState = {
  name: string; phone: string; email: string; service: string; message: string;
};

const services = [
  "RCC Contracting", "Residential Construction", "Commercial Construction",
  "Industrial Construction", "Interior Works", "Turnkey Solutions",
  "Estimation & Costing", "Construction Management", "Other",
];

const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E2E1DC] text-[#1A1A1A] text-sm placeholder:text-[#AEADAB] bg-white focus:outline-none focus:border-[#6B8C6B] focus:ring-2 focus:ring-[#6B8C6B]/15 transition-all";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Nexerra Infrastructure! I'm interested in your ${form.service || "construction"} services. My name is ${form.name || "..."} and I'd like to discuss a project.`
  );

  return (
    <section id="contact" className="py-28 overflow-hidden" style={{ background: "#F5F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────── */}
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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5 leading-tight"
          >
            Let&apos;s Build Something{" "}
            <span className="sage-text">Incredible Together</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="sage-divider mx-auto mb-6" />
          <motion.p
            variants={fadeUp}
            className="text-[#5A5A5A] text-lg max-w-2xl mx-auto font-light"
          >
            Ready to start your construction journey? Reach out for a free consultation and quotation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Left: contact info ─────────────── */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Info card */}
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2"
                style={{ background: "radial-gradient(circle, rgba(107,140,107,0.1) 0%, transparent 70%)" }}
              />
              <h3 className="text-xl font-bold mb-6 relative">Contact Information</h3>

              <div className="flex items-start gap-4 mb-5 relative">
                <div className="w-10 h-10 bg-[#6B8C6B]/20 border border-[#6B8C6B]/25 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#8FBB8F]" />
                </div>
                <div>
                  <div className="text-[#8FBB8F] font-semibold text-sm mb-1">Office Address</div>
                  <div className="text-white/65 text-sm leading-relaxed">{companyInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5 relative">
                <div className="w-10 h-10 bg-[#6B8C6B]/20 border border-[#6B8C6B]/25 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#8FBB8F]" />
                </div>
                <div>
                  <div className="text-[#8FBB8F] font-semibold text-sm mb-1">Email Us</div>
                  <a href={`mailto:${companyInfo.email}`} className="text-white/65 text-sm hover:text-white transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="w-10 h-10 bg-[#6B8C6B]/20 border border-[#6B8C6B]/25 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#8FBB8F]" />
                </div>
                <div>
                  <div className="text-[#8FBB8F] font-semibold text-sm mb-2">Call Us</div>
                  <div className="space-y-2">
                    {companyInfo.phones.map((p) => (
                      <div key={p.name}>
                        <div className="text-white/35 text-xs">{p.name}</div>
                        <a href={`tel:${p.number.replace(/\s/g, "")}`} className="text-white/75 text-sm font-semibold hover:text-white transition-colors">
                          {p.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#22c55e] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/25 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm">Get an instant response from our team</div>
              </div>
            </a>

            {/* Business hours */}
            <div className="bg-white border border-[#E2E1DC] rounded-2xl p-6">
              <h4 className="font-bold text-[#1A1A1A] mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
                  { day: "Sunday",            time: "10:00 AM – 2:00 PM" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-[#5A5A5A]">
                    <span>{h.day}</span>
                    <span className="font-semibold text-[#1A1A1A]">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E1DC]">
                <div className="flex items-center gap-2 text-[#6B8C6B] text-sm font-semibold">
                  <span className="w-2 h-2 bg-[#6B8C6B] rounded-full pulse-sage" />
                  Available for urgent project calls
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ────────────────────── */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-white rounded-2xl border border-[#E2E1DC] p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#6B8C6B]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#6B8C6B]/20">
                    <CheckCircle className="w-10 h-10 text-[#6B8C6B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Thank You!</h3>
                  <p className="text-[#5A5A5A] mb-6 leading-relaxed">
                    Your inquiry has been received. Our team will contact you within 24 hours
                    with a personalized quote and consultation.
                  </p>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#22c55e] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continue on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Request a Free Quote</h3>
                  <p className="text-[#5A5A5A] text-sm mb-8 font-light">
                    Fill out the form below and our experts will get back to you within 24 hours
                    with a detailed quote and consultation.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">Phone Number *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">Service Required *</label>
                      <select name="service" value={form.service} onChange={handleChange} required className={inputClass}>
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">Project Details *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required rows={4}
                        placeholder="Describe your project — location, approximate area, timeline, budget range, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#6B8C6B] hover:bg-[#3D5E3D] text-white font-bold py-4 rounded-xl text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#6B8C6B]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Inquiry &amp; Get Free Quote
                        </>
                      )}
                    </button>

                    <p className="text-center text-[#AEADAB] text-xs">
                      We typically respond within 2–4 business hours. Your information is 100% confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
