import firebase_app from "@/config/firebase";
import { getFirestore, setDoc, doc, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function addData(data) {
    // console.log(data)
    await setDoc(doc(db, "students", data.id), data);
    return {"status":"Done"}
}


// --------------------------------ADD data open from api route-------------------------\\

// --------------------------------ADD data close-------------------------\\