import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
import SingleContact from "./SingleContact";

const ContactsTable = () => {
  const { contacts } = useContext(ContactsContext);

  const findContact = (id) => {
    const choosenItem = contacts.map((contact) => id === contact.id)[0];
  };

  const sortedContacts = contacts.sort((a, b) => {
    return new Date(b.docId) - new Date(a.docId);
  });

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
