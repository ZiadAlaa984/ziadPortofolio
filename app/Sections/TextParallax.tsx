'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../framer.svg';
import Picture2 from '../next.svg';
import Picture3 from '../tailwind.svg';
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface SlideProps {
  src: string; // The source of the image
  direction: 'left' | 'right'; // Direction of the slide
  left: string; // Any additional data you want to pass (consider renaming for clarity)
  progress:any
}

interface PhraseProps {
  src: string; // or you could use StaticImageData if using imported images
}

export default function TextParallax() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <main className="overflow-hidden">
      <div className='xl:h-[30vh] h-[10vh]' />
      <div ref={container}>
        <Slide src={Picture1} direction={'left'} left={'-40%'} progress={scrollYProgress} />
        <Slide src={Picture2} direction={'right'} left={'-25%'} progress={scrollYProgress} />
        <Slide src={Picture3} direction={'left'} left={'-75%'} progress={scrollYProgress} />
      </div>
      <div className='xl:h-[30vh] h-[10vh]' />
    </main>
  );
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
  const translateX = useTransform(progress, [0, 1], direction === 'left' ? [150, -150] : [-150, 150]);

  return (
    <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw] text-white">Front End Developer</p>
      <span className="relative md:h-[8.5vw] h-[15vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
