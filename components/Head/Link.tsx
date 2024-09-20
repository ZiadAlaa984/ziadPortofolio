import NextLink from 'next/link'; // Renamed to avoid conflict with your component name
import { motion } from 'framer-motion';
import { scale, slide } from '@/lib/data';

// Define the props structure for the Link component
interface LinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Link({ data, isActive, setSelectedIndicator }: LinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute left-[-30px] w-[10px] h-[10px] bg-white rounded-full"
      ></motion.div>
      <NextLink href={`#${href}`}>{title}</NextLink>
    </motion.div>
  );
}
