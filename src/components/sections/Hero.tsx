"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
       <div className="absolute inset-0 z-0">
         <Image 
            src="/images/hero_bg.png"
            alt="Luxury Beauty Studio"
            fill
            className="object-cover object-center"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/95" />
       </div>

       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 md:mt-0">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col items-center mb-8"
         >
           <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 tracking-widest uppercase">Maniyar Cosmetics</h2>
           <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card shadow-sm">
             <div className="flex text-[#D4AF37]">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
             </div>
             <span className="text-sm md:text-base font-medium text-text-dark tracking-wide">Rated 5.0 On Google • 16+ Happy Customers</span>
           </div>
         </motion.div>

         <motion.h1
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-text-dark mb-6 leading-[1.1] drop-shadow-sm"
         >
           Narayangaon's Trusted <br/><span className="text-gradient-gold">Beauty Destination</span>
         </motion.h1>

         <motion.p
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-lg md:text-xl lg:text-2xl font-subheading text-gray-800 mb-10 max-w-3xl mx-auto font-medium"
         >
           Premium cosmetics, jewellery, bangles and bridal essentials with trusted quality and affordable pricing.
         </motion.p>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
         >
           <a href="https://wa.me/918446117199?text=Hello%20Maniyar%20Cosmetics,%20I%20would%20like%20to%20know%20more%20about%20your%20products." target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-medium flex items-center justify-center gap-2 hover-lift shadow-xl hover:shadow-[#25D366]/40 transition-all text-lg">
             <MessageCircle className="w-6 h-6" /> Chat On WhatsApp
           </a>
           <a href="tel:+918446117199" className="w-full sm:w-auto px-8 py-4 bg-text-dark text-white rounded-full font-medium flex items-center justify-center gap-2 hover-lift shadow-xl hover:shadow-black/20 transition-all text-lg">
             <Phone className="w-6 h-6" /> Call Now
           </a>
         </motion.div>
       </div>
    </section>
  );
}
