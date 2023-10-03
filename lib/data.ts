import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/p1.png";
import rmtdevImg from "@/public/p2.png";
import wordanalyticsImg from "@/public/p3.png";
import cleverBot from "@/public/p4.png";
import supaui from "@/public/p5.png";

import { HiCodeBracket } from "react-icons/hi2";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Egypt, Ay",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "EG",
    description:
      "I worked as a front-end developer for 1 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Cairo",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Cairo",
    description:
      "I love the feeling of finally figuring out a solution to a problem .My core stack is Mern satck",
    icon: React.createElement(HiCodeBracket),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Digital Agency",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Job board",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "CleverBot",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: cleverBot,
  },
  {
    title: "supaui",
    description:
      "new hero header concept and a cute Monster character I created last weekend , It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: supaui,
  },
  {
    title: "BuyMore",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Redux",
  "TypeScript",
  "Next.js",
  "Framer Motion",
  "SASS",
  "Tailwind",
  "Jest",
  "Node.js",
  "MongoDB",
  "Express",
  "Git",
  "Python",
  "Django",
  "Firebase",
] as const;
