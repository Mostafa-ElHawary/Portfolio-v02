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

  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Node.js",
  "Next.js",
  "Express.js",
  "UI/UX",
  "SVG",
  "Git",
  "C++",
  "python"


];

const LINKS = [

  "https://cdn.sanity.io/images/5db7tpcr/production/17662d5aa83f67d2102cf7aa9b908e52558fb957-25x25.svg",
  "https://cdn.sanity.io/images/5db7tpcr/production/62b9ccbaf4e42c75b27304e9e466dc6cb8fb1f30-24x24.svg",
  "https://cdn.sanity.io/images/5db7tpcr/production/b86d0c6de6cf5c4692bd91f1135c4932bc4f47ce-256x256.svg",
  "https://cdn.sanity.io/images/5db7tpcr/production/c941614c2558cddcb2daecc33a23d940b838efb1-64x64.svg",
  "https://cdn.sanity.io/images/5db7tpcr/production/c5c92ebc803c58eb0d56f076904eef9ef34d69b9-123x73.svg",
  "https://cdn.sanity.io/images/5db7tpcr/production/c5c92ebc803c58eb0d56f076904eef9ef34d69b9-123x73.svg",
  "https://cdn.sanity.io/images/5db7tpcr/production/c5c92ebc803c58eb0d56f076904eef9ef34d69b9-123x73.svg",

]
const DURATION = 30000;
const ROWS = 4;
const TAGS_PER_ROW = 4;

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
  
      </Text>

  
      <div className="app">
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 4000)}
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
