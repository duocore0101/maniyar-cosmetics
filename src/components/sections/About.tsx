"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/digital_transformation.png"
                alt="About Maniyar Cosmetics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-sm font-subheading tracking-[0.2em] text-primary uppercase">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-dark leading-tight">
              Beauty, Style & <span className="text-gradient-gold">Elegance</span> Under One Roof
            </h3>
            
            <div className="space-y-6 text-gray-700 font-subheading text-lg leading-relaxed">
              <p>
                Maniyar Cosmetics is one of Narayangaon's trusted beauty destinations, offering premium cosmetics, skincare, bangles, jewellery and bridal essentials at affordable prices.
              </p>
              <p>
                Known for excellent customer satisfaction, quality products and a huge variety, we have earned a perfect 5-star reputation among local customers. Our goal is to make luxury beauty accessible to everyone.
              </p>
            </div>
            
            <div className="pt-4 flex gap-6">
               <div className="border-l-2 border-primary pl-4">
                 <h4 className="text-3xl font-heading font-bold text-text-dark">16+</h4>
                 <p className="text-sm text-gray-500 font-medium">Years of Trust</p>
               </div>
               <div className="border-l-2 border-primary pl-4">
                 <h4 className="text-3xl font-heading font-bold text-text-dark">500+</h4>
                 <p className="text-sm text-gray-500 font-medium">Products</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
