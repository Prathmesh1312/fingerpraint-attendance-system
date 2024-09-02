import firebase_app from "@/config/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(colllection, id, data) {
    let result = null;
    let error = null;
    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}



// --------------------------------ADD data open from api route-------------------------\\
// 'use client'

// const data =
// {
//   id:3,
//   name:'data from route api this is second time to check ',
//   path:'/something'
// }

// const addDatatofirestore = addData('students','sumit', data)

// --------------------------------ADD data close-------------------------\\