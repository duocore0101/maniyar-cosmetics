"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { products } from "../../data";
import { useState } from "react";

export default function Products() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-subheading tracking-[0.2em] text-primary uppercase mb-4"
            >
              Premium Selection
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-text-dark"
            >
              Discover Luxury
            </motion.h3>
          </div>
          <motion.a
            href="https://wa.me/918446117199"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0 inline-flex items-center text-primary font-medium hover:text-accent transition-colors border-b border-primary hover:border-accent pb-1"
          >
            View All Products
          </motion.a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-8 sm:gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[120px] sm:h-[400px] w-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 mb-2 sm:mb-4">
                {product.isNew && (
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-text-dark text-white text-[8px] sm:text-xs font-bold uppercase tracking-wider py-0.5 px-2 sm:py-1 sm:px-3 rounded-full">
                    New
                  </div>
                )}
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm"
                >
                  <Heart className={`w-3 h-3 sm:w-5 sm:h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                <div className="relative w-full h-full p-2 sm:p-8">
                   <Image
                     src={product.image}
                     alt={product.name}
                     fill
                     className="object-contain p-2 sm:p-8 transition-transform duration-700 group-hover:scale-110"
                   />
                </div>
                {/* Hover overlay for Add to cart / Buy */}
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 flex justify-center">
                   <a href={`https://wa.me/918446117199?text=I'm%20interested%20in%20buying%20${product.name}`} target="_blank" rel="noreferrer" className="bg-white text-text-dark font-medium py-1.5 px-2 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors text-[10px] sm:text-sm w-full text-center">
                     Inquire <span className="hidden sm:inline">Now</span>
                   </a>
                </div>
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 sm:mb-2 gap-1 sm:gap-0">
                  <span className="text-[9px] sm:text-xs font-subheading text-gray-500 uppercase tracking-widest truncate">{product.category}</span>
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[#D4AF37]">
                    <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    <span className="text-[10px] sm:text-sm font-medium text-text-dark">{product.rating}</span>
                  </div>
                </div>
                <h4 className="text-xs sm:text-lg font-heading font-semibold text-text-dark mb-0.5 sm:mb-2 line-clamp-2 sm:line-clamp-1 leading-tight">{product.name}</h4>
                <p className="text-xs sm:text-base text-primary font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
