// Import assets
// import logo from "../../../public/logo.webp";
// Next image optimization
// import Image from "next/image";
// import Technology from "@/components/Technology";
import { AboutContainer, AboutmeH1, ContentBioP } from "./AboutStyle";
import Data from "./dataTech.json";
function About() {
  return (
    <AboutContainer className="about" id="about">
      <div className="about__container">
        <AboutmeH1 className="about__heading about__heading--section-heading">
          Introduction
        </AboutmeH1>

        <div className="content">
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

            <br />
            <p>Here are a few technologies I&apos;ve been working with:</p>
            <ul className="content__technologies">
              {Data.map((technology) => (
                <li className="technology" key={technology.id}>
                  <div
                    className="technology__icon"
                    // style={{
                    //   backgroundColor: color + "30",
                    // }}
                  >
                    <img
                      src={technology.img}
                      alt={technology.tech}
                      // width={22}
                      // height={22}
                    />
                  </div>
                  <p className="technology__name">{technology.tech}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="content__image">
            {
              // <Image src={logo} alt="Logo" fill placeholder="blur" priority />
            }
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}
export default About;
