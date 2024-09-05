'use- client'

import { NextResponse } from "next/server";
import addData from "../docs/adddata";
import getDocuments from "../docs/getalldoc";
import deleteDocument from "../docs/deletedoc";


export async function POST(data) {
    const data1 = await data.json() 
    const docRef = await addData(data1)
    return NextResponse.json(docRef)
}


export async function GET() {
    const alldocs = await getDocuments('students')
    return NextResponse.json(alldocs)
}


export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id')
    const result = await deleteDocument('students',id)
    return NextResponse.json(result)
}