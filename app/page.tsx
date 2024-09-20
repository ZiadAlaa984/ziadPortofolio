"use client";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Footer from "./Sections/Footer";
import GetTouch from "./Sections/GetTouch";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import TextParallax from "./Sections/TextParallax";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "@/components/ui/PreLoader";
import Head from "@/components/Head/page";
import Projects from "./Sections/Projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  (async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const scroll = new LocomotiveScroll();

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => {
      scroll.destroy(); // Clean up on unmount
    };
  })();
}, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Header />
      <Head />
      <Hero />
      <TextParallax />
      <About />
      <Experience />
      <Projects />
      <GetTouch />
      <Footer />
    </main>
  );
}
