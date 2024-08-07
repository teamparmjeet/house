import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './button/Btn2';

export default function Footer() {
    const links = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Saved", path: "/", icon: <Heart color="white" size={14} /> },
        { id: 3, title: "Service", path: "/" },
        { id: 4, title: "About Us", path: "/" },
        { id: 5, title: "List Property", path: "/" },
    ];

    return (
        <div className='bg-[#12171f] text-white'>
            <div className="container mx-auto py-10 px-4">
                <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-5">
                    <div className="lg:col-span-2 md:col-span-2 mb-6">
                        <div className='bg-white mb-3 h-12 inline-block rounded-md px-4 py-1 items-center'>
                            <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={101} height={38.625} />
                        </div>
                        <p className='mb-6 text-sm leading-6'>The site provides advanced search filters and personalized recommendations to match buyers with their ideal homes.</p>
                        <ul className='flex gap-4'>
                            <li><Link href=""><Facebook color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Instagram color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Twitter color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Linkedin color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Youtube color='#7F7F7F' width={20} /></Link></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 mb-6">
                        <h4 className='text-lg mb-4 font-semibold h-12'>Contact Info</h4>
                        <p className='text-sm mb-2 leading-6'>Unicoder Design Agency 301 The Greenhouse, Custard Factory, London, E3 8DY.</p>
                        <p className='text-sm mb-2'>+1 246-345-0695</p>
                        <p className='text-sm mb-2'>helpline@homex.com</p>
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 mb-6">
                        <h4 className='text-lg mb-4 font-semibold h-12'>Quick Links</h4>
                        <ul className='text-sm'>
                            {links.map((item) => (
                                <li key={item.id} className="mb-2 hover:text-[#AA8453] cursor-pointer flex items-center gap-x-1">
                                    {item.title}
                                    {item.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 mb-6">
                        <h4 className='text-lg mb-4 font-semibold h-12'>Appointment</h4>
                        <p className='text-sm mb-4'>Book your appointment now</p>
                        <Button title="Register Now" />
                    </div>
                </div>
                <div className='text-center py-2 border-t border-gray-700 text-xs'>
                    © 2022 Uniland. All rights reserved.
                </div>
            </div>
        </div>
    );
}
