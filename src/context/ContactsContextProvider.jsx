import { createContext, useEffect, useState } from "react";
import { getContacts } from "../utils/firebase";

export const ContactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [contactTrigger, setContactTrigger] = useState(false);
  const [edit, setEdit] = useState("");

  // get the data on first render and recall on every trigger
  useEffect(() => {
    getContacts().then((res) => setContacts(res));
  }, [contactTrigger]);

  // take the edit info from SingleContact and send it to AddContact
  const editInfo = (info) => {
    setEdit(info);
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        setContactTrigger,
        editInfo,
        edit,
        setEdit,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
