import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
// Database
import { db } from "./firebase";

// Custom hook to get tracking data in realtime.
const useDb = (docId) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "urls", docId), (doc) => {
      const docData = doc.data();

      setData(docData);
    });

    return () => unsubscribe();
  }, [docId]);

  return data;
};

export default useDb;

// Adds a new document with custom docID in db
export const addToDb = (docId, data) => {
  return db.collection("urls").doc(docId).set(data);
};

// Getting Data from db
export const getDataFromDb = (docId) => {
  const docRef = doc(db, "urls", docId);
  return getDoc(docRef);
};

// Updating clicks info of a particular document in db
export const updateClicksInfo = (docId, data) => {
  const docRef = doc(db, "urls", docId);
  return updateDoc(docRef, { clicks: data });
};
