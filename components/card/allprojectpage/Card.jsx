"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { StarIcon, Check, ArrowDown, ArrowUp, Calendar, Home, MapPin, Tag, Info, Phone } from 'lucide-react';

export default function Card() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className='rounded-md bg-white mb-4 hover:shadow border p-2 gap-2 grid grid-cols-1 sm:grid-cols-7'>
            <div className='relative overflow-hidden sm:col-span-2'>
                <Image  src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif" className='rounded-md object-center h-full w-full' width={200} height={100} alt='' />
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent rounded-md to-black/60'></div>
            </div>
            <div className='flex flex-col sm:col-span-5 bg-gradient-to-b from-white via-indigo-50'>
                <div className='flex flex-wrap gap-x-2 items-center'>
                    <h4 className='text-sm font-semibold'>₹1.08 Cr - 1.17 Cr</h4>
                    <p className='text-xs text-indigo-700 font-medium'>EMI starts at ₹53.62 K</p>
                </div>
                <div className='text-xs font-medium flex gap-x-2 items-center mt-1'>
                    <span className='font-medium'>Celesta</span>
                    <div className='h-4 gap-x-1 bg-indigo-800 px-1 flex items-center text-white rounded'>5 <StarIcon width={10} color='white' /></div>
                    <div className='h-4 bg-gray-200 text-[10px] flex items-center gap-x-1 rounded-md px-1'>RERA <Check width={12} color='green' /></div>
                </div>
                <p className='text-gray-500 text-[11px]'>By Kohinoor Buildcom</p>
                <p className='text-xs text-gray-500 my-1'><span className='text-gray-700 font-semibold'>3 BHK Flat</span> for sale in Vaishali Nagar, Jaipur</p>

                <div className='relative hidden md:block'>
                    <div className={`z-50 rounded-md flex ${isVisible ? 'shadow-lg absolute left-0 right-0 bg-white border' : 'bg-gray-100'}`}>
                        <div className='grid grid-cols-3 w-full p-1 text-xs text-gray-500'>
                            <div className="col-span-1 px-1 my-1 flex items-center gap-x-2">
                                <Calendar width={10} color="black" /><span>Possession Date <br /><span className='text-black text-[12px]'>Aug. 2023</span></span>
                            </div>
                            <div className="col-span-1 px-1 my-1 flex items-center gap-x-2 border-l-2">
                                <Tag width={10} color="black" /><span>Average Price<br /><span className='text-black text-[12px]'>₹7.49 K/sq.ft</span></span>
                            </div>
                            <div className="col-span-1 px-1 my-1 flex items-center gap-x-2 border-l-2">
                                <Info width={10} color="black" /><span>Possession Status<br /><span className='text-black text-[12px]'>Ready to Move</span></span>
                            </div>
                            {isVisible && (
                                <>
                                    <div className="col-span-1 px-1 my-1 flex items-center gap-x-2">
                                        <Home width={10} color="black" /><span>Sizes<br /><span className='text-black text-[12px]'>1442 - 1560 sq.ft.</span></span>
                                    </div>
                                    <div className="col-span-1 px-1 my-1 flex items-center gap-x-2 border-l-2">
                                        <MapPin width={10} color="black" /><span>Locality<br /><span className='text-black text-[12px]'>Vaishali Nagar, Jaipur</span></span>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className='bg-gray-200 flex px-2 items-center cursor-pointer' onClick={toggleVisibility}>
                            {isVisible ? <ArrowUp width={12} color='black' /> : <ArrowDown width={12} color='black' />}
                        </div>
                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className={`flex-grow text-[12px] z-50 text-gray-500 ${isExpanded ? 'absolute -top-12  p-2 bg-white shadow' : 'line-clamp-1'}`}>
                        Kohinoor Buildcom has launched Celesta in Vaishali Nagar, Jaipur. A residential project spread over 0.22 Acres, it offers ample amount of facilities for residents. The project was launched in May 2023. It offers Ready to Move units. Popular configurations include 3 BHK units. As per the area plan, units are in the size range of 1442.0 - 1560.0 sq.ft. There are 30 units in Celesta. Overall, there is 1 building.
                        <button className="text-blue-500 text-xs ml-2" onClick={toggleExpansion}>
                            {isExpanded ? 'collapse' : 'More'}
                        </button>
                    </div>
                    <button className={`text-blue-500 text-xs ml-2 ${isExpanded ? "hidden" : ""}`} onClick={toggleExpansion}>
                        {isExpanded ? 'collapse' : 'More'}
                    </button>
                </div>

                <div className='flex justify-between items-center mt-2  rounded-md px-1'>
                    <div className='flex'>
                        <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={51.5} height={19.312} />
                    </div>
                    <div><button className='bg-green-500 text-white rounded-md px-2 py-1 gap-x-2 flex'><Phone width={15} color='white' />Contact Developer</button></div>
                </div>
            </div>
        </div>
    );
}
