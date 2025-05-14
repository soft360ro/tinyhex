import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const ProductSpotlight: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: "propertyMgmt",
      title: t("product.features.propertyMgmt.title"),
      description: t("product.features.propertyMgmt.description")
    },
    {
      key: "marketing",
      title: t("product.features.marketing.title"),
      description: t("product.features.marketing.description")
    },
    {
      key: "website",
      title: t("product.features.website.title"),
      description: t("product.features.website.description")
    },
    {
      key: "clientMgmt",
      title: t("product.features.clientMgmt.title"),
      description: t("product.features.clientMgmt.description")
    }
  ];

  return (
    <section className="py-20 bg-neutral-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Product Image */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80" 
              alt="Soft360 platform interface" 
              className="rounded-xl shadow-xl max-w-full h-auto" 
            />
          </motion.div>
          
          {/* Product Content */}
          <motion.div 
            className="lg:w-1/2 lg:pl-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
              {t("product.mainProduct")}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">{t("product.title")}</h2>
            <p className="text-neutral-dark text-lg mb-8">
              {t("product.description")}
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.key}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-neutral-dark">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button
                asChild
                className="bg-primary hover:bg-primary-light text-white font-semibold h-auto py-3 px-8"
              >
                <a href="https://soft360.ro" target="_blank" rel="noopener noreferrer">
                  <span>{t("product.cta")}</span>
                  <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
