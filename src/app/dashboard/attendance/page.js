/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import GradeSelect from '@/app/_components/GradeSelect'
import MonthSelect from '@/app/_components/MonthSelect'
import GlobalAPI from '@/app/_services/GlobalAPI'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import React, { useState } from 'react'
import AttendanceGrid from './_components/AttendanceGrid'

function page() {
  const [selectedMonth, setselectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setattendanceList] = useState();

  const onSearchHandler=() => {
    const month = moment(selectedMonth).format('MMM')
    GlobalAPI.GetAttandanceList(selectedGrade,month).then((res)=>{
      setattendanceList(res.data)
      console.log(res.data)
    })
  } 


  return (
    <div className='p-7'>
        <h2 className='font-bold text-2xl flex justify-between items-center'>Attendance</h2>
        {/* Search Option */}
            <div className='flex gap-5 my-5 border rounded-lg inset-0 p-5 shadow-sm'>
              <div className='flex gap-2 items-center'>
                <label>Select Month :</label>
                <MonthSelect selectedMonth={(value)=>{setselectedMonth(value);}}/>
              </div>
              <div className='flex gap-2 items-center'>
                <label>Select Grade :</label>
                <GradeSelect selectedGrade={(value)=>{setSelectedGrade(value);}}/>
              </div>
              <Button onClick={()=>{onSearchHandler()}} className='p-6 rounded-lg border '>Search</Button>
            </div>
        {/* Student Attendance Grid */}
        <AttendanceGrid attendanceList={attendanceList} selectedMonth={selectedMonth} />
    </div>
  )
}

export default page