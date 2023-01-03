import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    height: calc(100vh - 103px);
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 2rem;
    padding: 1rem 2rem;
  }
  @media screen and (min-width: 992px) {
    padding: 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 80%;
    margin: auto;
  }
`;
