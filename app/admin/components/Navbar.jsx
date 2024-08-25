"use client";
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { User, Bell, Search } from 'lucide-react';
import Link from 'next/link';
 

export default function Navbar() {
    const { data: session } = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNotificationClick = () => {
        router.push('/notifications'); // Update this path if needed
    };

    return (
        <>
            <header className="bg-2  text-white px-2 md:px-4 py-2 flex justify-between items-center">
                <div className='bg-white rounded-md px-4 py-1 flex items-center'>
                    <Image
                        alt='Logo'
                        src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png"
                        width={101}
                        height={38.625}
                    />
                </div>
                <form   className="hidden md:flex items-center bg-[#ffffff38] rounded-md overflow-hidden">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="bg-transparent text-white px-4 py-2 w-72 text-sm focus:outline-none"
                    />
                    <button type="submit" className="flex items-center justify-center px-2">
                        <Search color="#fff" size={20} />
                    </button>
                </form>
                <div className="flex items-center relative">
                    {session?.user && (
                        <>
                            <div className="flex items-center bg-[#ffffff38] px-4 py-2 rounded-md cursor-pointer" onClick={toggleDropdown}>
                                <User color="#fff" size={20} />
                                <span className="text-sm ms-1">{session.user.name}</span>
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-sm shadow-lg">
                                    <ul className="py-2">
                                        <li >
                                            <Link className="inline-block px-4 w-full py-2 hover:bg-gray-100 cursor-pointer" href="/admin/page/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <button  className="inline-block w-full text-start px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => signOut()}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>
                    )}

                    <div className="flex items-center cursor-pointer ml-4" onClick={handleNotificationClick}>
                        <Bell color="#fff" size={20} />
                    </div>
                </div>
            </header>
        </>
    );
}
