import React from "react";
import { MainContainer } from "./MainStyle";
function Main() {
  return (
    <MainContainer class="landing">
      <div class="landing__container">
        <h1 class="landing__text">Hi, my name is</h1>
        <h2 class="landing__heading">Mostafa El Hawary.</h2>
        <h3 class="landing__subheading">I build stuff for the web.</h3>
        <p class="landing__bio">
          Based in the EG, I'm a Full-stack Engineer .My particular field of
          expertise is in generating innovative ideas to overcome challenges and
          translating them into practical software solutions Now I'm focusing on
          improving my skills and knowledge. You can see my work on GitHub for more details. Have a nice day!
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
