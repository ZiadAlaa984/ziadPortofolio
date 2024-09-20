import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from './images/movie1.png';
import img2 from './images/rec.png';
import img3 from './images/AI.png';
import img4 from './images/oldPorto.png';
import img0 from './images/fresh.png';
import { StaticImageData } from 'next/image';

interface Project {
  src: string;
  href: string;
}

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Project[];
}

// Mapping of image filenames to imported images with the correct type
const imageMap: Record<string, StaticImageData> = {
  'fresh.png': img0,
  'movie1.png': img1,
  'rec.png': img2,
  'AI.png': img3,
  'oldPorto.png': img4,
};

// Rest of your component logic...

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function   Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      setCursorPosition({ x: pageX, y: pageY });
      setContainerPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute hidden md:flex h-[350px] w-[400px] bg-white overflow-hidden  items-center justify-center pointer-events-none"
        style={{
          left: containerPosition.x,
          top: containerPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {projects.map((project, idx) => {
            const imgSrc = imageMap[project.src] || img1; // Default to img1 if src is not found

            return (
             <div
                key={`modal_${idx}`}
                className="flex items-center bg-white justify-center h-full w-full"
              >

                <Image
                  src={imgSrc}
                  className="object-cover w-[90%] h-[80%]"

                  alt={`Project Image ${idx}`}
                  />

              </div>
            );
                })}
        </div>
      </motion.div>


            <motion.div
        
        className="absolute hidden md:flex z-20 w-20 h-20 rounded-full bg-opacity-90 bg-stone-950 text-white  items-center justify-center pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      ></motion.div>


      <motion.div
        className="absolute hidden md:flex z-20 w-20 h-20 rounded-full bg-transparent text-white  items-center justify-center pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
       
           View 
         
      </motion.div>

    </>
  );
}
