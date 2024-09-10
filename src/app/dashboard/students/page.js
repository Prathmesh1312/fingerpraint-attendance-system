/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from "react";
import AddNewStudent from "./_componets/AddNewStudent";
import GlobalAPI from "@/app/_services/GlobalAPI";
import StudentListTable from "./_componets/StudentListTable";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";


function page() {

  const [studentList, setStudentList] = useState([])

  useEffect(()=>{
    GetAllStudentsList()
  },[])

  const GetAllStudentsList=()=>{
    GlobalAPI.GetaAllStudents().then(res=>{
      // console.log(res.data)
      setStudentList(res.data)
    })
  }
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <>
      <div className="p-7">
        <h2 className="font-bold text-2xl flex justify-between items-center">
          Students
          <AddNewStudent refershData={GetAllStudentsList}/>
        </h2>
        <StudentListTable studentList={studentList} refreshData={GetAllStudentsList}/>
      </div>
    </>
  ) : (
    redirect('/api/auth/login?post_login_redirect_url=/dashboard/students')
  );
}

export default page;
