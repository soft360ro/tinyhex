import React from "react";
import { motion } from "framer-motion";
import Logo from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const servicesLinks = [
  { label: "Custom Web Development", href: "#services" },
  { label: "Real Estate Platforms", href: "#services" },
  { label: "Mobile Applications", href: "#services" },
  { label: "Business Intelligence", href: "#services" },
  { label: "CRM Solutions", href: "#services" }
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Projects", href: "#projects" },
  { label: "Soft360 Platform", href: "https://soft360.ro" },
  { label: "Career Opportunities", href: "#" },
  { label: "Privacy Policy", href: "#" }
];

const contactInfo = [
  { icon: "fas fa-map-marker-alt", content: "Alba Iulia Square no. 10, Bucharest" },
  { icon: "fas fa-phone", content: "0213.117.847" },
  { icon: "fas fa-envelope", content: "office@tinyhex.ro" }
];

const socialLinks = [
  { icon: "fab fa-facebook-f", url: "#", label: "Facebook" },
  { icon: "fab fa-twitter", url: "#", label: "Twitter" },
  { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
  { icon: "fab fa-github", url: "#", label: "GitHub" }
];

const Footer: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thanks for subscribing!",
      description: "You've been added to our newsletter list."
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
      {/* Footer Wave Pattern */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L48,32C96,32,192,32,288,26.7C384,21,480,11,576,10.7C672,11,768,21,864,21.3C960,21,1056,11,1152,10.7C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <Logo className="mb-6" />
            <p className="text-white/80 mb-6">
              We specialize in developing custom software solutions tailored for real estate businesses looking to optimize operations, improve client experiences, and increase sales through digital innovation.
            </p>
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center text-white/80">
                  <div className="w-8 flex-shrink-0">
                    <i className={item.icon}></i>
                  </div>
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-6 text-accent">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-accent transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-6 text-accent">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-accent transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-lg mb-6 text-accent">Stay Connected</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates, industry insights, and real estate tech news.
            </p>
            <form className="mb-6" onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full sm:max-w-xs bg-white/10 text-white border-white/20 focus-visible:ring-accent"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url}
                    title={link.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <i className={link.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} TinyHEX. All rights reserved. | <a href="https://tinyhex.ro" className="hover:text-accent">tinyhex.ro</a>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/70 hover:text-accent text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-accent text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-accent text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
