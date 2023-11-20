/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { ProblemsSites } from "@/lib/data";
import { motion, useScroll , useTransform } from "framer-motion";
import { useSectionInviwe } from "@/lib/hooks";
import Link from "next/link";

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

export default function ProblemSolving() {
  const { ref } = useSectionInviwe("Problems");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
    id="Problems"
    style={{ scale: scrollProgress, opacity: scrollOpacity }}
    ref={ref}
    className="  flex flex-col relative items-center  justify-center mb-28  scroll-mt-28 text-center sm:mb-40 mr-[1rem]   ml-[1rem] lg:mr-[15rem] lg:ml-[15rem] xl:mr-[25rem] xl:ml-[25rem]"
    >
      <SectionHeading >Some problems Solved</SectionHeading>
    {/* <div className=" absolute top-[20rem] left-[-6rem] -z-10  h-[3.25rem] w-[30.25rem] rounded-lg bg-gradient-to-r from-sky-600 from-20% via-sky-500 via-40% to-emerald-500  to-80%  blur-[6rem] sm:w-[50.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[75deg]"></div> */}

      <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800 ">
        {ProblemsSites.map((Site, index) => (
          <motion.li
            className="text-clamp text-normal   font-mono bg-white  border border-white bg-opacity-50  dark:border-none rounded-lg px-5 py-3 dark:bg-[#45575326] dark:text-white/90"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Link href={Site.link}  key={index} className=" text-[20px]  md:text-2xl lg:text-3xl xl:text-3xl">
            {Site.Name}
            </Link>
            
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}