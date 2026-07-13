"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { collections } from "../../data";

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-subheading tracking-[0.2em] text-primary uppercase mb-4"
          >
            Explore Categories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-dark"
          >
            Featured Collections
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${index === 4 ? 'col-span-2 md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className={`relative w-full ${index === 4 ? 'h-[200px] md:h-[400px]' : 'h-[200px] md:h-[500px]'}`}>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end text-white z-10">
                <h4 className="text-xl md:text-3xl font-heading font-bold mb-1 md:mb-2 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {collection.title}
                </h4>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 delay-100">
                  <p className="text-[10px] md:text-sm font-subheading text-gray-200 mb-2 md:mb-4 line-clamp-1 md:line-clamp-none">{collection.items.join(" • ")}</p>
                  <span className="inline-block border-b border-primary text-primary pb-0.5 md:pb-1 font-medium hover:text-white hover:border-white transition-colors text-xs md:text-base">
                    Explore Now
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
