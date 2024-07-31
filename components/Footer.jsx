import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <div className="bg-[#191919] p-5 border-b border-b-[#7f7f7f]">
                <div className=' mb-5 grid lg:grid-cols-4 md:grid-cols-2 gap-4 rounded-md p-2 '>
                    <div  className=' lg:col-span-1 md:col-span-2'>
                        <Image className=' bg-white rounded-md px-2' alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={202} height={77.25} />
                    </div>
                    <div  className=' lg:col-span-1 md:col-span-1'>
                        <span className=' uppercase text-white text-sm'>follow</span>
                        <ul className=' flex gap-5 w-full mt-4'>
                            <li><Link href=""><Facebook color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Instagram color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Twitter color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Linkedin color='#7F7F7F' width={20} /></Link></li>
                            <li><Link href=""><Youtube color='#7F7F7F' width={20} /></Link></li>

                        </ul>
                    </div>
                    <div className=' lg:col-span-2 md:col-span-1'>
                        <span className=' uppercase text-white text-sm'>Quick Links</span>
                        <ul className=' lg:flex  w-full mt-4 text-[#7f7f7f]  capitalize  rounded-md px-4'>
                            <li className=' mb-2 hover:bg-transparent hover:text-white rounded-md px-2'><Link href="">home</Link></li>
                            <li className=' mb-2 hover:bg-transparent hover:text-white rounded-md px-2'><Link href="" className=' flex gap-2'>Saved  <Heart color='#7f7f7f' width={16} /></Link></li>
                            <li className=' mb-2 hover:bg-transparent hover:text-white rounded-md px-2'><Link href="">Service</Link></li>
                            <li className=' mb-2 hover:bg-transparent hover:text-white rounded-md px-2'><Link href="">List Property</Link></li>
                            <li className=' mb-2 hover:bg-transparent hover:text-white rounded-md px-2'><Link href="">About Us</Link></li>

                        </ul>
                    </div>

                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                    <div className="lg:col-span-1 md:col-span-1 text-[#7F7F7F] text-sm border-b border-b-[#7f7f7f] lg:border-b-0">
                        <ul className=' leading-6'>
                            <li className=' hover:underline'><Link href="">Real estate in Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Bengaluru</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Hyderabad</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Pune</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Cheenai</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Delhi</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Gurgaon</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Noida</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Kolkata</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Ahmedabad</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Thane</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Navi Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">Real estate in Ghaziabad</Link></li>

                        </ul>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 text-[#7F7F7F] text-sm border-b border-b-[#7f7f7f] lg:border-b-0">
                        <ul className=' leading-6'>
                            <li className=' hover:underline'><Link href="">Flats in Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Bengaluru</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Hyderabad</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Pune</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Cheenai</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Delhi</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Gurgaon</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Noida</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Kolkata</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Ahmedabad</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Thane</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Navi Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">Flats in Ghaziabad</Link></li>

                        </ul>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 text-[#7F7F7F] text-sm border-b border-b-[#7f7f7f] lg:border-b-0">
                        <ul className=' leading-6'>
                            <li className=' hover:underline'><Link href="">New Projects in Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Bengaluru</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Hyderabad</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Pune</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Cheenai</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Delhi</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Gurgaon</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Noida</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Kolkata</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Ahmedabad</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Thane</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Navi Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">New Projects in Ghaziabad</Link></li>

                        </ul>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 text-[#7F7F7F] text-sm border-b border-b-[#7f7f7f] lg:border-b-0">
                        <ul className=' leading-6'>
                            <li className=' hover:underline'><Link href="">Commercial Property in Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Bengaluru</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Hyderabad</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Pune</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Cheenai</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Delhi</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Gurgaon</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Noida</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Kolkata</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Ahmedabad</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Thane</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Navi Mumbai</Link></li>
                            <li className=' hover:underline'><Link href="">Commercial Property in Ghaziabad</Link></li>

                        </ul>
                    </div>


                </div>
            </div>


        </>
    )
}
