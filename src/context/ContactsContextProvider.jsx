import { createContext, useEffect, useState } from "react";
import { getContacts } from "../utils/firebase";

export const ContactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => setContacts(res));
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
