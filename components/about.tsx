/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInviwe } from "@/lib/hooks";
import portfolio from "@/public/portDesign.png";
import Image from "next/image";
import { ProblemsSites } from "@/lib/data";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInviwe("About", 0.7);
  return (
    <motion.section
      ref={ref}
      className="relative flex flex-col items-center  text-start leading-8 scroll-mt-28 font-mono text-clamp"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* <div className="bg-[#7984c4] absolute top-[5rem] -z-10 left-[-30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[25rem] xl:left-[-35rem] 2xl:left-[-40rem] dark:bg-[#173027]"></div> */}
      {/* <div className="bg-[#7984c4] absolute top-[5rem] -z-10 left-[-30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-50rem] xl:left-[-35rem] 2xl:left-[-40rem] dark:bg-[#173027]"></div> */}
      <div className=" absolute top-[10rem] left-[-6rem] md:left-[10rem] -z-10  h-[3.25rem] w-[30.25rem] rounded-full bg-gradient-to-r from-indigo-600 from-20% via-indigo-600 via-40% to-emerald-500 to-80%  blur-[6rem] sm:w-[50.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[100deg]"></div>

      <div className="md:flex hidden items-center  justify-center  leading-relaxed text-gray-700">
        <div className=" relative  ">
          <motion.div
          className="relative top-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portfolio}
              alt="Mostafa El Hawary"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className=" h-[12rem] w-[11rem] m-auto mb-8 rounded-full object-cover border-[0.35rem] border-[#7984c4] border-opacity-30  dark:border-[#0249383b] dark:border-opacity-90 shadow-xl"
            ></Image>
            <motion.span
              className="absolute bottom-10 right-1 text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>

      <p className="  !leading-[2] mb-28 mt-28 md:mb-0 text-gray-800 dark:text-gray-400 text-[14px] md:text-[16px]   ">
        After earning a degree in 
        <span className="underline ">law</span>,{" "}
        <br /> I made a decisive shift to follow my true passion—programming{" "}
        <br />I took a significant step by enrolling in a coding bootcamp , 
        <p></p>
        <br/>where I delved into the realm of{" "}
        <span className="font-medium underline"> full-stack web development </span>
        .<br />{" "}
        <span className="">What captivates me the most about programming </span>
        is the thrill of problem-solving .
        <p></p>
        <br /> I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem . 
        <br /> My journey includes tackling challenges on platforms like{" "}
        <span className="font-medium ">
          {ProblemsSites.map((Site, index) => (
            <Link
              href={Site.link}
              key={index}
              className=" dark:text-[#64ffda] text-indigo-800 text-clamp text-normal   font-mono  px-1 py-3 "
            >
              {Site.Name}
            </Link>
          ))}{" "}
           <p></p>
         <br/> where I showcase my problem-solving skills
        </span>{" "}
        <br /> I specialize in a core stack comprising{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB .
        </span>
        <p></p>
        <br /> Additionally, I'm well-versed in TypeScript and Express.js ,
       <br /> rounding out my toolkit for versatile and dynamic web development.{" "}
        <br />
      </p>
    </motion.section>
  );
}
