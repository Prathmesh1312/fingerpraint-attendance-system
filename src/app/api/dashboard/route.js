const { NextResponse } = require("next/server")

export async function GET(req){
    const seacrhParams = req.nextUrl.seacrhParams
    const date = seacrhParams.get('date')
    const grade = seacrhParams.get('grade')
    // const result = 
    return NextResponse.json(result)
}