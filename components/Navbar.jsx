"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Menu, XCircleIcon } from 'lucide-react';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };



  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Saved", path: "/", icon: <Heart color="white" size={14} /> },
    { id: 3, title: "Service", path: "/" },
    { id: 4, title: "List Property", path: "/" },
    { id: 5, title: "About Us", path: "/" },
  ];

  return (
    <>

      <nav className={`fixed left-0 right-0 z-50  `}>
        <div className="container  lg:w-[90%] mx-auto">
          <div className="flex justify-between isolate p-2 rounded-b-xl bg-[#5e23dc] shadow-lg ring-1 ring-black/5">
            <div className='bg-white rounded-md px-4 py-1 items-center flex'>
              <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={101} height={38.625} />
            </div>

            <div className="relative w-full flex items-center justify-end">
              <button className="block lg:hidden" onClick={handleToggle}>
                <Menu size={24} color="white" />
              </button>

            
              <ul
                className={`fixed top-0 right-0 w-96 p-4 h-full bg-indigo-800 text-white transform ${show ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:relative lg:flex lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:gap-x-4 lg:items-center lg:justify-end z-50`}
              >
                <button className="block lg:hidden " onClick={handleToggle}>
                  <XCircleIcon size={24} color="white" />
                </button>
                {links.map((item) => (
                  <li key={item.id} className="text-sm border-b lg:border-0 hover:bg-blue-200/20 cursor-pointer rounded-md flex items-center gap-1 pt-4 px-2 lg:m-0 mt-2 pb-1 lg:p-0">
                    {item.icon}
                    {item.title}
                  </li>
                ))}
              </ul>

            
              {show && (
                <div
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={handleToggle}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
   
    </>
  );
}
