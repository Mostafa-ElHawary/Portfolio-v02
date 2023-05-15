import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  display: grid;
  align-items: center;
`;

export const NameWrapper = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  /* font-size: 18px; */
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1rem, 1.5vw, 4rem);
`;
export const MyNameWrapper = styled.h2`
  font-size: clamp(2.3rem, 4vw, 3rem);
`;
export const LandingContainer = styled.div`
  /* transform: translateY(30px); */
  /* opacity: 0; */
  /* animation: display .5s forwards; */
`;
export const TitleWrapper = styled.h1`
  font-size: clamp(2.3rem, 4vw, 3rem);
`;
export const LandingbioWrapper = styled.p`

font-size: clamp(1.1rem, 1.5vw, 1.5rem);
color:hsl(219, 14%, 63%);
padding: 20px 30% 20px 0 ;

`
export const GreenlinkWrapper = styled.a`
  color: #64ffda;
  font-size: clamp(1rem, 1.5vw, 4rem);

`