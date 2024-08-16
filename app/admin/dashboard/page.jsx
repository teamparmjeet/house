"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Menu,XCircleIcon } from 'lucide-react';
import Dashboard from "../components/Deshboard/Dashboard"
import Sidebar from "../components/sidebar/Sidebar"
export default function AdminDashboard() {
  const { data: session } = useSession();

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <>

      <div className="min-h-screen flex flex-col bg-gray-100">

        <header className="bg-2   border-b border-[#aa8453] text-white px-2 md:px-4 py-2 flex justify-between items-center">
          <div className='bg-white rounded-md px-4 py-1 items-center flex'>

            <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={101} height={38.625} />

          </div>
          <div className="flex items-center">
            <button
              className="md:hidden text-white  mr-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <button
              onClick={() => signOut()}
              className='text-[#aa8453]  bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-[#aa8453] duration-500 font-semibold'
            >
              Logout
            </button>

          </div>
        </header>


        <div className="flex flex-1">

          <div className={`bg-2 text-white w-full sm:w-96 p-4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out md:w-64 fixed md:static inset-y-0 left-0 z-20`}>
           <div className='  flex justify-end'>
           <button
              className="md:hidden text-white mr-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <XCircleIcon size={24} color='#aa8453' />
            </button>
           </div>
            <Sidebar />

          </div>


          <div className="flex-1 p-6">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}
