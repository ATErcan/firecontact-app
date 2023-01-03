import { Tab } from "@mui/material";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
import { TitleStyles } from "../style/AddContact.styled";
import {
  ContactsContainer,
  TableCells,
  TableContacts,
  TableContainer,
  TableHeading,
  TableHeadRow,
} from "../style/ContactsTable.styled";
import SingleContact from "./SingleContact";

const ContactsTable = () => {
  const { contacts } = useContext(ContactsContext);

  // function to sort new added to the bottom
  const sortedContacts = contacts.sort((a, b) => {
    return new Date(a.docId) - new Date(b.docId);
  });

  // mapping and calling SingleContact component for each table row
  const printContacts = sortedContacts.map((contact) => {
    return <SingleContact key={contact.id} contact={contact} />;
  });

  return (
    <ContactsContainer>
      <TitleStyles>
        <h3>Contacts</h3>
      </TitleStyles>
      <TableContainer>
        <TableContacts>
          <TableHeadRow>
            <tr>
              <TableHeading>Username</TableHeading>
              <TableHeading>Phone Number</TableHeading>
              <TableHeading>Gender</TableHeading>
              <TableHeading>Delete</TableHeading>
              <TableHeading>Edit</TableHeading>
            </tr>
          </TableHeadRow>
          <tbody>
            {contacts.length > 0 ? (
              printContacts
            ) : (
              <tr>
                <TableCells colSpan={5}>Nothing Found</TableCells>
              </tr>
            )}
          </tbody>
        </TableContacts>
      </TableContainer>
    </ContactsContainer>
  );
};

export default ContactsTable;
