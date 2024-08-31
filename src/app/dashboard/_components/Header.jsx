'use-client'
import React from 'react'
import Image from 'next/image'
import userpic from '../../../../public/user.svg'

function Header() {
  return (
    <div className='p-5 shadow-sm border flex justify-between'>
      <div>
      
      </div>
      <div>
      <Image 
      src={userpic} width={35} height={35} alt='user-img' className='rounded-full'
      />
      </div> 
    </div>

  )
}

export default Header