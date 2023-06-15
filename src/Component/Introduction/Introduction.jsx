// Import assets
// import logo from "../../../public/logo.webp";
// Next image optimization
// import Image from "next/image";
// import Technology from "@/components/Technology";
import { WrapperAboutContainer,  AboutContainer, AboutmeH1, ContentBioP , Section , WrapperSection } from "./IntroductionStyle";
function Introduction() {
  return (
    <WrapperAboutContainer className="about" id="about">
      <AboutContainer className="about__container">
        <div className="content">
          <AboutmeH1 className="about__heading about__heading--section-heading">
            Introduction
          </AboutmeH1>

          <div className="content__bio">
            <ContentBioP>
              Hello! My name is Mostafa El Hawary, I&apos;m{" "}
              {new Date().getFullYear() - new Date("1995-04-06").getFullYear()}{" "}
              years old and Interested in computer science. I started
              programming by taking Data Structure & Algorithmes course when I
              decided to learn how to code and make stuff out of the box. I
              started to think about the internet and how it works, so I focused
              on web development (especially Full-stack) and doing my best here.
              I continuously strive to enhance my expertise, tackling design
              challenges and solving problems one project at a time. If you're
              looking for a full-stack software developer or a mobile app
              developer, you've come to the right place!
            </ContentBioP>
          </div>
        </div>

        <WrapperSection>

          <Section>
            <section>
              <p>Front End</p>
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
              <p>Back-End</p>
              <i></i>
            </section>
            <p>
              {" "}
              Developing secure and high-performance systems with proficiency in using top frameworks.
            </p>
            <span>
              {" "}
              <a>MORE PROJECTS</a>{" "}
            </span>
          </Section>

        </WrapperSection>
      </AboutContainer>
    </WrapperAboutContainer>
  );
}
export default Introduction;
