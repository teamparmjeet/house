"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Menu, XCircleIcon,User } from 'lucide-react';
import Link from 'next/link';
export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };



  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "", path: "/", icon: <Heart color="white" size={14} /> },
    { id: 3, title: "Service", path: "/" },
    { id: 4, title: "About Us", path: "/" },
    { id: 5, title: "", path: "/page/auth/login", icon: <User color="white" size={20} /> },
  ];

  return (
    <>

      <nav className={`fixed z-50 left-0 bg-2 right-0   `}>
        <div className="container w-[90%]  mx-auto">
          <div className="flex justify-between isolate p-2">
            <div className='bg-white order order-2 lg:order-1 rounded-md px-4 py-1 items-center flex'>
              <Link href="/">
                <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={101} height={38.625} />
              </Link>
            </div>


            <div className="relative order order-1 lg:order-2 w-full flex items-center lg:justify-end">
              <button className="block lg:hidden" onClick={handleToggle}>
                <Menu size={30} color="white" />
              </button>


              <ul
                className={`fixed top-0 right-0 w-full md:w-96 p-6 lg:p-0  h-full bg-[#222]  text-white transform ${show ? 'translate-x-0 backdrop-blur-md' : 'translate-x-full'} transition-transform duration-300 lg:relative lg:flex lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:gap-x-4 lg:items-center lg:justify-end z-50`}
              >
                <button className="block lg:hidden " onClick={handleToggle}>
                  <XCircleIcon size={24} color="#aa8453" />
                </button>
                {links.map((item) => (
                  <Link key={item.id} href={item.path}>
                    <li className="text-sm border-b lg:border-0 hover:text-[#aa8453] cursor-pointer rounded-md flex items-center gap-1 pt-4 px-2 lg:m-0 mt-2 pb-1 lg:p-0">
                      {item.icon}
                      {item.title}
                    </li>
                  </Link>
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
