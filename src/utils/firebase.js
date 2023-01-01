import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
