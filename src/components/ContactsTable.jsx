import { useEffect, useState } from "react";
import { getContacts } from "../utils/firebase";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => setContacts(res));
  }, []);

  console.log(contacts);

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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
