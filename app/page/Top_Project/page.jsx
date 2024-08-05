import React from 'react'
import Image from 'next/image'
import AllProjectCard from "@/components/card/allprojectpage/Card"
import { Search } from 'lucide-react';
import LatestCard from "@/components/card/latest/Card"
export default function TopProject() {
    return (
        <>

            <header className='bg-[#5d46db] py-2 fixed w-full top-0 left-0 z-50'>
                <div className=' mx-auto h-full flex items-center  px-4 gap-x-3'>
                    <div className='order-1 bg-white rounded-md px-4 py-1 items-center flex '>
                        <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={50.50} height={19.312} />
                    </div>
                    <div className='order-3 lg:order-2 text-white border-l ps-3 text-sm'>
                        Buy In   <select name="" id="" className=' bg-transparent   text-white rounded focus:border-none focus:outline-none'>
                            <option value="" className=' text-black'>Jaipur</option>
                            <option value="" className=' text-black'>Delhi</option>
                            <option value="" className=' text-black'>Noida</option>
                        </select>
                    </div>
                    <div className='order-2 lg:order-2 relative flex-1'>
                        <input
                            type="search"
                            placeholder='Enter Locality'
                            className='w-full text-blue-400 font-light border border-gray-300 rounded pl-10 pr-4 py-1 focus:outline-none'
                            name=""
                            id=""
                        />
                        <Search
                            size={20}
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                        />
                    </div>
                </div>
            </header>



            <main className='bg-[#f4f4f4] pt-4'>
                <div className="container mx-auto p-4 my-4">

                    <div className="grid lg:grid-cols-7 gap-4">
                        <div className="col-span-5 p-4">

                            <div className='bg-gray-100 rounded-t-md pb-2'>
                                <div className='flex flex-wrap justify-between items-end'>
                                    <div>
                                        <p className='text-gray-600 text-sm hidden md:block'>Showing 1 - 30 of 1697</p>
                                        <p className='text-sm md:text-lg font-semibold'>Ready to Move-In Projects in Jaipur</p>
                                    </div>
                                    <div className='text-xs md:text-sm flex items-center gap-x-2'>
                                        <p>Sort by:</p>
                                        <select name="" id="" className='px-2 py-1 shadow  rounded focus:border-none focus:outline-none'>
                                            <option value="">Relevance</option>
                                            <option value="">Relevance1</option>
                                            <option value="">Relevance2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='overflow-auto bg-white h-[calc(100vh-5rem)] p-2'>
                                {[...Array(15)].map((_, index) => (
                                    <AllProjectCard key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 p-4 hidden lg:block">
<LatestCard/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
