/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInviwe } from "@/lib/hooks";
import portfolio from "@/public/Portfolio2.png";
import Image from "next/image";
export default function About() {
  const { ref } = useSectionInviwe("About", 0.7);
  return (
    <motion.section
      ref={ref}
      className=" flex flex-col mb-28 max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex items-center justify-center">
        <div className="relative">
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
              className=" h-24 w-24 m-auto mb-8 rounded-full object-cover border-[0.35rem] border-white border-opacity-50 shadow-xl"
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

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">law</span>, I decided to pursue my passion
        for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Express.js .
      </p>
    </motion.section>
  );
}
