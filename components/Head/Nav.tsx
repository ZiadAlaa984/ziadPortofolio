import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from './Link';
import Curve from './Curve';
import { menuSlide } from '@/lib/data';
const navItems = [
  {
    title: "Home",
    href: "Home",
  },
  {
    title: "About",
    href: "About",
  },
  {
    title: "Projects",
    href: "Projects",
  },
  {
    title: "Experience",
    href: "Experience",
  },
  {
    title: "Contact",
    href: "Contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="fixed right-0 top-0 z-[15] h-screen bg-stone-950 text-white">
      <div className="box-border h-full p-24 flex flex-col justify-between">
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className="flex flex-col md:text-[56px] text-3xl gap-3 md:gap-12 mt-20">
          <div className="text-[#999] border-b border-[#999] uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator} />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
