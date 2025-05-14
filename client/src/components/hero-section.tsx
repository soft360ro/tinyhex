import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
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
            <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Technology for Real Estate
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Custom Software <br/> 
              <span className="text-accent">Transforming</span> Real Estate
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8">
              We create tailored digital solutions that help real estate businesses manage listings, streamline operations, and deliver exceptional client experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold py-6 px-8 h-auto"
              >
                <span>Schedule Consultation</span>
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
                <span>Explore Solutions</span>
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
            <div className="relative">
              {/* Platform Screenshots */}
              <motion.div
                className="absolute -top-6 -left-16 z-10 rounded-xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                  alt="Real estate dashboard" 
                  className="w-64 h-auto"
                />
              </motion.div>
              
              {/* Main Image */}
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl bg-white p-1"
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80" 
                  alt="Real estate software platform" 
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              
              {/* Mobile App Image */}
              <motion.div
                className="absolute -bottom-10 -right-10 z-10 rounded-xl overflow-hidden shadow-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&h=500&q=80" 
                  alt="Real estate mobile app" 
                  className="w-48 h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
