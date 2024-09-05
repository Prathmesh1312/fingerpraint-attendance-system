import firebase_app from "@/config/firebase";
import { getFirestore } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function deleteDocument(collection_name, id) {
    await deleteDoc(doc(db, collection_name, id));
    return({'status':"done"})
}



// --------------------------------DELETE Document open-------------------------\\

// --------------------------------DELETE Document close-------------------------\\