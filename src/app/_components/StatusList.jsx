/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
'use-client'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../_services/GlobalAPI'
import moment from 'moment'
import Card from './Card'
import { GraduationCap, TrendingDown, TrendingUp } from 'lucide-react'
import AreaCharts from './AeraCharts'
import PieCharts from './PieCharts'

function StatusList({attendanceList,selectedMonth}) {
    const [totalStudent, setTotalStudents] = useState(0)
    const [present, setPresent] = useState(0)
    const [data, setdata] = useState()
    const today = moment().format("D");


    useEffect(()=>{
      GetAllStudentsList()
    },[attendanceList])


    const GetAllStudentsList=()=>{
      GlobalAPI.GetaAllStudents().then(res=>{
        setTotalStudents(res.data.tempDoc.length+1)
      })
    }


    const todaydata = (data)=>{
      setdata(data)
      setPresent(data.find(a=>a.day=today).presentStudnets)
    }


  return (
    <>
      <div className='border rounded-lg shadow-sm p-3 my-5'>
        <h2 className='font-bold text-lg'>Today's Attendance</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-6'>
        <Card icon={<GraduationCap/>} title={"Total Students"} value={totalStudent} />
        <Card icon={<TrendingUp/>} title={"Present Students"} value={present} />
        <Card icon={<TrendingDown/>} title={"Absent Students"} value={totalStudent-present} />
      </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='md:col-span-2 '>
          <AreaCharts attendanceList={attendanceList} selectedMonth={selectedMonth} totalStudent={totalStudent} todayData={todaydata}/>
        </div>
        <div>
          <PieCharts data={data} totalStudent={totalStudent}/>
        </div>
      </div>
    </> 
  )
}

export default StatusList