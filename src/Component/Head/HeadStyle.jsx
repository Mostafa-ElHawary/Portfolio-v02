import styled, { css } from "styled-components";
import { Container, StyledButton } from "../../GlobalStyle";

export const HeadContainer = styled(Container)`
  height: 100vh;
  display: grid;
  align-items: center;
`;
export const LandingContainer = styled.div``;
export const NameWrapper = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  /* font-size: 18px; */
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1.5rem, 1.5vw, 4rem);
  padding-top: ${({ pt }) => (pt ? pt : "")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
  @media screen and (max-width: 768px) {
  }
  padding-top: 5px 0;

  @media screen and (max-width: 992px) {
  }
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
  padding-top: ${({ pt }) => (pt ? pt : "")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
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
  font-size: clamp(1rem, 1.5vw, 2rem);
  color: hsl(219, 14%, 63%);
  padding: 20px 30% 20px 0;
  line-height: 2.06;
  @media screen and (max-width: 768px) {
    font-size: clamp(1rem, 1vw, 2rem);
    padding: 25px 0;
  }
`;
export const GreenlinkWrapper = styled.a`
  color: #64ffda;
  font-size: clamp(1rem, 1.5vw, 4rem);
  text-decoration: none;
`;

export const HeadButton = styled(StyledButton)`
  padding-top: ${({ pt }) => (pt ? pt : "")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
  @media screen and (max-width: 768px) {
    padding-left: ${({ pl }) => (pl ? pl : "15px")};
    padding-right: ${({ pr }) => (pr ? pr : "15px")};

  }

  @media screen and (max-width: 992px) {
    padding-left: ${({ pl }) => (pl ? pl : "15px")};
    padding-right: ${({ pr }) => (pr ? pr : "15px")};
  }
`;
