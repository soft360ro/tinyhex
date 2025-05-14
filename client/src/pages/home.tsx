import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ClientsSection from "@/components/clients-section";
import ServicesSection from "@/components/services-section";
import ProductSpotlight from "@/components/product-spotlight";
import ProjectsShowcase from "@/components/projects-showcase";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <ProductSpotlight />
      <ProjectsShowcase />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
