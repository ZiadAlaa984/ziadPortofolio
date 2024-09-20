'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Nav from './Nav';

export default function Head() {
  const [isActive, setIsActive] = useState(false);
  const [isHeadVisible, setIsHeadVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsHeadVisible(true);
      } else {
        setIsHeadVisible(false);
      }
    };
    if (window.innerWidth <= 768) {
      setIsHeadVisible(true)
 }
    // Adding the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      {/* Toggle Button */}
      {isHeadVisible && (
        <motion.div
          initial={{ width: 0, height: 0,  scale: 0  }}
          animate={{ width: '80px', height: '80px' ,  scale: '100%'  }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setIsActive(!isActive)}
          className="rounded-full z-20 fixed right-6 top-6 bg-white cursor-pointer flex items-center justify-center"
        >
          <div className="relative w-[40px] h-[24px] flex flex-col justify-between">
            <span
              className={`block h-[3px] rounded-full bg-stone-950 transition-transform duration-300 ${
                isActive ? 'transform translate-y-[10px] rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-[3px] rounded-full bg-stone-950 transition-opacity duration-300 ${
                isActive ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-[3px] rounded-full bg-stone-950 transition-transform duration-300 ${
                isActive ? 'transform -translate-y-[10px] -rotate-45' : ''
              }`}
            ></span>
          </div>
        </motion.div>
      )}

      {/* Navigation Menu */}
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  );
}
