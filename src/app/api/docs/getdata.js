// Get data inside of specific document from a collection with its dcument id and collection name 

import app from "@/config/firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app)

export default async function getDocument(collection,id) {
    let result = null;
    let error = null;
    try {
      result = await getDoc(doc(db,collection,id))
      result = result.data()
      }
      catch (e) {
          error = e;
        }
      
  return { result };
}


// ------------------------GET Data Open--------------------\\
// 'use client'

// const  getDatatofirestore = await getDocument('students','4OoS9XeUFnWDQnq5ODJ9')
// console.log(getDatatofirestore)

// ------------------------GET Data Close--------------------\\
