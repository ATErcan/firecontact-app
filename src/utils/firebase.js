import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const contactsCollectionRef = collection(db, "contacts");

export const getContacts = async () => {
  const { docs } = await getDocs(contactsCollectionRef);
  const newTasks = docs.map((doc) => {
    const obj = doc._document.data.value.mapValue.fields;
    return {
      id: doc.id,
      username: obj.username.stringValue,
      phone: obj.phone.integerValue,
      gender: obj.gender.stringValue,
      docId: obj.docId.timestampValue,
    };
  });
  return newTasks;
};

export const createContact = (contactInfo, num) => {
  const newContact = {
    username: contactInfo.username,
    phone: Number(num),
    gender: contactInfo.gender,
    docId: new Date(),
  };
  return newContact;
};

export const addNewContact = async (contactInfo, num) => {
  const newContact = createContact(contactInfo, num);
  await addDoc(contactsCollectionRef, newContact);
};

export const deleteContact = async (id) => {
  const contactDoc = doc(db, "contacts", id);
  await deleteDoc(contactDoc);
};

export const updateContact = async (contactInfo, num, edit) => {
  const contactDoc = doc(db, "contacts", edit.id);
  const newContact = createContact(contactInfo, num);
  await updateDoc(contactDoc, newContact);
};
