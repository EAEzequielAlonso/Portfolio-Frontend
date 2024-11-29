"use client"

import React from 'react'
import Aside from '../components/aside.component';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayout } from '../hooks/useLayout';

interface Props {
    children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  const pathname = usePathname()
  const { title, routes } = useLayout(pathname);
  return (
    <main className = "bg-neutral-900 p h-screen px-20 flex gap-5">
        <Aside/>
        <section className= "flex flex-col w-3/4 px-4 py-5 my-20 rounded-lg bg-neutral-800 relative">
            <header className= "flex justify-between">
              <h1 className= "text-white text-3xl font-bold mb-3 capitalize">{title}</h1>
              <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-700 rounded-bl-2xl rounded-tr-2xl border-b border-l border-neutral-600">
                <ul className="flex gap-10 ">
                  {
                    routes.map ( (route) => {
                      return <Link key= {route.path} className = {`${pathname == route.path ? "text-yellow-300" : "text-neutral-400"} text-neutral-400 font-semibold capitalize hover:text-neutral-300`} href={route.path}>{route.name}</Link>
                    })
                  }
                </ul>
              </nav>
            </header>
            {children}
        </section>
    </main>
  )
}
