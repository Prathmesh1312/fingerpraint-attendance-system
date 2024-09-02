import { collection, getDocs } from "firebase/firestore";

export default async function getDocuments(collection) {
  const querySnapshot = await getDocs(collection(db, "grade"));
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