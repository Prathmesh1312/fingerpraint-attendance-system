'use- client'

import { NextResponse } from "next/server";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "@/config/firebase";

const db = getFirestore(app)

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "grade"));
  const tempDoc = []
  querySnapshot.forEach((doc) => {
      tempDoc.push({ id: doc.id, ...doc.data() })
  })
  return NextResponse.json(tempDoc)
}