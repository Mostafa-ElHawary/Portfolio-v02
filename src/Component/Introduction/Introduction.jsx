// Import assets
// import logo from "../../../public/logo.webp";
// Next image optimization
// import Image from "next/image";
// import Technology from "@/components/Technology";
import {
    IntroContainer,
  // AboutContainer,
  AboutmeH1,
  ContentBioP,
  WrapperSection,
  Section,
} from "./IntroductionStyle";
import { MainSection } from "../../GlobalStyle";
function Introduction() {
  return (
    <MainSection>
      <IntroContainer inverse>
        <div >
          <AboutmeH1 >
            Introduction
          </AboutmeH1>

          <div >
            <ContentBioP>
              Hello! My name is Mostafa El Hawary, I&apos;m{" "}
              {new Date().getFullYear() - new Date("1995-04-06").getFullYear()}{" "}
              years old and Interested in computer science. I started
              programming by taking Data Structure & Algorithmes course when I
              decided to learn how to code and make stuff out of the box. I
              started to think about the internet and how it works, so I focused
              on web development (especially Full-stack) and doing my best here
              . If you're looking for a full-stack software developer or a
              mobile app developer, you've come to the right place!
            </ContentBioP>
          </div>
        </div>

        <WrapperSection>
          <Section>
            <section>
              <h3>Front End</h3>
              <i></i>
            </section>
            <p>
              {" "}
              Delivering seamless user interfaces with expertise in front-end
              development.
            </p>
            <span>
              {" "}
              <a>MORE PROJECTS</a>{" "}
            </span>
          </Section>

          <Section>
            <section>
              <h3>Back-End</h3>
              <i></i>
            </section>
            <p>
              {" "}
              Developing secure and high-performance systems with proficiency in
              using top frameworks.
            </p>
            <span>
              {" "}
              <a>MORE PROJECTS</a>{" "}
            </span>
          </Section>
        </WrapperSection>

      </IntroContainer>
    </MainSection>
  );
}
export default Introduction;
