import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";
// Database
import { db } from "./firebase";

// Custom hook to get tracking data in realtime.
const useDb = (docId) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Reference of a document where the tracking code matches
    const q = query(collection(db, "urls"), where("trackingCode", "==", docId));

    const unsubscribe = onSnapshot(q, (doc) => {
      doc.forEach((doc) => {
        const docData = doc.data();
        setData(docData);
      });
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

export const getDataFromDb = async (docId) => {
  const docRef = doc(db, "urls", docId);
  return getDoc(docRef);
};
