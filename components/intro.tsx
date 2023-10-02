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
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative "
      id="home"
    >
      {/* <div className=" absolute top-[10rem] left-[-3rem] -z-10  h-[10.25rem] w-[26.25rem] rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 blur-[10rem] sm:w-[50.75rem]  md:right-[-4rem] lg:right-5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[145deg]"></div>
      <div className=" absolute top-[10rem] left-[-3rem] -z-10  h-[5.25rem] w-[26.25rem] rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  blur-[10rem] sm:w-[50.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[45deg]"></div> */}
      <motion.h1 
        className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl  "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mostafa.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">2 years</span> of experience.
      </motion.h1>
      <motion.h2
        className="mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">I Build Stuff For The Web. You</span> can see my work
        on <span className="font-bold text-white cursor-pointer dark:text-[#64ffda]">GitHub </span>for more details.{" "}
        <span className="font-bold">Have a nice day!</span>{" "}
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
          className="group bg-gray-900  border-opacity-100 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/3 dark:bg-[#02493967] dark:border-2 dark:border-[#64ffda]  dark:bg-opacity-70" 
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}>
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:text-white  dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>{" "}
        <a
          className="bg-white p-4 text-gray-950 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:text-white  dark:bg-white/10"
          href="https://www.linkedin.com/in/mostafa-el-hawary-542813248/"
          target="_blank"
        >
          <BsLinkedin  />
        </a>
        <a
          className="bg-white p-4 text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer  dark:text-white  dark:bg-white/10"
          href="https://github.com/Mostafa-ElHawary"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
