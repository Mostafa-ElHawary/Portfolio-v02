/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInviwe } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInviwe("Skills");

  return (
    <section
    id="skills"
    ref={ref}
    className="  flex flex-col relative items-center  justify-center h-[80vh]  text-center  mr-[1rem]   ml-[1rem] lg:mr-[15rem] lg:ml-[15rem] xl:mr-[25rem] xl:ml-[25rem]"
    >
      <SectionHeading >A few technologies I've been working with</SectionHeading>
    <div className=" absolute top-[20rem] left-[-6rem] -z-10  h-[3.25rem] w-[30.25rem] rounded-lg bg-gradient-to-r from-sky-600 from-20% via-sky-500 via-40% to-emerald-500  to-80%  blur-[6rem] sm:w-[50.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[75deg]"></div>

      <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="text-clamp text-[14px]   font-mono bg-white  border border-white bg-opacity-50  dark:border-none rounded-lg px-5 py-3 dark:bg-[#45575326] dark:text-white/90"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}