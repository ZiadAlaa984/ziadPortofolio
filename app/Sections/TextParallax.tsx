'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../framer.svg';
import Picture2 from '../next.svg';
import Picture3 from '../tailwind.svg';
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Define props types for Slide and Phrase components
interface SlideProps {
  src: string;
  direction: 'left' | 'right';
  left: string;
  progress: any; // You can refine this type further if needed
}

interface PhraseProps {
  src: string;
}

export default function TextParallax() {
  const container = useRef<HTMLDivElement | null>(null); // Specify ref type
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
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
      <div className='h-[10vh]' />
      <div ref={container}>
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress} />
        <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress} />
        <Slide src={Picture3} direction={'left'} left={"-75%"} progress={scrollYProgress} />
      </div>
      <div className='h-[10vh]' />
    </main>
  );
}

const Slide: React.FC<SlideProps> = (props) => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);

  return (
    <motion.div style={{ x: translateX, left: props.left }} className="relative flex whitespace-nowrap">
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw] text-white'>Front End Developer</p>
      <span className="relative h-[10vw] md:h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "contain" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
