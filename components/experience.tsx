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
    <section id="experience" ref={ref} className="relative scroll-mt-28 mb-28 sm:mb-40 ">
      <SectionHeading>My experience</SectionHeading>
      <div className="bg-[#994985bc] absolute top-[-20rem] -z-10 right-[5rem] h-[31.25rem] w-[41.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[33rem] lg:right-[28rem] xl:right-[15rem] 2xl:right-[10rem]  dark:bg-[	#301720] -rotate-[30deg]

"></div>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "#45575326 ",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid #02493827",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "#02493827",
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
