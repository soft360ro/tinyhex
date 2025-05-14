import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const servicesLinks = [
    { label: "Web Development", href: "#services" },
    { label: "Real Estate Platforms", href: "#services" },
    { label: "Mobile Applications", href: "#services" },
    { label: "Business Intelligence", href: "#services" },
    { label: "CRM Solutions", href: "#services" }
  ];

  const companyLinks = [
    { label: t("footer.links.aboutUs"), href: "#about" },
    { label: t("footer.links.projects"), href: "#projects" },
    { label: t("footer.links.careers"), href: "#" },
    { label: t("footer.links.privacy"), href: "#" },
    { label: t("footer.links.terms"), href: "#" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-github", url: "#" }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: t("footer.invalidEmail"),
        description: t("footer.invalidEmailMessage"),
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: t("footer.subscribeSuccess"),
      description: t("footer.subscribeMessage")
    });
    
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-white/80 mb-6">
              {t("footer.about")}
            </p>
          </div>
          
          {/* Services Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">{t("footer.stayUpdated")}</h4>
            <p className="text-white/80 mb-4">{t("footer.newsletter")}</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.emailPlaceholder")}
                className="rounded-l-lg focus:outline-none text-gray-800 rounded-r-none focus-visible:ring-offset-0"
                required
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-4 rounded-l-none rounded-r-lg transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">© {new Date().getFullYear()} TinyHEX. {t("footer.rights")}</p>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url} 
                className="text-white/70 hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
