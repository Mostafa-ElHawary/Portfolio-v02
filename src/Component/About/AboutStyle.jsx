import styled, { css } from "styled-components";

export const AboutContainer = styled.section`
  height: 100vh;
  display: grid;
  align-items: center;
  border: 1px solid red;

`;
export const AboutmeH1 = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  /* font-size: 18px; */
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1rem, 1.5vw, 4rem);
`;
export const ContentBioContainer = styled.div`

display: grid;

`
export const ContentBioP = styled.p`
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  color: hsl(219, 14%, 63%);
  padding: 20px 30% 20px 0;
`;
export const UlContainerTech = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: [] 50% [] 50%;
`;
export const LiContainerTech = styled.li`
  width: 50%;
  height: 80px;
  list-style: none;
  display: grid;
  grid-template-columns: [] 5% [] 95%;
  border: 1px solid red;
  align-items: center;
  ${css`
    .technology__icon {
      display: grid;
      grid-template-columns: [] 20% [] 80%;
      border: 1px solid red;

      img {
        width: 25px;
        height: 25px;
      }
    }
  `}
`;
