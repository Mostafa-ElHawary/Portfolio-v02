/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInviwe } from "@/lib/hooks";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInviwe("Home", 0.1);
  const {  setActiveSection , setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className=" mb-28  text-center sm:mb-0 scroll-mt-[100rem] relative mr-[1rem] ml-[1rem] lg:mr-[15rem] lg:ml-[15rem] xl:mr-[25rem] xl:ml-[25rem] "
      id="home"
    >
      {/* <div className=" absolute top-[10rem] left-[-3rem] -z-10  h-[10.25rem] w-[26.25rem] rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 blur-[0rem] sm:w-[50.75rem]  md:right-[-4rem] lg:right-5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[145deg]"></div> */}
      <div className=" absolute top-[10rem] left-[-6rem] -z-10  h-[3.25rem] w-[30.25rem] rounded-full bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 to-80%  blur-[4rem] sm:w-[50.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[75deg]"></div>
      <div className=" absolute top-[20rem] left-[11rem] md:left-[20rem] -z-10  h-[3.25rem] w-[10.25rem] rounded-full bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-40% to-sky-500 to-80%  blur-[4rem] sm:w-[10.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[75deg]"></div>

      <motion.h1 
        className=" mt-4 px-4 text-[14px] font-medium !leading-[1.5] sm:text-4xl  text-start font-mono"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold  text-[14px] sm:text-[15px] md:text-2xl lg:text-3xl xl:text-3xl">Hello, <span className="dark:text-[#64ffda] text-indigo-600">I'm Mostafa El Hawary. </span> <br /></span> 
        <span className="font-bold text-[11px] textResizeP2">I'm a{" "}Software Engineer</span> with{" "}
        <span className="font-bold"><span className="dark:text-[#64ffda] text-indigo-600 text-[11px] textResizeP2">2 years</span></span> of experience.
      </motion.h1>
      <motion.h2
        className="mb-10 px-4 text-[15px] font-medium !leading-[1.5] sm:text-3xl text-start font-mono"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-[15px] textResizeP2">I Build Stuff For The Web. <br /> You can see my work
        on </span> <span className="font-bold  cursor-pointer dark:text-[#64ffda] text-indigo-600 text-[15px] textResizeP2">GitHub </span>for more details.{" "}
        <span className="font-bold  text-[17px] textResizeP2">Have a nice day!</span>{" "}
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group text-[13px] font-mono bg-gray-900  border-opacity-100 text-white px-6 py-2 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/3 dark:bg-[#02493967] dark:border-2 dark:border-[#64ffda]  dark:bg-opacity-70" 
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}>
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
        </Link>
    <div className="grid grid-cols-3 gap-2 text-center">
    <a
          className="group  bg-opacity-40 text-[17px]  font-mono bg-white px-5 py-2 flex  items-center justify-center gap-1 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:text-white  dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>{" "}
        <a
          className=" bg-white bg-opacity-40 text-[17px] font-mono    text-gray-950 hover:text-gray-950 flex items-center justify-center gap-1 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:text-white  dark:bg-white/10"
          href="https://www.linkedin.com/in/mostafa-el-hawary-542813248/"
          target="_blank"
        >
          <BsLinkedin  />
        </a>
        <a
          className="bg-white bg-opacity-40 text-[17px] font-mono  text-gray-950 flex items-center justify-center gap-1  rounded-lg focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer  dark:text-white  dark:bg-white/10"
          href="https://github.com/Mostafa-ElHawary"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
    </div>
      </motion.div>
    </section>
  );
}
