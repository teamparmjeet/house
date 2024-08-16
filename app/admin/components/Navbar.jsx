"use client"
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
export default function Navbar() {
    return (
        <>
            <header className="bg-2   border-b border-[#aa8453] text-white px-2 md:px-4 py-2 flex justify-between items-center">
                <div className='bg-white rounded-md px-4 py-1 items-center flex'>

                    <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={101} height={38.625} />

                </div>
                <div className="flex items-center">
                    
                    <button
                        onClick={() => signOut()}
                        className='text-[#aa8453]  bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-[#aa8453] duration-500 font-semibold'
                    >
                        Logout
                    </button>

                </div>
            </header>

        </>
    )
}
