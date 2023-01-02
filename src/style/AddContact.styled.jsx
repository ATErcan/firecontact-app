import styled from "styled-components";

export const AddContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 2rem 1rem;
  margin: auto;
  border-radius: 25px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const TitleStyles = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

export const Titles = styled.h3``;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;
