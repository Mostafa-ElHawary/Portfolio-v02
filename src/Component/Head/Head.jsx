import React, { useState, useEffect } from "react";
import { MainSection } from "../../GlobalStyle";
import {
  HeadContainer,
  NameWrapper,
  LandingContainer,
  TitleWrapper,
  LandingbioWrapper,
  GreenlinkWrapper,
  ContentWrapper,
  AuroraWrapper,
  AuroraItem,
  HeadButton,
} from "./HeadStyle";
import "./aurora.css";

// const ChildComponent = ({ styledButton }) => {
//   return <div>{styledButton}</div>;
// };

// const FontSize = {
//   small768: "  clamp(1rem, 1.5vw, 4rem)",
//   small992: "   clamp(2rem, 1.6vw, 2rem)",
//   small1200: "  clamp(2.5rem, 1.9vw, 2.5rem)",
// };

// const size =
//   window.innerWidth <= 768
//     ? FontSize.small768
//     : window.innerWidth > 768
//     ? FontSize.small992
//     : FontSize.small1200;

function Main() {
  const [pad, setPad] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPad(window.innerWidth <= 768 ? "20px" : "15px ");
    });

    return () => clearInterval(intervalId);
  }, []);
  return (
    <MainSection>
      <HeadContainer inverse>
        <LandingContainer>
          <NameWrapper pt="30px" pb="0">
            Hi
          </NameWrapper>

          {
            // <h2 className="landing__heading">Mostafa El Hawary.</h2>
          }

          <ContentWrapper className="content">
            <TitleWrapper className="title" pt="25px" pb="">
              I Build Stuff For The Web.
              <AuroraWrapper className="aurora">
                <AuroraItem className="aurora__item"></AuroraItem>
                <AuroraItem className="aurora__item"></AuroraItem>
                <AuroraItem className="aurora__item"></AuroraItem>
                <AuroraItem className="aurora__item"></AuroraItem>
              </AuroraWrapper>
            </TitleWrapper>
          </ContentWrapper>
          <LandingbioWrapper>
            Experienced software developer dedicated to delivering high-quality
            code and enhancing user experiences. You can see my work on{" "}
            <GreenlinkWrapper
              href="https://github.com/Mostafa-ElHawary"
              target="_blank"
            >
              GitHub
            </GreenlinkWrapper>{" "}
            Have a nice day!
          </LandingbioWrapper>

          <HeadButton pr={pad} pl={pad} pt="15px" pb="15px" href="#projects">
            Check out my work!
          </HeadButton>
        </LandingContainer>
      </HeadContainer>
    </MainSection>
  );
}

export default Main;
