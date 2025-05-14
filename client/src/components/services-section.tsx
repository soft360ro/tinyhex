import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: "fas fa-laptop-code",
      key: "webDev",
      title: t("services.items.webDev.title"),
      description: t("services.items.webDev.description")
    },
    {
      icon: "fas fa-building",
      key: "platforms",
      title: t("services.items.platforms.title"),
      description: t("services.items.platforms.description")
    },
    {
      icon: "fas fa-mobile-alt",
      key: "mobile",
      title: t("services.items.mobile.title"),
      description: t("services.items.mobile.description")
    },
    {
      icon: "fas fa-chart-line",
      key: "bi",
      title: t("services.items.bi.title"),
      description: t("services.items.bi.description")
    },
    {
      icon: "fas fa-tachometer-alt",
      key: "crm",
      title: t("services.items.crm.title"),
      description: t("services.items.crm.description")
    },
    {
      icon: "fas fa-sync",
      key: "integration",
      title: t("services.items.integration.title"),
      description: t("services.items.integration.description")
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">{t("services.title")}</h2>
          <p className="text-neutral-dark text-lg">{t("services.subtitle")}</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-neutral-medium hover:border-accent"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-neutral-dark">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
