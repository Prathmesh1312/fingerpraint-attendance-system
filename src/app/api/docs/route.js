'use- client'

import { NextResponse } from "next/server";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase_app from "@/config/firebase";


const db = getFirestore(firebase_app)

export async function GET() {

    const querySnapshot = await getDocs(collection(db, "grade"));
    const tempDoc = []
    querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() })
    })
    tempDoc.sort((a, b) => a.id - b.id)
    console.log(tempDoc)
    return NextResponse.json(tempDoc)
}