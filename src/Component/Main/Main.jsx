import React from "react";
import { MainContainer } from "./MainStyle";
import "./aurora.css";
function Main() {
  return (
    <MainContainer class="landing">
      <div class="landing__container">
        <h1 class="landing__text">Hi, my name is</h1>
        <h2 class="landing__heading">Mostafa El Hawary.</h2>

        <div class="content">
          <h1 class="title">
          I Build Stuff For The Web.
            <div class="aurora">
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
            </div>
          </h1>
        </div>
        <p class="landing__bio">
          Based in the EG, I'm a Full-stack Engineer .My particular field of
          expertise is in generating innovative ideas to overcome challenges and
          translating them into practical software solutions Now I'm focusing on
          improving my skills and knowledge. You can see my work on
          <a
            href="https://github.com/youssef579"
            target="_blank"
            class="landing__external landing__external-link--green-link"
          >
            GitHub
          </a>
          for more details. Have a nice day!
        </p>
        <a
          href="#projects"
          class="landing__navigator landing__navigator--green-btn"
        >
          Check out my work!
        </a>
      </div>
    </MainContainer>
  );
}

export default Main;
