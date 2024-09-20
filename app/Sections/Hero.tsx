"use client";
import ContainerWidth from "@/components/ui/ContainerWidth";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import FramerMagnetic from "../../components/ui/Framer";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function Hero() {
  const words = `              I create dynamic and beautiful web pages using modern
              technologies. With a passion for coding and design, I strive to
              deliver seamless user experiences. Let's bring your ideas to life!`;
  const Name = [
    {
      text: "Hi,",
    },
    {
      text: "Ziad",
    },
    {
      text: "Alaa",
    },
  ];
  return (
    <ContainerWidth>
      <div id="Home" className="text-[5vw] font-bold">
        <div className="grid-cols-4 grid py-36">
          <div className="md:col-span-3 col-span-4 flex flex-col  md:gap-6">
            <div className="flex gap-6  items-center">
              <TypewriterEffectSmooth words={Name} />
              <FramerMagnetic >

                <Button className="  rounded-full cursor-pointer flex justify-center items-center text-white xl:text-lg font-light text-base  text-wrap border shadow-stone-950 bg-transparent hover:bg-stone-950 transition-all duration-300 border-stone-900  ">
                  <Link href={"https://flowcv.com/resume/rp9g5omhik"} target="_blank">
                    Resume
                    </Link>
                </Button>
              </FramerMagnetic>
            </div>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3.5,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className=" xl:text-9xl md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-r py-2 md:p-0 from-stone-200 via-stone-400 to-stone-600   font-bold capitaliz"
            >
              Front-End Dev.
            </motion.h1>
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </div>
    </ContainerWidth>
  );
}
