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
            items: 2
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
                <div className=" mx-2">
                    <div className="">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={500} height={250} />
                    </div>
                    <div className=" flex flex-col justify-between  p-5 border  bg-white">

                        <div className="flex justify-between">
                            <div>
                                <h3 className=' text-xs md:text-sm  font-semibold'>  Samanvay The Amelias</h3>
                                <p className=' text-xs text-gray-400'>  by Samanvay Group</p>
                            </div>
                            <div className=' text-xs md:text-sm  font-semibold'>
                                ₹ 21.0 L - 39.9 L
                                Price
                            </div>
                        </div>
                        <h5 className=' text-md'>  1, 2 BHK Apartments</h5>
                        <p className=' text-xs text-gray-400'> Sarangpura, NH - 8 Jaipur, Jaipur</p>

                    </div>

                </div>
                
                <div className=" mx-2">
                    <div className="">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={500} height={250} />
                    </div>
                    <div className=" flex flex-col justify-between  p-5 border  bg-white">

                        <div className="flex justify-between">
                            <div>
                                <h3 className=' text-xs md:text-sm  font-semibold'>  Samanvay The Amelias</h3>
                                <p className=' text-xs text-gray-400'>  by Samanvay Group</p>
                            </div>
                            <div className=' text-xs md:text-sm  font-semibold'>
                                ₹ 21.0 L - 39.9 L
                                Price
                            </div>
                        </div>
                        <h5 className=' text-md'>  1, 2 BHK Apartments</h5>
                        <p className=' text-xs text-gray-400'> Sarangpura, NH - 8 Jaipur, Jaipur</p>

                    </div>

                </div>
                
            </Carousel>

        </>
    )
}
