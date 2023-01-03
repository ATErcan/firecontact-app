import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  font-family: "Lato", sans-serif;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 1rem;
  }
`;

export const HeaderLogo = styled.h2`
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
