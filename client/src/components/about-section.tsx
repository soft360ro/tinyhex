import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const expertise = [
    "Web Development",
    "Mobile Applications",
    "UX/UI Design",
    "Real Estate Systems"
  ];

  const approach = [
    "Client-Centered",
    "Data-Driven",
    "Agile Methodology", 
    "Continuous Support"
  ];

  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* About Image */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80"
              alt="TinyHEX team at work"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
              {t("about.whoWeAre")}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">{t("about.title")}</h2>
            <p className="text-neutral-dark text-lg mb-6">
              {t("about.description1")}
            </p>
            <p className="text-neutral-dark text-lg mb-8">
              {t("about.description2")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">{t("about.expertise")}</h4>
                <ul className="space-y-2">
                  {expertise.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">{t("about.approach")}</h4>
                <ul className="space-y-2">
                  {approach.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                    >
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
