import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "VIB Imobiliare",
    url: "https://vibimobiliare.ro",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350&q=80",
    description: "A complete real estate agency platform with integrated listing management, client tracking, and marketing tools.",
    tags: ["Web Development", "CRM Integration", "Property Management"]
  },
  {
    name: "Aqua City",
    url: "https://aquacity.ro",
    image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350&q=80",
    description: "Custom digital platform for a large residential development, featuring interactive building selection and unit availability.",
    tags: ["Interactive Maps", "Sales Portal", "Client Dashboard"]
  },
  {
    name: "Magnolia Urban Residence",
    url: "https://magnoliaurbanresidence.ro",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350&q=80",
    description: "Modern website with 3D tours, apartment configurator, and integrated reservation system for a new urban development.",
    tags: ["3D Visualization", "Booking System", "Payment Integration"]
  },
  {
    name: "Maia",
    url: "https://maia.ro",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350&q=80",
    description: "Multi-project platform for a major developer, with centralized management of multiple residential developments.",
    tags: ["Portfolio Management", "Lead Distribution", "Analytics Dashboard"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const ProjectsShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Our Client Projects</h2>
          <p className="text-neutral-dark text-lg">Discover how we've helped real estate businesses transform their digital presence and operations.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-neutral-medium"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={`${project.name} website`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary hover:bg-accent hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">{project.name}</h3>
                <p className="text-neutral-dark mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-neutral-light text-neutral-dark rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-accent hover:text-accent-secondary font-semibold inline-flex items-center transition-colors"
          >
            <span>Ready to start your project?</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
