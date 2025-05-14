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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">{t("testimonials.title")}</h2>
          <p className="text-neutral-dark text-lg">{t("testimonials.subtitle")}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-light p-8 rounded-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-accent opacity-20">
                <i className="fas fa-quote-right text-6xl"></i>
              </div>
              <p className="italic text-neutral-dark mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <i className="fas fa-user"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
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
