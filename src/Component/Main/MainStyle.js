import styled from "styled-components";

export const  MainContainer = styled.main`

height: 100vh;
display: grid;
align-items: center;

`

export const NameWrapper = styled.h1`

    margin-bottom: clamp(10px,2vw,20px);
    color: #64ffda;
    font-size: 18px;
    font-weight: 400;
    text-transform: none;

`
export const LandingContainer = styled.div`

    transform: translateY(30px);
    /* opacity: 0; */
    animation: display .5s forwards;
`
export  const StyledButton = styled.a`
    /* animation-delay: .8s;
    transition-duration: .25s;
    transition-property: translate,box-shadow; */
    color: #64ffda;
    border: 1px solid #64ffda;
    font-size: 14px;
    display: block;
    width: fit-content;
    border-radius: 5px;
    text-decoration: none;
    padding:  ${(props) => (props.pad ? props.pad : "")};

    /* background-color: blue; */
  /* color: white; */
  /* padding: 10px; */
  /* border: none; */
  /* border-radius: 4px; */
  cursor: pointer;
  transition: transform 0.3s, border-bottom 0.3s, border-right 0.3s;

  &:hover {
    transform: translate(-5px , -5px);
    border-bottom: 3px solid #64ffda;
    border-right: 3px solid #64ffda;
  }
`;