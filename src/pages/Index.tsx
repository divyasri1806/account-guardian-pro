import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import VisualizationSection from "@/components/VisualizationSection";
import TechSection from "@/components/TechSection";
import ResultsSection from "@/components/ResultsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <DemoSection />
    <VisualizationSection />
    <TechSection />
    <ResultsSection />
    <FooterSection />
  </div>
);

export default Index;
