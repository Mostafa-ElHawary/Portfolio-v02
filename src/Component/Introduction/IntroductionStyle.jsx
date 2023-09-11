import styled, { css } from "styled-components";
import { Container } from "../../GlobalStyle";

export const IntroContainer = styled(Container)`
  height: 50vh;
  display: grid;
  align-items: center;
`;

export const AboutContainer = styled.section`
  display: grid;
  row-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: [] 100%;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: [] 50% [] 50%;
  }
  // @media screen and (max-width: 1100px){}
`;
export const AboutmeH1 = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1rem, 1.5vw, 4rem);
`;
export const ContentBioContainer = styled.div`
  display: grid;
`;
export const ContentBioP = styled.p`
  font-size: clamp(1.1rem, 1vw, 1.5rem);
  color: hsl(219, 14%, 63%);
`;
// @media screen and (max-width: 768px) { }
// @media screen and (max-width: 992px) {}
// @media screen and (max-width: 1100px){}

export const WrapperSection = styled.section`
  display: grid;
  gap: 15px;
`;

export const Section = styled.section`
  width: 100%;
  /* height: 80px; */
  list-style: none;
  display: grid;
  grid-template-columns: [] 100%;
  -webkit-box-align: center;
  align-items: center;
  font-size: clamp(1.1rem, 1vw, 1.5rem);
  /* color: rgb(136, 146, 176); */
  background-color: rgba(17, 34, 64, 0.467);
  border-radius: 10px;
  padding: 10px 15px;
  /* gap: 15px; */
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;

  ${css`
    p {
      font-size: clamp(0.8rem, 1vw, 1.5rem);
      color: hsl(219, 14%, 63%);
      line-height: 1.5rem;
    }

    a {
      font-size: clamp(0.7rem, 1vw, 1.5rem);
      cursor: pointer;
    }
  `}
`;
