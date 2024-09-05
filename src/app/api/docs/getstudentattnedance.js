import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getattendance(stu_id,month) {
    const docRef = doc(db, "students", stu_id, 'attendance', month);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}