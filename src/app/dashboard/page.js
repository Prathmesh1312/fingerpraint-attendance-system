/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { redirect } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import MonthSelect from '../_components/MonthSelect';
import GradeSelect from '../_components/GradeSelect';
import StatusList from '../_components/StatusList';
import GlobalAPI from '../_services/GlobalAPI';
import BarChat from '../_components/AeraCharts';
import moment from 'moment';

export default  function Dashboard() {
  const { setTheme } = useTheme()
  const [selectedMonth, setSelectedMonth] = useState()
  const [selectedGrade, setSelectedGrade] = useState()
  const [attendanceList, setattendanceList] = useState()
  const [name, setname] = useState()
  const {user} = useKindeBrowserClient()
  useEffect(()=>{
    setTheme("dark")
    setname(user?.given_name)
  })
 

  const getStudentAttendance=()=>{
    const month = moment(selectedMonth).format('MMM')
    GlobalAPI.GetAttandanceList(selectedGrade,month).then((res)=>{
      setattendanceList(res.data)
    })
  }

  useEffect(()=>{
    getStudentAttendance()
  },[selectedGrade, selectedMonth])
 
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className='p-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl hidden md:block '>DashBoard</h2>
        <div className='flex items-center gap-4'>
          <MonthSelect selectedMonth={setSelectedMonth}/>
          <GradeSelect selectedGrade={setSelectedGrade}/>
        </div>
      </div>
      <div>
      <StatusList attendanceList={attendanceList} selectedMonth={selectedMonth}/>
      </div>
    </div> 
  ) 
  : (
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  );
}