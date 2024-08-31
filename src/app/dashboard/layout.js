import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function layout({children}) {
  return (
    <>
      <div className='md:w-72 fixed hidden md:block'>
        <SideNav/>
      </div>
      <div className='md:ml-72'>
        <Header/>
        {children}
      </div>
    </>
  )
}

export default layout