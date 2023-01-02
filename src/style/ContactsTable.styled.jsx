import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-top: 2rem;
  overflow-x: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 1rem;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    max-height: calc(100vh - 202px);
    overflow-y: auto;
    padding: 2rem;
  }
  @media screen and (min-width: 992px) {
    min-width: 600px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const TableContacts = styled.table`
  width: 100%;
  margin: auto;
  text-align: center;
`;

export const TableHeadRow = styled.thead`
  background-color: #ccc;
`;

export const TableHeading = styled.th`
  padding: 1rem;
`;

export const TableCells = styled.td`
  padding: 1rem;
`;
