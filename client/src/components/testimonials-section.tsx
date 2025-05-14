import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    quote: "TinyHEX understood our unique needs as a real estate developer. The custom platform they created has streamlined our sales process and improved client engagement significantly.",
    name: "Alexandra Popescu",
    title: "Marketing Director, Aqua City"
  },
  {
    quote: "Working with TinyHEX has been transformative for our agency. The integrated CRM and website solution has saved us time, increased lead conversion, and provided valuable analytics.",
    name: "Mihai Ionescu",
    title: "CEO, VIB Imobiliare"
  }
];

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            {t("testimonials.label")}
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">{t("testimonials.title")}</h2>
          <p className="text-neutral-dark text-lg">{t("testimonials.subtitle")}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-neutral-medium relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/5 rounded-full"></div>
              
              <div className="absolute top-6 right-6 text-accent opacity-30">
                <i className="fas fa-quote-right text-5xl"></i>
              </div>
              
              <p className="italic text-neutral-dark mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <i className="fas fa-user"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-dark">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
