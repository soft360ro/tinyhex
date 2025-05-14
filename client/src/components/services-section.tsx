import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Custom Web Development",
    description: "Tailored websites and web applications built specifically for real estate agencies and developers."
  },
  {
    icon: "fas fa-building",
    title: "Real Estate Platforms",
    description: "Advanced property management systems to streamline listings, client interactions, and sales processes."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Applications",
    description: "Mobile solutions for real estate professionals and their clients to access properties on the go."
  },
  {
    icon: "fas fa-chart-line",
    title: "Business Intelligence",
    description: "Data analytics and reporting tools to provide insights and help make data-driven decisions."
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "CRM Solutions",
    description: "Customer relationship management systems designed specifically for real estate customer journeys."
  },
  {
    icon: "fas fa-sync",
    title: "Integration Services",
    description: "Seamless integration with existing systems and third-party services for a unified workflow."
  }
];

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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Our Specialized Services</h2>
          <p className="text-neutral-dark text-lg">We deliver customized software solutions to help real estate businesses thrive in the digital landscape.</p>
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
              key={index}
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
