import { createContext, useEffect, useState } from "react";
import { getContacts } from "../utils/firebase";

export const ContactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [contactTrigger, setContactTrigger] = useState(false);

  useEffect(() => {
    getContacts().then((res) => setContacts(res));
  }, [contactTrigger]);

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, setContactTrigger }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
