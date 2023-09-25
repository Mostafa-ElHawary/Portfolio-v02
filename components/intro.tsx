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
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]  "
      id="home"
    >
    
      <motion.h1
        className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mostafa.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">2 years</span> of experience.
      </motion.h1>
      <motion.h5
        className="mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-1xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm focusing on improving my skills and knowledge. You can see my work
        on <span className="font-bold text-white cursor-pointer">GitHub </span>for more details.{" "}
        <span className="font-bold">Have a nice day!</span>{" "}
      </motion.h5>
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
          className="group bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/3"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}>
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:text-gray-950  dark:bg-white"
          href="/CV.pdf"
          download
        >
          CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>{" "}
        <a
          className="bg-white p-4 text-gray-950 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white dark:text-white/60"
          href="https://www.linkedin.com/in/mostafa-el-hawary-542813248/"
          target="_blank"
        >
          <BsLinkedin className="text-gray-950" />
        </a>
        <a
          className="bg-white p-4 text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer  dark:bg-white dark:text-gray-950"
          href="https://github.com/Mostafa-ElHawary"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
