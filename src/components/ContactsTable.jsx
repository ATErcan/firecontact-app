import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
import SingleContact from "./SingleContact";

const ContactsTable = () => {
  const { contacts } = useContext(ContactsContext);

  // function to sort new added to the top
  const sortedContacts = contacts.sort((a, b) => {
    return new Date(b.docId) - new Date(a.docId);
  });

  // mapping and calling SingleContact component for each table row
  const printContacts = sortedContacts.map((contact) => {
    return <SingleContact key={contact.id} contact={contact} />;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{printContacts}</tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
