import React from "react";
import { MainContainer, NameWrapper, StyledButton ,LandingContainer } from "./MainStyle";
import "./aurora.css";

const ChildComponent = ({ styledButton }) => {
  return <div>{styledButton}</div>;
};

function Main() {
  return (
    <MainContainer className="landing">
      <LandingContainer className="landing__container">
        <NameWrapper className="landing__text">Hi, my name is</NameWrapper>
        <h2 className="landing__heading">Mostafa El Hawary.</h2>

        <div className="content">
          <h1 className="title">
            I Build Stuff For The Web.
            <div className="aurora">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </h1>
        </div>
        <p className="landing__bio">
          Based in the EG, I'm a Full-stack Engineer .My particular field of
          expertise is in generating innovative ideas to overcome challenges and
          translating them into practical software solutions Now I'm focusing on
          improving my skills and knowledge. You can see my work on
          <a
            href="https://github.com/youssef579"
            target="_blank"
            className="landing__external landing__external-link--green-link"
          >
            GitHub
          </a>
          for more details. Have a nice day!
        </p>
        <ChildComponent
          styledButton={
            <StyledButton pad='15px 28px'
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
