'use- client'

import getDocument from "@/app/dashboard/getdata";
// import addData from "@/app/dashboard/adddata";
import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import firebase_app from "@/config/firebase";
const db = getFirestore(firebase_app)
import { getFirestore, doc, setDoc } from "firebase/firestore";

// export async function GET() {
//   const getDatatofirestore =  await getDocument('grade','5th')
//   return NextResponse.json(getDatatofirestore)
  
// }

export async function GET() {
const querySnapshot = await getDocs(collection(db, "grade"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
return NextResponse.json(querySnapshot)
}

// --------------------------------ADD data open from api route-------------------------\\

// const data =
// {
//   id:3,
//   name:'data from route api this is second time to check ',
//   path:'/something'
// }

// const addDatatofirestore = addData('students','sumit', data)

// --------------------------------ADD data close-------------------------\\

// ------------------------GET Data Open--------------------\\

// const  getDatatofirestore = await getDocument('students','4OoS9XeUFnWDQnq5ODJ9')
// console.log(getDatatofirestore)

// ------------------------GET Data Close--------------------\\