import { NextResponse } from "next/server"
import { attendancefilter } from "../docs/attendancefilter"



export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const month = searchParams.get('month')
    const grade = searchParams.get('grade')
    const result = await attendancefilter(month,grade)
    return NextResponse.json(result)  
}