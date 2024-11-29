import React from 'react'
import Image from 'next/image'

export default function Info() {
  return (
    <div className="flex gap-2 w-full">
        <div className="bg-gradient-to-br from-neutral-700 to-neutral-800">
            <Image src="" alt="icono" />
        </div>
        <div>
            <h1 className="text-neutral-400 text-sm uppercase">Correo</h1>
            <p className= "text-white text-sm">eze.g.alonso@gmail.com</p>
        </div>
    </div>
  )
}
