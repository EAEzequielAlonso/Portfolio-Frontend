import React from 'react'

export default function Activity() {
  return (
    <div className = "bg-gradient-to-br from-neutral-600 to-neutral-800 px-4 py-8 rounded-xl shadow-lg">
        <div className= "px-3">icono</div>
        <div className= "flex flex-col gap-1">
            <h3 className= "font-semibold text-white text-xl">nombre act</h3>
            <p className= "text-white">resumen de la activ</p>
        </div>
    </div>
  )
}
