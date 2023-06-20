import styled, { css } from "styled-components";

export const BodyStyles = css`

  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: var(--bg);
    color: #fff;
    font-family: "Inter", "DM Sans", Arial, sans-serif;
  }
`;

export const MainContainer = styled.main`
  height: 100vh;
  display: grid;
  align-items: center;
  
  :root {
    --bg:#0A182E;
    --clr-1: #00c2ff;
    --clr-2: #33ff8c;
    --clr-3: #e54cff;
    --clr-4: #64ffda;  

    --blur: 1rem;
    --fs: clamp(3rem, 8vw, 7rem);
    --ls: clamp(-1.75px, -0.25vw, -3.5px);
  }
  

  
`;
export const LandingContainer = styled.div``;
export const NameWrapper = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  /* font-size: 18px; */
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1rem, 1.5vw, 4rem);
`;

export const ContentWrapper = styled.div``;

export const TitleWrapper = styled.h1`
  font-size: clamp(2.3rem, 4vw, 3rem);
  /* font-size: var(--fs); */
  font-weight: 800;
  letter-spacing: var(--ls);
  position: relative;
  overflow: hidden;
  background: var(--bg);
  margin: 0;
`;

export const AuroraWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  mix-blend-mode: darken;
  pointer-events: none;
  ${css`
    .aurora__item:nth-of-type(1) {
      top: -50%;
      animation: aurora-border 6s ease-in-out infinite,
        aurora-1 12s ease-in-out infinite alternate;
    }

    .aurora__item:nth-of-type(2) {
      background-color: var(--clr-3);
      right: 0;
      top: 0;
      animation: aurora-border 6s ease-in-out infinite,
        aurora-2 12s ease-in-out infinite alternate;
    }

    .aurora__item:nth-of-type(3) {
      background-color: var(--clr-2);
      left: 0;
      bottom: 0;
      animation: aurora-border 6s ease-in-out infinite,
        aurora-3 8s ease-in-out infinite alternate;
    }

    .aurora__item:nth-of-type(4) {
      background-color: var(--clr-4);
      right: 0;
      bottom: -50%;
      animation: aurora-border 6s ease-in-out infinite,
        aurora-4 24s ease-in-out infinite alternate;
    }

    @keyframes aurora-1 {
      0% {
        top: 0;
        right: 0;
      }

      50% {
        top: 100%;
        right: 75%;
      }

      75% {
        top: 100%;
        right: 25%;
      }

      100% {
        top: 0;
        right: 0;
      }
    }

    @keyframes aurora-2 {
      0% {
        top: -50%;
        left: 0%;
      }

      60% {
        top: 100%;
        left: 75%;
      }

      85% {
        top: 100%;
        left: 25%;
      }

      100% {
        top: -50%;
        left: 0%;
      }
    }

    @keyframes aurora-3 {
      0% {
        bottom: 0;
        left: 0;
      }

      40% {
        bottom: 100%;
        left: 75%;
      }

      65% {
        bottom: 40%;
        left: 50%;
      }

      100% {
        bottom: 0;
        left: 0;
      }
    }

    @keyframes aurora-4 {
      0% {
        bottom: -50%;
        right: 0;
      }

      50% {
        bottom: 0%;
        right: 40%;
      }

      90% {
        bottom: 50%;
        right: 25%;
      }

      100% {
        bottom: -50%;
        right: 0;
      }
    }

    @keyframes aurora-border {
      0% {
        border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
      }

      25% {
        border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%;
      }

      50% {
        border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%;
      }

      75% {
        border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%;
      }

      100% {
        border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
      }
    }
  `}
`;
export const AuroraItem = styled.div`
  overflow: hidden;
  position: absolute;
  width: 60vw;
  height: 60vw;
  background-color: var(--clr-1);
  border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
  filter: blur(var(--blur));
  mix-blend-mode: overlay;
`;

export const MyNameWrapper = styled.h2`
  font-size: clamp(2.3rem, 4vw, 3rem);
`;

export const LandingbioWrapper = styled.p`
  font-size: clamp(1.1rem, 1vw, 1.5rem);
  color: hsl(219, 14%, 63%);
  padding: 20px 30% 20px 0;
`;
export const GreenlinkWrapper = styled.a`
  color: #64ffda;
  font-size: clamp(1rem, 1.5vw, 4rem);
`;
