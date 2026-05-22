import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import WhoWeServe from "@/components/WhoWeServe";
import Presence from "@/components/Presence";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import ProjectGallery from "@/components/ProjectGallery";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ProjectCTA from "@/components/ProjectCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <Services />
      <WhoWeServe />
      <Capabilities />
      <Presence />
      {/* <WhyChooseUs /> */}
      <Projects />
      {/* <ProjectGallery /> */}
      <Team />
      <Testimonials />
      <ProjectCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
