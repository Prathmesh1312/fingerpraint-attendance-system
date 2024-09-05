import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "@/config/firebase";

const db = getFirestore(app)


export default async function getDocuments(collection_name) {
  const querySnapshot = await getDocs(collection(db,collection_name));
  const tempDoc = []
  querySnapshot.forEach((doc) => {
      tempDoc.push({ id: doc.id, ...doc.data() })
  })
  return {tempDoc}  
}

// ----------------------------GET ALl document and its data OPEN--------------------\\

// 'use client'
// const alldocs = await getDocuments('grade')
// console.log(alldocs)

// ----------------------------GET ALl document and its data CLOSE--------------------\\