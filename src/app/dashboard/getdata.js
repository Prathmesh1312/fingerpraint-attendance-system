import firebase_app from "@/config/firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

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

