"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  id,
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollProgress, opacity: scrollOpacity }}
      className="elementCenter group   mb-3 sm:mb-8 last:mb-0 "
    >
      
      <Link
        href={link}
        key={id}
        target="_blank"
        className=" clampBut font-mono cursor-pointer  group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative   sm:h-[20rem] hover:bg-[#e6e9ff] transition group-even:pl-8 sm:group-even:pl-8 dark:text-white dark:bg-[#45575326] dark:bg-opacity-20 dark:hover:bg-[#02493867] "
      >
        <div className=" pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] text-start justify-center flex  flex-col h-full sm:group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold clampBut">{title}</h3>
          <p className=" mt-2 mb-5 leading-relaxed text-gray-700 dark:text-white/70 ">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={tag}
                className="border border-white  border-opacity-90  shadow-lg shadow-black/[0.03]  backdrop-blur-[0.5rem]  px-4 py-1 text-[0.7rem] uppercase tracking-wider text-gray-950 rounded-full dark:text-[#64ffda] dark:border-none"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        
              transition
    
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
    
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
    
                group-even:right-[initial]
                group-even:-left-40"
          />
        </div>
      </Link>
    </motion.div>
  );
}
