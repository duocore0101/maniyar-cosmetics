"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./sections/LoadingScreen";
import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Trust from "./sections/Trust";
import About from "./sections/About";
import Collections from "./sections/Collections";
import Products from "./sections/Products";
import Bridal from "./sections/Bridal";
import Transformation from "./sections/Transformation";
import Reviews from "./sections/Reviews";
import Location from "./sections/Location";
import Footer from "./sections/Footer";
import FloatingButtons from "./FloatingButtons";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <main className="min-h-screen bg-background relative">
        <Navbar />
        <Hero />
        <Trust />
        <About />
        <Collections />
        <Products />
        <Bridal />
        <Transformation />
        <Reviews />
        <Location />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
}
