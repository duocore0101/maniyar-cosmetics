"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.8 }} // Appears after loading screen
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex flex-col items-center">
            <span className={`font-heading font-bold tracking-widest text-2xl md:text-3xl transition-colors duration-300 ${scrolled ? 'text-text-dark' : 'text-text-dark md:text-text-dark'}`}>
              MANIYAR
            </span>
            <span className={`font-subheading tracking-[0.3em] text-[10px] md:text-xs uppercase transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary md:text-primary'}`}>
              Cosmetics
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-subheading text-sm font-medium hover:text-primary transition-colors text-text-dark">About</a>
            <a href="#collections" className="font-subheading text-sm font-medium hover:text-primary transition-colors text-text-dark">Collections</a>
            <a href="#bridal" className="font-subheading text-sm font-medium hover:text-primary transition-colors text-text-dark">Bridal</a>
            <a href="#reviews" className="font-subheading text-sm font-medium hover:text-primary transition-colors text-text-dark">Reviews</a>
            <a href="#contact" className="font-subheading text-sm font-medium hover:text-primary transition-colors text-text-dark">Location</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-xl"
        >
          <div className="flex flex-col px-4 py-6 gap-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-subheading text-text-dark text-lg font-medium py-2 border-b border-gray-50">About Us</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="font-subheading text-text-dark text-lg font-medium py-2 border-b border-gray-50">Collections</a>
            <a href="#bridal" onClick={() => setMobileMenuOpen(false)} className="font-subheading text-text-dark text-lg font-medium py-2 border-b border-gray-50">Bridal Collection</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="font-subheading text-text-dark text-lg font-medium py-2 border-b border-gray-50">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-subheading text-text-dark text-lg font-medium py-2">Location & Contact</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
