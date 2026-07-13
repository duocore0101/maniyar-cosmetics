"use client";

import { motion } from "framer-motion";
import { Star, Users, Gem, Clock, Store, HeartHandshake } from "lucide-react";

const trustItems = [
  { icon: Star, title: "5.0 Google Rating", text: "Highly rated by our customers" },
  { icon: Users, title: "16+ Happy Customers", text: "Trusted by the community" },
  { icon: Gem, title: "500+ Beauty Products", text: "Huge variety of brands" },
  { icon: HeartHandshake, title: "Bridal Collection", text: "Everything a bride needs" },
  { icon: Store, title: "Trusted Local Store", text: "A legacy of trust" },
  { icon: Clock, title: "Open 24 Hours", text: "Always here for you" },
];

export default function Trust() {
  return (
    <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 glass-card hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-text-dark text-lg mb-2">{item.title}</h3>
              <p className="text-sm font-subheading text-gray-500">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
