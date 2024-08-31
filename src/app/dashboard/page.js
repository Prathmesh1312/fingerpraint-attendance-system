'use client'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { redirect } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import addData from './adddata';
import getDocument from './getdata';

export default  function Dashboard() {
  const { setTheme } = useTheme()

  useEffect(()=>{
    setTheme("dark")
  })
 
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div>Loading...</div>;

// ------------------------ADD Data Open--------------------\\

// const data =
// {
//   id:7,
//   Grade:'11th',
// }

// const addDatatofirestore = addData('grade','11th', data)
// console.log(addDatatofirestore)

// ------------------------ADD Data Close--------------------\\

// ------------------------GET Data Open--------------------\\

const getDatatofirestore =  getDocument('grade','5th')
console.log(getDatatofirestore)

// ------------------------GET Data Close--------------------\\

  return isAuthenticated ? (
    <div >
      Admin Hi from dashboard !!!!!!!! 
    </div> 
  ) : (
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  );
}