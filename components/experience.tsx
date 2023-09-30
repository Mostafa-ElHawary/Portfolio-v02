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
      className=" relative scroll-mt-28 mb-28 sm:mb-40 "
    >
      <SectionHeading>My experience</SectionHeading>
      <div
        className="bg-[#994985bc] absolute top-[-25rem] -z-10  h-[31.25rem] w-[41.25rem] rounded-full bg-gradient-to-r from-indigo-600 blur-[10rem] sm:w-[68.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[30deg]

"
      ></div>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#ffffff40" : "#45575326 ",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #ffffff40"
                    : "0.4rem solid #45575326",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#ffffff40" : "#02493827",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

    </section>
  );
}
