"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "Hello again! I am happy to see you here. My name is Ziad Alaa, 20 years old. I study at the Suez Canal University of Computers and Information, passionate about creating engaging user experiences and translating designs into functional websites and applications with creativity and expertise. Committed to staying updated with industry trends.";

export default function Home() {
  const refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

const createAnimation = () => {
  gsap.to(refs.current, {
    scrollTrigger: {
      trigger: container.current,
      scrub: true,
      start: "top center", // Start the animation when the top of the section hits the bottom of the viewport
      end: "center center", // End when the bottom of the section hits the top of the viewport
      onUpdate: (self) => {
        console.log(`Scroll Progress: ${self.progress.toFixed(2)}`);
      },
    },
    color: 'white', // The text will change to white during the scroll
    opacity: 1,
    ease: "none",
    stagger: 0.1,
  });
};


  const splitWords = (phrase: string) => {
    return phrase.split(" ").map((word, i) => (
      <p key={`${word}_${i}`} className="mr-[1vw] text-center tracking-tighter m-0 font-light text-xl md:text-[2.5vw] ">
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string) => {
    return word.split("").map((letter, i) => (
      <span
        key={`${letter}_${i}`}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
        className="opacity-20 transition-opacity duration-300 ease-in-out"
      >
        {letter}
      </span>
    ));
  };

  return (
          <main
      ref={container}
      
      className="flex mx-auto  flex-col items-center justify-center py-36  text-white"
    >
      <h2 id="About" className="xl:text-7xl text-4xl md:text-6xl py-10 text-white font-bold">
        About Me
      </h2>
      <div className="w-[90%] h-[40vh]  justify-center items-center  flex flex-wrap">
        {splitWords(phrase)}
      </div>
    </main>

  );
}
