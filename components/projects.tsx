/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function project() {
  const { ref, inView } = useInView();

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
      ref={ref}
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
