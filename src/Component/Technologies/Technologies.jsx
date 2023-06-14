import React from "react";
import Data from "./dataTech.json";
import  { Container  , Title, Text , TechIcon ,  TechImage , TechName , UlContainerTech ,
LiContainerTech } from './TechnologiesStyle'
function Technologies() {
  return (
    <Container >
    <Title>
    Technologies
    
    </Title>
      <Text>
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


      <UlContainerTech className="content__technologies">
      {Data.map((technology) => (
        <LiContainerTech className="technology" key={technology.id}>
          <TechIcon
            className="technology__icon"
            style={{ backgroundColor: technology.color }}
          >
            <TechImage src={technology.img} alt={technology.tech} />
          </TechIcon>
          <TechName className="technology__name">{technology.tech}</TechName>
        </LiContainerTech>
      ))}
      </UlContainerTech>
    

    </Container>
  );
}

export default Technologies;
