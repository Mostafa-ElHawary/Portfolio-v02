import styled from "styled-components";

export const AboutContainer = styled.section`


height: 100vh;
  display: grid;
  align-items: center;

`
export const AboutmeH1 = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  /* font-size: 18px; */
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1rem, 1.5vw, 4rem);
`

export const ContentBioP = styled.p`

font-size: clamp(1.1rem, 1.5vw, 1.5rem);
color:hsl(219, 14%, 63%);
padding: 20px 30% 20px 0 ;

`