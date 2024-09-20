"use client";
import { useState } from "react";
import Modal from "@/components/ui/Model";
import Project from "@/components/ui/Project";
import ContainerWidth from "@/components/ui/ContainerWidth";

const projects = [
  {
    title: "FreshCard",
    src: "fresh.png",
    subTitle: "E-Commerce",
    href: "https://fresh-cart-app-lemon.vercel.app/",
  },
  {
    title: "cinema-base",
    src: "movie1.png",
    subTitle: "Movies Website",
    href: "https://cinema-base-1.vercel.app/",
  },
  {
    title: "Recipe-Website",
    src: "rec.png",
    subTitle: "recipe website",
    href: "https://ziadalaa984.github.io/Yummy/",
  },
  {
    title: "AI",
    src: "AI.png",

    href: "https://al-landing-page.vercel.app/",
    subTitle: "LandingPage",
  },
  {
    title: "old-Portofolio",
    src: "oldPorto.png",

    href: "https://portofolioo-eight.vercel.app/",
    subTitle: "Portofolio",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <ContainerWidth>
      <main className="flex min-h-screen  py-36 flex-col justify-center">
        <h2
          id="Projects"
          className="xl:text-7xl text-4xl md:text-6xl   h-[15vh]  text-white  z-10 relative   font-bold"
        >
          My Projects.
        </h2>
        <div className=" w-full flex flex-col items-center justify-center">
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                href={project.href}
                src={project.src}
                title={project.title}
                setModal={setModal}
                key={index}
                subTitle={project.subTitle}
              />
            );
          })}
        </div>

        <Modal modal={modal} projects={projects} />
      </main>
    </ContainerWidth>
  );
}
