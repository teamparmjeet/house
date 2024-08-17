"use client"
import React, { useState } from 'react';
import { Menu,XCircleIcon } from 'lucide-react';

import Link from 'next/link';
export default function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className={`bg-2 text-white w-full sm:w-96 p-4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out md:w-64 fixed md:static inset-y-0 left-0 z-20`}>
        <div className='  flex justify-end'>
          <button
            className="md:hidden text-white mr-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <XCircleIcon size={24} color='#aa8453' />
          </button>
        </div>

        <ul className="space-y-4">
          <li><Link href="/admin" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Dashboard</Link></li>
          <li><Link href="/admin/page/property" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Manage Properties</Link></li>
          <li><Link href="/admin/page/addnew" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Add Propertie</Link></li>
         
        </ul>


      </div>
      <button
        className="md:hidden bg-3 rounded-br  text-white mr-4 absolute top-16"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} color='#aa8453' />
      </button>
    </>
  );
}
