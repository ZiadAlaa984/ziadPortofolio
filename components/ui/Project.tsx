'use client';
import React from 'react';
import img1 from './images/movie1.png';
import img2 from './images/rec.png';
import img3 from './images/AI.png';
import img4 from './images/oldPorto.png';
import img0 from './images/fresh.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  index: number;
  title: string;
  subTitle: string;
  src: string;
  href: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
}

// Mapping of image filenames to imported images
const imageMap: Record<string, StaticImageData> = {
  'fresh.png': img0,
  'movie1.png': img1,
  'rec.png': img2,
  'AI.png': img3,
  'oldPorto.png': img4,
};

export default function Project({ index, title, setModal, subTitle, href, src }: ProjectProps) {
  // Dynamically resolve the image source
  const imgSrc = imageMap[src] || img1; // Fallback to img1 if src is not found in the map
  
  return (
    <Link
      target='_blank'
      href={`${href}`}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full justify-between flex-col gap-3 md:flex-row transition-all duration-300 hover:bg-white/5 items-center md:p-12 p-4 border-t border-stone-900 cursor-pointer last:border-b hover:opacity-50"
    >
      {/* Dynamically render the correct image */}
      <Image src={imgSrc} className='h-[200px] md:hidden object-contain' alt={`${title} image`} />
      
      <h2 className="xl:text-[60px] text-2xl m-0 text-white font-normal transition-transform duration-400 hover:translate-x-[-10px]">
        {title}
      </h2>
     
      <p className="font-light text-white transition-transform duration-400 hover:translate-x-[10px]">
        {subTitle}
      </p>
    </Link>
  );
}
