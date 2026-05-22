import Link from "next/link";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "All Projects | Nexerra Infrastructure",
  description:
    "Explore the full portfolio of Nexerra Infrastructure — 40+ residential, commercial, and industrial projects across Maharashtra and Gujarat.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-[106px]">
        {/* Back button bar */}
        <div className="bg-[#F5F4EF] border-b border-[#E2E1DC] px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3D5E3D] hover:text-[#1A1A1A] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
        <Projects showAll />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
