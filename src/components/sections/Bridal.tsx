"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Bridal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="bridal" className="py-32 relative overflow-hidden bg-black text-white">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/bridal_showcase.png"
          alt="Luxury Bridal Beauty"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      {/* Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
           {Array.from({ length: 15 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/60 shadow-[0_0_10px_#D4AF37]"
               style={{
                 left: `${Math.random() * 100}vw`,
                 top: `${Math.random() * 100}vh`,
               }}
               initial={{
                 scale: Math.random() * 0.5 + 0.5,
                 opacity: Math.random() * 0.5 + 0.2,
               }}
               animate={{
                 y: [0, Math.random() * -200 - 100],
                 x: [0, Math.random() * 100 - 50],
               }}
               transition={{
                 duration: Math.random() * 5 + 5,
                 repeat: Infinity,
                 ease: "linear"
               }}
             />
           ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-subheading tracking-[0.3em] text-primary uppercase">Bridal Collection</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
          >
            Everything A Bride Needs <br/><span className="text-gradient-gold font-style-italic">Under One Roof</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-subheading text-gray-300 mb-10 leading-relaxed max-w-xl"
          >
            From premium bridal beauty essentials to exquisite jewellery, bangles, and accessories, we help you shine on your special day with our exclusive Suhag Collection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
             <a href="https://wa.me/918446117199?text=Hello%20Maniyar%20Cosmetics,%20I%20am%20looking%20for%20bridal%20essentials." target="_blank" rel="noreferrer" className="inline-block px-10 py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-300 tracking-wide">
               Explore Bridal Collection
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
