import React from "react";
import Data from "./dataTech.json";
import "./Anmi.css";
import {
  Container,
  Title,
  Text,
  TechIcon,
  TechImage,
  TechName,
  UlContainerTech,
  LiContainerTech,
} from "./TechnologiesStyle";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "animation",
  "webdev",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

function Technologies() {
  return (
    <Container>
    <Text>
    <Title>Technologies</Title>
        As a Full Stack Developer, I specialize in React for front-end
        development, along with JavaScript and TypeScript. I leverage Next.js
        for performant web applications. Python and Django are my go-to choices
        for back-end development, while Node.js adds scalability. Additionally,
        I have proficiency in C++ and Java for tackling complex programming
        challenges. I also have experience in machine learning and AI, adding an
        extra dimension to my skill set.
        <br />
        Here are a few technologies I&apos;ve been working with:
        {
          //    <p>
          //     </p>
        }
      </Text>

      {
        // <UlContainerTech className="content__technologies">
        //   {Data.map((technology) => (
        //     <LiContainerTech className="technology" key={technology.id}>
        //       <TechIcon
        //         className="technology__icon"
        //         style={{ backgroundColor: technology.color }}
        //       >
        //         <TechImage src={technology.img} alt={technology.tech} />
        //       </TechIcon>
        //       <TechName className="technology__name">{technology.tech}</TechName>
        //     </LiContainerTech>
        //   ))}
        //   </UlContainerTech>
      }

      <div className="app">
      <header></header>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
    </Container>
  );
}

export default Technologies;
