"use client";
import ContainerWidth from "@/components/ui/ContainerWidth";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import React from "react";
import { motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

const Experience: FC = () => {
  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Framer Motion",
    "HTML/HTML5",
    "jQuery",
    "CSS/CSS3",
    "Tailwind",
    "Bootstrap",
    "shadcnUI",
    "nextUI",
    "TanStackQuery",
    "Node.js",
    "Express.js",
    "RizzUI",
  ];
  const paragraphs = [
    "I am currently working at inCode as a Front-End Developer since February 1, 2025. My work involves developing dashboards and fixing bugs. I specialize in building scalable web applications using React.js and Next.js, with a strong focus on performance and user experience. I also handle change requests efficiently to ensure smooth updates and optimal functionality.",

    "I completed a Front-End Development course with a focus on React.js and Next.js at Route Academy.",

    "I completed a Front-End Development course at the Information Technology Institute (ITI).",

    "I also took a Back-End Development course on Udemy to strengthen my full-stack skills.",
  ];

  return (
    <div className="flex flex-col items-center gap-[20vw] ">
      <MaskText paragraphs={paragraphs} techStack={techStack} />
    </div>
  );
};

const MaskText: FC<{ paragraphs: string[]; techStack: string[] }> = ({
  paragraphs,
  techStack,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const animation = {
    initial: { y: "100%", opacity: 0 }, // Make sure the text is hidden initially
    enter: (i: number) => ({
      y: "0",
      opacity: 1, // Fade-in with translation
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <ContainerWidth>
      <div className=" flex flex-col gap-6 py-36 ">
        <h2
          id="Courses & Experience"
          className="xl:text-7xl text-4xl md:text-6xl py-10 font-bold"
        >
          Courses & Experience
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
            <h3 className="md:text-3xl text-2xl   font-semibold">
              My Tech Stack
            </h3>
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
