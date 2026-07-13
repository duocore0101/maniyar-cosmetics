"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="text-center relative z-10">
         <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative inline-block overflow-hidden py-4"
         >
           <h1 className="text-4xl md:text-6xl font-heading font-bold text-[#D4A373] tracking-wider relative z-10">
             MANIYAR
           </h1>
           <p className="text-sm md:text-lg font-subheading tracking-[0.3em] text-[#D4AF37] mt-2 uppercase relative z-10">
             Cosmetics
           </p>
           
           {/* Shimmer effect */}
           <motion.div
             className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] z-20"
             initial={{ left: "-100%" }}
             animate={{ left: "200%" }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
           />
         </motion.div>
      </div>
      
      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
           {Array.from({ length: 20 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4A373]/40"
               style={{
                 left: `${Math.random() * 100}vw`,
                 top: `${Math.random() * 100}vh`,
               }}
               initial={{
                 opacity: Math.random() * 0.5 + 0.3,
               }}
               animate={{
                 y: [0, Math.random() * -100 - 50],
                 opacity: [Math.random() * 0.5 + 0.3, 0],
               }}
               transition={{
                 duration: Math.random() * 2 + 2,
                 repeat: Infinity,
                 ease: "easeOut"
               }}
             />
           ))}
        </div>
      )}
    </motion.div>
  );
}
