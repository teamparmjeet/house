"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Card() {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <>


            <Carousel responsive={responsive} infinite={true} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
                <div className=" mx-2">
                    <div className="relative group rounded-md overflow-hidden duration-300">
                        <Image className=' object-cover' src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif" alt='' width={400} height={300} />
                        <div className="absolute bg-gradient-to-b from-transparent   to-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center duration-300">
                            <div className="flex border border-gray-800 overflow-hidden justify-center items-center opacity-0 group-hover:opacity-100 h-0 w-0 group-hover:h-24 group-hover:w-24 rounded-full bg-black/60 text-white duration-300">
                                <span className=' duration-300 group-hover:opacity-100 flex flex-col text-center capitalize font-bold'>1682 <span>properties</span></span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 text-white p-3 text-center">
                            <h4 className=' font-semibold'>Ready to Move-In</h4>
                            
                          <p className=' text-xs'>  Comfortable homes available for immediate use</p>
                        </div>
                    </div>
                </div>

                <div className=" mx-2">
                    <div className="relative group rounded-md overflow-hidden duration-300">
                        <Image className=' object-cover' src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif" alt='' width={400} height={300} />
                        <div className="absolute bg-gradient-to-b from-transparent   to-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center duration-300">
                            <div className="flex border border-gray-800 overflow-hidden justify-center items-center opacity-0 group-hover:opacity-100 h-0 w-0 group-hover:h-24 group-hover:w-24 rounded-full bg-black/60 text-white duration-300">
                                <span className=' duration-300 group-hover:opacity-100 flex flex-col text-center capitalize font-bold'>1682 <span>properties</span></span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 text-white p-3 text-center">
                            <h4 className=' font-semibold'>Ready to Move-In</h4>
                            
                          <p className=' text-xs'>  Comfortable homes available for immediate use</p>
                        </div>
                    </div>
                </div>


                <div className=" mx-2">
                    <div className="relative group rounded-md overflow-hidden duration-300">
                        <Image className=' object-cover' src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif" alt='' width={400} height={300} />
                        <div className="absolute bg-gradient-to-b from-transparent   to-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center duration-300">
                            <div className="flex border border-gray-800 overflow-hidden justify-center items-center opacity-0 group-hover:opacity-100 h-0 w-0 group-hover:h-24 group-hover:w-24 rounded-full bg-black/60 text-white duration-300">
                                <span className=' duration-300 group-hover:opacity-100 flex flex-col text-center capitalize font-bold'>1682 <span>properties</span></span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 text-white p-3 text-center">
                            <h4 className=' font-semibold'>Ready to Move-In</h4>
                            
                          <p className=' text-xs'>  Comfortable homes available for immediate use</p>
                        </div>
                    </div>
                </div>

            </Carousel>

        </>
    )
}
