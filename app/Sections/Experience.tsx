"use client";
import ContainerWidth from "@/components/ui/ContainerWidth";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import React from "react";
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const Experience: FC = () => {
const techStack = [
    "React",
    "Next",
    "TypeScript",
    "Framer Motion",
    "HTML",
    "jQuery",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "shadcnUI",
    "JavaScript",
    "nextUI"
];
const paragraphs = [
    "Hey! I'm Ziad, a dedicated software engineer specializing in frontend development. I primarily work with Next.js and React.js to create dynamic and responsive websites.",
    "I am passionate about building user-centric interfaces and optimizing web performance. My freelance journey, which began in September 2023, has been complemented by valuable experiences, including a 3-month front-end training at Code Alpha, an internship at ITI",
    "I'm always open to new opportunities where I can blend my passion for technology with my creative skills. If you have an exciting project or position that you think I might be a good fit for, let's connect.",
];

  return (
    <div className="flex flex-col items-center gap-[20vw] ">
      <MaskText paragraphs={paragraphs} techStack={techStack} />
    </div>
  );
};

const MaskText: FC<{ paragraphs: string[], techStack: string[] }> = ({ paragraphs, techStack }) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  const animation = {
    initial: { y: "100%", opacity: 0 }, // Make sure the text is hidden initially
    enter: (i: number) => ({
      y: "0", 
      opacity: 1, // Fade-in with translation
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  return (
    <ContainerWidth>
      <div  className=" flex flex-col gap-6 py-36 ">
        <h2 id="Experience" className="xl:text-7xl text-4xl md:text-6xl py-10 font-bold">
          Experience
        </h2>
        <div ref={ref} className="grid grid-cols-4  gap-6">
          {/* Paragraph Section */}
          <div className="lg:col-span-3  col-span-4 flex flex-col gap-6">
            {paragraphs.map((text, index) => (
              <div key={index} className="overflow-hidden">
                <motion.p
                  custom={index}
                  variants={animation}
                  initial="initial"
                  animate={inView ? "enter" : "initial"} // Play animation when in view
                  className="xl:text-2xl text-lg md:text-xl font-medium"
                >
                  {text}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Tech Stack Section */}
          <div className="lg:col-span-1 col-span-4 flex flex-col gap-6">
            <h3 className="md:text-3xl text-2xl   font-semibold">My Tech Stack</h3>
            <ul className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={animation}
                  initial="initial"
                  animate={inView ? "enter" : "initial"} // Apply animation to each tech item
                >
                  <HoverBorderGradient>{tech}</HoverBorderGradient>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContainerWidth>
  );
};

export default Experience;
