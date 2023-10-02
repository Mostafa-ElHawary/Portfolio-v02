/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInviwe } from "@/lib/hooks";
import portfolio from "@/public/portDesign.png";
import Image from "next/image";
export default function About() {
  const { ref } = useSectionInviwe("About", 0.7);
  return (
    <motion.section
      ref={ref}
      className="relative flex flex-col items-center  text-center leading-8 scroll-mt-28 font-mono text-clamp"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* <div className="bg-[#7984c4] absolute top-[5rem] -z-10 left-[-30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[25rem] xl:left-[-35rem] 2xl:left-[-40rem] dark:bg-[#173027]"></div> */}
      {/* <div className="bg-[#7984c4] absolute top-[5rem] -z-10 left-[-30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-50rem] xl:left-[-35rem] 2xl:left-[-40rem] dark:bg-[#173027]"></div> */}

      <div className="flex items-center justify-center leading-relaxed text-gray-700">
        <div className=" relative  ">
          <motion.div
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
              quality="70"
              priority={true}
              className=" h-24 w-24 m-auto mb-8 rounded-full object-cover border-[0.35rem] border-[#7984c4] border-opacity-50  dark:border-[#0249383b] dark:border-opacity-90 shadow-xl"
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

      <p className="mb-3 font-semibold !leading-[2]  text-gray-800 dark:text-gray-400">
        After graduating with a degree in{" "}
        <span className="underline ">law</span>, <br />  I decided to pursue my passion
        for programming. <br />  I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium underline">full-stack web development</span>.<br /> {" "}
        <span className="">My favorite part of programming</span> is the
        problem-solving aspect. <br />  I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.<br />  My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . <br /> I am also familiar with TypeScript and Express.js .
      </p>
    </motion.section>
  );
}
