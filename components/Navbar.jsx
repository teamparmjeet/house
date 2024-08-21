"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Menu, XCircleIcon, User } from 'lucide-react';
import Link from 'next/link';
import Ani from './button/ani';
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  //   { id: 2, title: "", path: "/", icon: <Heart color="white" size={14} /> },
  //   { id: 3, title: "Service", path: "/" },
  //   { id: 4, title: "About Us", path: "/" },
  //   { id: 5, title: "", path: "/page/auth/login", icon: <User color="white" size={20} /> },


  return (
    <>

      <nav className={`z-50 left-0 right-0 ${scrolled ? 'bg-2 shadow-lg fixed top-0' : 'absolute bg-gradient-to-b from-black to-transparent'} transition-all duration-300`}>
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
                className={`fixed overflow-scroll lg:overflow-hidden top-0 right-0 w-full md:w-96 p-6 lg:p-0  h-full bg-[#222]   transform ${show ? 'translate-x-0 backdrop-blur-md' : 'translate-x-full'} transition-transform duration-300 lg:relative lg:flex lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:gap-x-4   lg:items-center lg:justify-end z-50`}
              >
                <button className="block lg:hidden " onClick={handleToggle}>
                  <XCircleIcon size={24} color="#aa8453" />
                </button>
                <Link href="/" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg  lg:shadow-none text-white px-5 lg:px-3 py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="text-sm font-semibold  text-gray-100 hover:text-white cursor-pointer rounded-md flex items-center gap-1  px-2  pb-1 lg:p-0">Home</li>
                </Link>
                <Link href="/" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg  lg:shadow-none text-white px-5 lg:px-3 py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="text-sm font-semibold  text-gray-100 hover:text-white cursor-pointer rounded-md flex items-center gap-1  px-2  pb-1 lg:p-0">For Buyers</li>
                </Link>
                <Link href="/" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg  lg:shadow-none text-white px-5 lg:px-3 py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="text-sm font-semibold  text-gray-100 hover:text-white cursor-pointer rounded-md flex items-center gap-1  px-2  pb-1 lg:p-0">For Tenants</li>
                </Link>
                <Link href="/" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg  lg:shadow-none text-white px-5 lg:px-3 py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="text-sm font-semibold  text-gray-100 hover:text-white cursor-pointer rounded-md flex items-center gap-1  px-2  pb-1 lg:p-0">For Onwers</li>
                </Link>
                <Link href="/" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg  lg:shadow-none text-white px-5 lg:px-3 py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="text-sm lg:text-sm font-semibold    cursor-pointer rounded-md flex items-center gap-1  px-2 lg:m-0  pb-1 text-white lg:text-black lg:bg-white lg:px-5  lg:py-1">Post property <Ani /> </li>
                </Link>

                <Link href="/page/auth/login" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg px-5 lg:px-3  lg:shadow-none text-white  py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="cursor-pointer rounded-full p-2 inline-block shadow-md">
                    <Heart color="#FF0000" size={16} />
                  </li>
                  <span className="font-semibold text-sm">Saved</span>
                </Link>

                <Link href="/page/auth/login" className='flex items-center gap-x-1 mt-5 lg:mt-0  shadow-lg lg:shadow-none text-white px-5 lg:px-3 py-1 rounded-full  transition duration-300 ease-in-out transform '>
                  <li className="cursor-pointer bg-white rounded-full p-2 inline-block shadow-md">
                    <User color="#4A4A4A" size={16} />
                  </li>
                  <span className="font-semibold text-sm">Admin</span>
                </Link>

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
