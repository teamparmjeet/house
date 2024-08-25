"use client";
import React, { useState } from 'react';
import { Menu, XCircleIcon, Home, FileText, PlusCircle } from 'lucide-react'; // Import icons
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the usePathname hook

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: <Home size={20} /> },
    { name: 'Manage Properties', href: '/admin/page/property', icon: <FileText size={20} /> },
    { name: 'Add Property', href: '/admin/page/addnew', icon: <PlusCircle size={20} /> },
  ];

  return (
    <>
      <div className={`bg-2 text-white w-full sm:w-96 p-4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out md:w-64 fixed md:static inset-y-0 left-0 z-20`}>
        <div className='flex justify-end'>
          <button
            className="md:hidden text-white mr-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <XCircleIcon size={24} color='#aa8453' />
          </button>
        </div>

        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center text-sm px-4 py-2 rounded-md duration-150 ${pathname === item.href ? 'bg-[#ffffff38]' : 'hover:bg-[#ffffff38]'
                  } text-[#fff]`}
              >
                <span className="mr-2">{item.icon}</span> {/* Display the icon */}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="md:hidden bg-3 rounded-br text-white mr-4 absolute top-16"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} color='#aa8453' />
      </button>
    </>
  );
}
