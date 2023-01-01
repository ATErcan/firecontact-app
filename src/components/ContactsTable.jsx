import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";

const ContactsTable = () => {
  const { contacts } = useContext(ContactsContext);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const sortedContacts = contacts.sort((a, b) => {
    return new Date(b.docId) - new Date(a.docId);
  });

  const printContacts = sortedContacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>{capitalizeFirstLetter(contact.username)}</td>
        <td>{contact.phone}</td>
        <td>{capitalizeFirstLetter(contact.gender)}</td>
        <td>Trash</td>
        <td>Edit</td>
      </tr>
    );
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
