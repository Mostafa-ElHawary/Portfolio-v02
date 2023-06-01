// Import assets
// import logo from "../../../public/logo.webp";
// Next image optimization
// import Image from "next/image";
// import Technology from "@/components/Technology";
import { AboutContainer } from "./AboutStyle";
function About() {
  return (
    <AboutContainer className="about" id="about">

      <div className="about__container">

        <h1 className="about__heading about__heading--section-heading">
          About me
          <hr />
        </h1>

        <div className="content">

          <div className="content__bio">
            <p>
              Hello! My name is Mostafa El Hawary, I&apos;m{" "}
              {new Date().getFullYear() - new Date("1995-04-06").getFullYear()}{" "}
              years old and Interested in computer science. I started
              programming by taking{" "}
              <a
                href="https://tinyurl.com/2kdaobma"
                target="_blank"
                className="about__external-link about__external-link--green-link"
              >
                Data Structure & Algorithmes
              </a>{" "}
              course when I decided to learn how to code and make stuff out of
              the box.
            </p>
            <br />
            <p>
              I started to think about the internet and how it works, so I
              focused on web development (especially Full-stack) and doing my
              best here.
            </p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with:</p>
            <ul className="content__technologies">
              {
                //   {technologies.map((technology) => (
                //     <Technology key={technology.id} {...technology} />
                //   ))}
              }
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
