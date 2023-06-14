import styled, { css } from "styled-components";




export const Container = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: clamp(10px, 2vw, 20px);
  color: #64ffda;
  /* font-size: 18px; */
  font-weight: 400;
  text-transform: none;
  font-size: clamp(1rem, 1.5vw, 4rem);
`;

export const Text = styled.p`
  font-size: clamp(1.1rem, 1vw, 1.5rem);
  color: hsl(219, 14%, 63%);
`;

// export const UlContainerTech = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// export const LiContainerTech = styled.li`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

export const TechIcon = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const TechImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const TechName = styled.p`
  margin-left: 10px;
`;


export const UlContainerTech = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: [] 50% [] 50%;
  gap: 1rem;
`;
export const LiContainerTech = styled.li`
  width: 100%;
  height: 80px;
  list-style: none;
  display: grid;
  grid-template-columns: [] 15% [] 85%;
  align-items: center;
  font-size: clamp(1.1rem, 1vw, 1.5rem);
  cursor: pointer;
  color: #8892b0;
  background-color: rgba(17, 34, 64, 0.467);
  border-radius: 10px;
  padding: 10px 15px;
  gap: 15px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);

  ${css`
    .technology__icon {
      display: grid;

      padding: 10px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      img {
        width: 25px;
        height: 25px;
      }
    }
  `}
`;
