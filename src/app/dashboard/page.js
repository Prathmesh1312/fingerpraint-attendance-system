'use client'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { redirect } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import addData from './adddata';
import getDocument from '../api/docs/getdata';

export default  function Dashboard() {
  const { setTheme } = useTheme()

  useEffect(()=>{
    setTheme("dark")
  })
 
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div >
      Admin Hi from dashboard !!!!!!!! 
    </div> 
  ) : (
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  );
}