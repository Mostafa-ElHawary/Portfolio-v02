import React from "react";
import { StyledButton } from "../../../GlobalStyle";
import {
  MainContainer,
  NameWrapper,
  LandingContainer,
  TitleWrapper,
  LandingbioWrapper,
  GreenlinkWrapper,
  ContentWrapper ,
  AuroraWrapper,
  AuroraItem
} from "./MainStyle";
import "./aurora.css";

const ChildComponent = ({ styledButton }) => {
  return <div>{styledButton}</div>;
};

function Main() {
  return (
    <MainContainer className="landing">
      <LandingContainer className="landing__container">
        <NameWrapper className="landing__text">Hi</NameWrapper>
       { 
        // <h2 className="landing__heading">Mostafa El Hawary.</h2>
      }

        <ContentWrapper  className="content">
          <TitleWrapper className="title">
            I Build Stuff For The Web.
            <AuroraWrapper className="aurora">
              <AuroraItem className="aurora__item"></AuroraItem>
              <AuroraItem className="aurora__item"></AuroraItem>
              <AuroraItem className="aurora__item"></AuroraItem>
              <AuroraItem className="aurora__item"></AuroraItem>
            </AuroraWrapper>
          </TitleWrapper>
        </ContentWrapper>
        <LandingbioWrapper className="landing__bio">
        Experienced software developer dedicated to delivering high-quality code and enhancing user experiences. You can see my work on{" "}
          <GreenlinkWrapper
            href="https://github.com/Mostafa-ElHawary"
            target="_blank"
            className="landing__external landing__external-link--green-link"
          >
            GitHub
          </GreenlinkWrapper>{" "}
          Have a nice day!
        </LandingbioWrapper>
        <ChildComponent
          styledButton={
            <StyledButton
              pad={window.innerWidth <= 768 ? "10px 20px" : "15px 28px"}
              href="#projects"
              className="landing__navigator landing__navigator--green-btn"
            >
              Check out my work!
            </StyledButton>
          }
        />
      </LandingContainer>
    </MainContainer>
  );
}

export default Main;
