"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        href="tel:+918446117199"
        className="w-14 h-14 bg-text-dark text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: "spring" }}
        href="https://wa.me/918446117199?text=Hello%20Maniyar%20Cosmetics,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
