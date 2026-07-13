"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Transformation() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-subheading tracking-[0.2em] text-primary uppercase mb-4"
          >
            Our Vision
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-dark"
          >
            From Trusted Local Store To <br className="hidden md:block"/> <span className="text-gradient-gold">Premium Online Brand</span>
          </motion.h3>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl glass-card border border-gray-100 p-2 md:p-4 bg-gray-50/50">
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[1.5rem] overflow-hidden">
             <Image 
                src="/images/digital_transformation.png"
                alt="Business Transformation"
                fill
                className="object-cover object-center"
             />
             
             {/* Center indicator */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center z-20">
                <ArrowRight className="text-primary w-8 h-8" />
             </div>
             
             {/* Labels */}
             <div className="absolute top-8 left-8 z-20">
               <div className="glass-card-dark px-4 py-2 text-white font-medium text-sm tracking-wide shadow-lg">
                 Local Store
               </div>
             </div>
             <div className="absolute top-8 right-8 z-20">
               <div className="glass-card bg-white/90 px-4 py-2 text-text-dark font-bold text-sm tracking-wide shadow-lg">
                 Luxury Digital Brand
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
