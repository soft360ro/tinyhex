import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "VIB Imobiliare", url: "https://vibimobiliare.ro" },
  { name: "Aqua City", url: "https://aquacity.ro" },
  { name: "Magnolia Residence", url: "https://magnoliaurbanresidence.ro" },
  { name: "Maia", url: "https://maia.ro" }
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-8 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-neutral-dark font-medium">Trusted by leading real estate companies</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {clients.map((client, index) => (
            <motion.a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display font-bold text-xl text-primary">
                {client.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
