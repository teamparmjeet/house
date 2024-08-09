"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bed, Bath, Square, LocateIcon, Home } from 'lucide-react';

export default function Card() {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>


            <Carousel responsive={responsive} infinite={true} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
                <div className="rounded-2xl group overflow-hidden mx-2 bg-white grid lg:grid-cols-7">
                    <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col p-4 lg:p-6">
                        <div className='flex  bg-3 p-3 justify-center'>
                            <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" className='rounded-md' width={80} height={80} />
                          
                        </div>

                        <div className='p-4'>
                            <h3 className='text-2xl font-bold text-1 mb-2'>₹ 39.9 L</h3>
                            <p className='font-semibold text-lg text-2 mb-4'>Samanvay Group</p>
                            <div className='flex items-center gap-x-2 mb-4'>
                                <LocateIcon width={15} color='#aa8453' />
                                <span className='text-sm text-2 font-medium'>2305 Frog Lane Overlandpk, MO 66210</span>
                            </div>
                            <div className="flex gap-x-6 mb-4">
                                <div className='flex items-center gap-x-1'><Bed width={15} color='#222' /><span className='text-sm text-2'>2</span></div>
                                <div className='flex items-center gap-x-1'><Bath width={15} color='#222' /><span className='text-sm text-2'>1</span></div>
                                <div className='flex items-center gap-x-1'><Square width={15} color='#222' /><span className='text-sm text-2'>1200 SQFT</span></div>
                            </div>
                            <button className='bg-1 text-white rounded-lg px-4 py-2 w-full font-medium'>
                                Contact
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative order-1 lg:order-2">
                        <Image alt='' className='object-cover absolute opacity-0 group-hover:opacity-100 duration-300 lg:h-96 h-52  w-full' src="/property-grid-3.png" width={982} height={880} />
                        <Image alt='' className='object-cover absolute opacity-100 group-hover:opacity-0 duration-300 lg:h-96 h-52  w-full' src="/image/matt-jones-xpDHTc-pkog-unsplash.webp" width={982} height={880} />
                        <div className=' absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b filter grayscale  from-transparent via-transparent to-black/50'></div>
                    </div>
                </div>



            </Carousel>

        </>
    )
}
