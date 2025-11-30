import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlowchartSection from "@/components/FlowchartSection";
import SystemsSection from "@/components/SystemsSection";
import MembershipFormDemo from "@/components/MembershipFormDemo";
import TechnologySection from "@/components/TechnologySection";
import SecuritySection from "@/components/SecuritySection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FlowchartSection />
      <SystemsSection />
      <MembershipFormDemo />
      <TechnologySection />
      <SecuritySection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
