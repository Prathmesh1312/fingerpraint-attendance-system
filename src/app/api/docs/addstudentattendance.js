import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


export default async function addattendance(stu_id,month,data) {
    const result = await setDoc(doc(db, "students", stu_id, 'attendance', month), data, {merge:true});
    return NextResponse.json({'status':"done"})
  }