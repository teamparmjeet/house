"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { StarIcon, Check, ArrowDown, ArrowUp, Calendar, Home, MapPin, Tag, Info, Phone } from 'lucide-react';

export default function Card({ projdata }) {
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
                {projdata.images.length > 0 && (
                    <Image
                        src={projdata.images[0]}
                        className="rounded-md object-cover h-full w-full"
                        width={200}
                        height={100}
                        alt="First Image"
                    />
                )}

                <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent rounded-md to-black/60'></div>
            </div>
            <div className='flex flex-col justify-between sm:col-span-5 bg-gradient-to-b from-white via-indigo-50'>
                <div>
                    <div className='flex flex-wrap gap-x-2 items-center'>
                        <h4 className='text-sm font-semibold'>{projdata.price} ₹</h4>

                    </div>
                    <div className='text-xs font-medium flex gap-x-2 items-center mt-1'>
                        <span className='font-semibold text-2'>{projdata.type}</span>
                        <div className='h-4 gap-x-1 bg-1 px-1 flex items-center text-white rounded'>{projdata.energyRating}</div>
                        <div className='h-4 bg-gray-200 text-2 font-semibold text-[10px] flex items-center gap-x-1 rounded-md px-1'>RERA <Check width={12} color='green' /></div>
                    </div>
                    <p className=' font-semibold text-[11px]'>By Real State</p>
                    <p className='text-xs text-gray-500 my-1 font-semibold'><span className='text-2'>{projdata.bedrooms} BHK Flat</span> for sale in {projdata?.address?.city}</p>

                    <div className='relative hidden md:block'>
                        <div className={`z-50 rounded-md flex ${isVisible ? 'shadow-lg absolute left-0 right-0 bg-white z-50 border' : 'bg-gray-100'}`}>
                            <div className='grid grid-cols-3 w-full p-1 text-xs text-gray-500'>
                                <div className="col-span-1 px-1 my-1 flex items-center  font-semibold gap-x-2">
                                    <Calendar width={10} color="black" /><span>Possession Date <br /><span className='text-black text-[12px]'>Aug. 2023</span></span>
                                </div>
                                <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2 border-l-2">
                                    <Tag width={10} color="black" /><span>Average Price<br /><span className='text-black text-[12px]'>₹{projdata.price}</span></span>
                                </div>
                                <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2 border-l-2">
                                    <Info width={10} color="black" /><span>Possession Status<br /><span className='text-black text-[12px]'>{projdata.status}</span></span>
                                </div>
                                {isVisible && (
                                    <>
                                        <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2">
                                            <Home width={10} color="black" /><span>Sizes<br /><span className='text-black text-[12px]'>{projdata.size}</span></span>
                                        </div>
                                        <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2 border-l-2">
                                            <MapPin width={10} color="black" /><span>Locality<br /><span className='text-black text-[12px]'>{projdata.address?.street},{projdata.address?.city},{projdata.address?.state}</span></span>
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
                        <div className="flex-grow text-[12px] line-clamp-2 text-2 ">
                            {projdata.description}

                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    );
}
