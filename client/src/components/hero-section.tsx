import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-r from-primary to-primary-light">
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <motion.div 
            className="lg:w-1/2 text-white mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {t("hero.title")} <br/> for <span className="text-accent">Real Estate</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold py-6 px-8 h-auto"
              >
                <span>{t("hero.getStarted")}</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const servicesSection = document.querySelector("#services");
                  servicesSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="border border-white/30 hover:bg-white/10 text-white font-semibold py-6 px-8 h-auto"
              >
                <span>{t("hero.ourServices")}</span>
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80" 
              alt="Real estate software platform" 
              className="rounded-xl shadow-2xl transform lg:translate-y-6 max-w-full h-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
