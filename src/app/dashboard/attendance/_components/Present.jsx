import Image from 'next/image'
import present from '../../../../../public/green.svg'
import absent from '../../../../../public/red.svg'
import React from 'react'

export default function Present(params) {
  return (
      <Image
          alt={`${params.value}`}
          width={50}
          height={50}
          src = {params.value ? present : absent }
      />
  )
}
