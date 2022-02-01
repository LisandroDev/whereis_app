import { initializeApp } from "firebase/app";
import { Timestamp } from "firebase/firestore";
import { getFirestore, getDoc, doc, Firestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  authDomain: "whereis-c254a.firebaseapp.com",
  projectId: "whereis-c254a",
});

const db = getFirestore();

async function fetchCoords(id) {
  const docRef = doc(db, "charactersCoords", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.data());
    console.log(Timestamp.now());
    return docSnap.data();
  } else {
    return null;
  }
}

export default fetchCoords;
