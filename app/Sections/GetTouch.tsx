"use client";
import { Button } from "@/components/ui/button";
import ContainerWidth from "@/components/ui/ContainerWidth";
import React from "react";
import FramerMagnetic from "../../components/ui/Framer";
import Link from "next/link";

export default function GetTouch() {
  return (
    <ContainerWidth>
      <div className="pt-16 xl:py-36 pb-36 flex justify-center items-center  flex-col gap-6">
        <h2 id="Contact" className=" xl:text-7xl text-4xl md:text-6xl  font-bold">Get in Touch.</h2>
        <p className="xl:text-2xl text-lg md:text-xl font-medium max-w-3xl text-center">
          If you&apos;re interested in working together or have any questions, feel
          free to reach out. I&apos;m always open to new opportunities and
          collaborations. Let&apos;s create something amazing together!
        </p>
        <div className="flex justify-center mt-14 items-center">
          <FramerMagnetic>
            <Button className=" md:p-5 p-3 w-[200px] h-[200px] rounded-full cursor-pointer text-white text-2xl  text-wrap border shadow-stone-950 bg-transparent hover:bg-stone-950 transition-all duration-300 border-stone-900  ">
              <Link target="_blank" href="mailto:ziadalaa984@gmail.com">
                Contact With Me
                            </Link>
            </Button>
            
         </FramerMagnetic>

          
        </div>
      </div>
    </ContainerWidth>
  );
}
