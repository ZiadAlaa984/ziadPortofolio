import ContainerWidth from "@/components/ui/ContainerWidth";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="border-b  w-full  border-stone-900">
      <ContainerWidth>
      <div className="flex  justify-between  text-white mx-auto   items-center ">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-400 to-stone-600 font-bold">Ziad</h1>
        <ul className="lg:flex justify-between hidden items-center gap-6">
          <li className="text-xl font-medium">
            <Link href="#Home">Home</Link>
          </li>
          <li className="text-xl font-medium">
            <Link href="#About">About</Link>
          </li>
          <li className="text-xl font-medium">
            <Link href="#Projects">Projects</Link>
          </li>
          <li className="text-xl font-medium">
            <Link href="#Experience">Experience</Link>
          </li>
          <li className="text-xl font-medium">
            <Link href="#Contact">Contact</Link>
          </li>
        </ul>
      </div>
      </ContainerWidth>
    </div>
  );
}
