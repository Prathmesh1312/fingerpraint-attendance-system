'use client'
import React, { useEffect, useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function layout({children}) {
  const {user} = useKindeBrowserClient()
  const [name, setname] = useState()
  const [pic, setpic] = useState()
  useEffect(()=>{
    setname(user?.given_name)
    setpic(user?.picture)
  })
  return (
    <>
      <div className='md:w-72 fixed hidden md:block'>
        <SideNav/>
      </div>
      <div className='md:ml-72'>
        <Header name={name} pic={pic}/>
        {children}
      </div>
    </>
  )
}

export default layout