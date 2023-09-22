/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";
import Project from "./project";

export default function project() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"

    >
      <SectionHeading>Some Things I've Built</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
