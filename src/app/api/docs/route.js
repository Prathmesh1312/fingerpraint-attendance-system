'use- client'

import { NextResponse } from "next/server";
import app from "@/config/firebase";
import { collection, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import deleteDocument from "./deletedoc";
import addData from "./adddata";
import addattendance from "./addstudentattendance";
import getattendance from "./getstudentattnedance";
import { Cagliostro } from "next/font/google";
// import addData from "./adddata";
// import getDocuments from "./getalldoc";
// import deleteDocument from "./deletedoc";
const db = getFirestore(app)


// export async function GET() {

//     const querySnapshot = await getDocs(collection(db, "grade"));
//     const tempDoc = []
//     querySnapshot.forEach((doc) => {
//         tempDoc.push({ id: doc.id, ...doc.data() })
//     })
//     tempDoc.sort((a, b) => a.id - b.id)
//     console.log(tempDoc)
//     return NextResponse.json(tempDoc)
// }


// export async function GET() {

//     const docRef = await addDoc(collection(db, "students"), {
//         name: "Tokyo",
//         country: "Japan"
//       });
//       console.log("Document written with ID: ", docRef.id);
//     return NextResponse.json(docRef.id)
// }


// export async function GET() {
//   const docRef = await addData('students',{name:"prathmesh",grade:"7th"})
//   return NextResponse.json(docRef.id)
// }


// export async function GET() {
//   // const querySnapshot = await getDocs(collection(db,'students'));
//   // const tempDoc = []
//   // querySnapshot.forEach((doc) => {
//   //     tempDoc.push({ id: doc.id, ...doc.data() })
//   // })
//   // return NextResponse.json(tempDoc)
// const alldocs = await getDocuments('students')
// console.log(alldocs)
// return NextResponse.json(alldocs)
// }


// export async function DELETE(){
//   const result = deleteDocument('students', 'zbEhLX9YVMBv1NtauvrA')
//   return NextResponse.json(result)
// }


// export async function POST(data){
//   const data1 = await data.json() 
//   // console.log(data1.id)
//   // const id = String(data.id)
//   const docRef = await addData('students',data1)
//   return NextResponse.json(docRef)
// }


// export async function GET() {
//   const result = getattendance()
//   return NextResponse.json(result)
// }


// export async function GET() {
//   const data = {
//         day_01:{
//           check_in_time:new Date(),
//           check_out_time:serverTimestamp()
//         },
//         day_02:{
//           check_in_time:new Date(),
//           check_out_time:serverTimestamp()
//         },
//         day_03:{
//           check_in_time:new Date(),
//           check_out_time:serverTimestamp()
//         }
//   }
//   const result = await addattendance("stu_004","Nov_2024",data) 
//   console.log(result)
//   return NextResponse.json(result)
// }




// export async function GET() {
//   const result = await getattendance("stu_004", "Nov_2024")
//   return NextResponse.json(result)
// }

// export async function GET() {
//   const grade = '4th'
//   const month = 'Sep'
//   const temp = []
//   const temp1 = []
//   let tempDoc = []
//   const snap = await getDocs(query(collection(db, 'students'), where("grade",'==',grade)))
//   snap.forEach((id)=>{
//     temp.push(id.id)
//     temp1.push(id.data())
//   })
//   let i 
//   for(i=0;i<=temp.length;i++){
//     const res = await getDoc(doc(db, `students/${temp[i]}/attendance/${month}`))
//     tempDoc.push({id:res.id, ...res.data()})
//   }
//   tempDoc.unshift(temp1)
//   // console.log(tempDoc[3][0]['id'])
//   return NextResponse.json(tempDoc)
// }


export async function POST(data) {
  const data1 = await data.json() 
  return NextResponse.json(data1)
}