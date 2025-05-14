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
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-white/80 mb-6 leading-relaxed">
              {t("footer.about")}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/80 flex items-center justify-center text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Services Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white/90">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-accent/70"></i>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white/90">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-accent/70"></i>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white/90">{t("footer.stayUpdated")}</h4>
            <p className="text-white/70 mb-4 leading-relaxed">{t("footer.newsletter")}</p>
            <form className="flex flex-col space-y-2" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder")}
                  className="rounded-l-lg focus:outline-none bg-white/10 border-transparent text-white placeholder:text-white/50 rounded-r-none focus-visible:ring-accent/50"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-accent hover:bg-accent-hover text-white font-semibold px-4 rounded-l-none rounded-r-lg transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">© {new Date().getFullYear()} TinyHEX. {t("footer.rights")}</p>
          <p className="text-white/60">
            <a href="mailto:office@tinyhex.ro" className="hover:text-accent">office@tinyhex.ro</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
