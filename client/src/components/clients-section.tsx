import React from "react";
import { motion } from "framer-motion";

const clients = [
  { 
    name: "VIB Imobiliare", 
    url: "https://vibimobiliare.ro",
    logo: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8H15.5L21 32H15.5L10 8Z" fill="currentColor" />
        <path d="M25 8H30.5L35 32H29.5L25 8Z" fill="currentColor" />
        <path d="M39 8H48C55 8 55 32 48 32H39V8Z" fill="currentColor" />
        <path d="M66 8V13H73V19H66V27H79V32H60V8H66Z" fill="currentColor" />
        <path d="M81 8H87V32H81V8Z" fill="currentColor" />
        <path d="M91.5 8H99L110 18.5V8H116V32H109L98 19.5V32H91.5V8Z" fill="currentColor" />
      </svg>
    )
  },
  { 
    name: "Aqua City", 
    url: "https://aquacity.ro",
    logo: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H16L20 26H14L10 10Z" fill="currentColor" />
        <path d="M30 10L34 26H28L27 22H23L22 26H16L20 10H30ZM26.5 18L25.5 14L24.5 18H26.5Z" fill="currentColor" />
        <path d="M35 10H41V20C41 20 41.5 22 43.5 22C45.5 22 46 20 46 20V10H52V20C52 20 51.5 28 43.5 28C35.5 28 35 20 35 20V10Z" fill="currentColor" />
        <path d="M55 10H61L65 26H59L55 10Z" fill="currentColor" />
        <path d="M71 10V15H78V16.5H71V21H79V26H65V10H71Z" fill="currentColor" />
        <path d="M84 10H93C100 10 100 26 93 26H84V10Z" fill="currentColor" />
        <path d="M102 10H110.5L111.5 20L114.5 10H120L114 30H109L108 20L105 30H100L102 10Z" fill="currentColor" />
      </svg>
    )
  },
  { 
    name: "Magnolia Residence", 
    url: "https://magnoliaurbanresidence.ro",
    logo: (
      <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7H16L20 16L24 7H30L20 33L10 7Z" fill="currentColor" />
        <path d="M35 7H41L45 33H39L35 7Z" fill="currentColor" />
        <path d="M60 7L64 23H58L57 19H53L52 23H46L50 7H60ZM56.5 15L55.5 11L54.5 15H56.5Z" fill="currentColor" />
        <path d="M70 7H76V17C76 17 76.5 19 78.5 19C80.5 19 81 17 81 17V7H87V17C87 17 86.5 25 78.5 25C70.5 25 70 17 70 17V7Z" fill="currentColor" />
        <path d="M95 7V12H102V13.5H95V18H103V23H89V7H95Z" fill="currentColor" />
        <path d="M104 7H110V20L117 7H123L114 23L123 33H116L110 25V33H104V7Z" fill="currentColor" />
        <path d="M124 7H130V33H124V7Z" fill="currentColor" />
        <path d="M134 7H141L152 17.5V7H158V33H151L140 20.5V33H134V7Z" fill="currentColor" />
      </svg>
    )
  },
  { 
    name: "Maia", 
    url: "https://maia.ro",
    logo: (
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H16L20 26H14L10 10Z" fill="currentColor" />
        <path d="M25 10H31L35 26H29L25 10Z" fill="currentColor" />
        <path d="M40 10H46L50 26H44L40 10Z" fill="currentColor" />
        <path d="M55 10H61L65 26H59L55 10Z" fill="currentColor" />
        <circle cx="25" cy="18" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-primary font-display font-semibold text-2xl mb-2">Our Trusted Partners</h3>
          <p className="text-neutral-dark font-medium">Leading real estate companies rely on our solutions</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 items-center">
          {clients.map((client, index) => (
            <motion.a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-dark hover:text-accent transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                {client.logo}
                <span className="font-medium text-sm mt-2 opacity-70">
                  {client.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
