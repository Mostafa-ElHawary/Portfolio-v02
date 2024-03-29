"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInviwe } from "@/lib/hooks";

import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInviwe("Experience", 0.5);
  const { theme } = useTheme();
  return (
    <section
      id="experience"
      ref={ref}
      className=" relative scroll-mt-28 mb-28 sm:mb-40  "
    >
      <SectionHeading>My experience</SectionHeading>
    

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#ffffff40" : "#ffffff09",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1rem ",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #ffffff40"
                    : "0.4rem solid #ffffff09",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#ffffff40" : "#ffffff09",
                fontSize: "1.5rem",
              }}
              className="text-clamp text-normal  font-mono "
            >
              <h3 className="font-semibold capitalize text-clamp text-normal   font-mono">{item.title}</h3>
              <p className="font-normal !mt-0 text-clamp text-normal   font-mono">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-clamp text-normal   font-mono">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

    </section>
  );
}
