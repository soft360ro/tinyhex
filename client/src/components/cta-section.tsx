import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">{t("cta.title")}</h2>
          <p className="text-white/90 text-lg">
            {t("cta.subtitle")}
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-accent hover:bg-accent/90 text-primary font-semibold py-6 px-8 h-auto"
          >
            <span>{t("cta.button")}</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
