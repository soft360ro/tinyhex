import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScroll();
  const isScrolled = scrollY > 50;

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest("#mobile-menu") && !target.closest("#menu-toggle")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" }
  ];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.href}
                onClick={() => scrollToSection(link.href)} 
                className="font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary-light text-white"
            >
              Contact Us
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            id="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden py-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="font-medium text-gray-700 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="bg-primary hover:bg-primary-light text-white w-full"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
