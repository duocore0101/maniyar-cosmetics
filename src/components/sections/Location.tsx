"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8"
            >
              Visit <span className="text-gradient-gold">Maniyar Cosmetics</span>
            </motion.h2>

            <div className="space-y-6 mb-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-text-dark">Store Location</h4>
                  <p className="text-gray-600 font-subheading mt-1">Muktai Mandir Bhaji Market, Near Attar Matching, Old Narayangaon, Maharashtra 410504</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-text-dark">Contact Us</h4>
                  <p className="text-gray-600 font-subheading mt-1">+91 84461 17199</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-text-dark">Opening Hours</h4>
                  <p className="text-gray-600 font-subheading mt-1">Open 24 Hours</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://maps.google.com/?q=Muktai+Mandir+Bhaji+Market+Old+Narayangaon" target="_blank" rel="noreferrer" className="flex-1 px-6 py-4 bg-text-dark text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary transition-colors">
                <Navigation className="w-5 h-5" /> Get Directions
              </a>
              <a href="tel:+918446117199" className="flex-1 px-6 py-4 border-2 border-text-dark text-text-dark rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-gray-100 relative">
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              {/* Fallback Map styling */}
              <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl max-w-sm">
                 <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                 <h3 className="font-heading font-bold text-xl text-text-dark mb-2">Maniyar Cosmetics</h3>
                 <p className="text-gray-500 text-sm mb-4">Old Narayangaon, Maharashtra</p>
                 <div className="flex justify-center text-[#D4AF37] mb-2">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                 </div>
                 <p className="text-xs font-bold text-text-dark">5.0 Rating</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
