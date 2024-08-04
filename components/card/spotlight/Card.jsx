"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
                <div className="rounded-xl mx-2 bg-gradient-to-b from-indigo-200 to-white grid lg:grid-cols-7  ">
                    <div className="lg:col-span-2 flex flex-col justify-between lg:h-80  p-5 ">
                        <div className=' flex items-center gap-4'>
                            <Image alt='' src="/image/medium.avif" className=' rounded-md' width={80} height={80} />
                            <h2 className=' text-sm font-semibold'>vinayak buildersand developers</h2>
                        </div>
                        <div>
                            <h2 className=' text-sm font-bold'>Vinayak Royal Crysta</h2>
                            <p className=' text-sm text-gray-500'>Bhankrota, NH - 8 Jaipur, Jaipur</p>

                        </div>
                        <div>
                            <h2 className=' text-sm font-bold '>₹ 21.0 L - 35.0 L</h2>
                            <p className=' text-sm text-gray-500'>1, 2 BHK Apartments</p>
                        </div>
                        <button className=' bg-[#5e23dc] text-white rounded-md px-4 py-2 w-full font-medium'>Contact</button>
                    </div>
                    <div className="lg:col-span-5 ">
                        <Image alt='' className='object-cover lg:h-80 h-52 rounded-lg  w-full' src="/image/the_century_garden-bhankrota-jaipur-century.avif" width={982} height={880} />
                    </div>
                </div>

               

            </Carousel>

        </>
    )
}
