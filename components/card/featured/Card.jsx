"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Card() {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 3
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
                <div className=" lg:my-4  group shadow hover:shadow-lg duration-150 mx-2 rounded-md overflow-hidden">
                    <div className="">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={500} height={250} />
                    </div>
                    <div className=" flex flex-col justify-between  p-2   bg-white">

                        <h3 className=' text-sm md:text-md font-semibold'>  Samanvay The Amelias</h3>
                        <p className=' text-xs text-gray-400'>  by Samanvay Group</p>


                        <h5 className=' text-xs font-medium mt-2'>  1, 2 BHK Apartments</h5>
                        <p className=' text-xs text-gray-400'> Sarangpura, NH - 8 Jaipur, Jaipur</p>


                        <div className=' text-sm md:text-md font-semibold mt-2'>
                            ₹ 21.0 L - 39.9 L
                            Price
                        </div>
                    </div>

                </div>

                <div className=" lg:my-4  group shadow hover:shadow-lg duration-150 mx-2 rounded-md overflow-hidden">
                    <div className="">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={500} height={250} />
                    </div>
                    <div className=" flex flex-col justify-between  p-2   bg-white">

                        <h3 className=' text-sm md:text-md font-semibold'>  Samanvay The Amelias</h3>
                        <p className=' text-xs text-gray-400'>  by Samanvay Group</p>


                        <h5 className=' text-xs font-medium mt-2'>  1, 2 BHK Apartments</h5>
                        <p className=' text-xs text-gray-400'> Sarangpura, NH - 8 Jaipur, Jaipur</p>


                        <div className=' text-sm md:text-md font-semibold mt-2'>
                            ₹ 21.0 L - 39.9 L
                            Price
                        </div>
                    </div>

                </div>


                <div className=" lg:my-4  group shadow hover:shadow-lg duration-150 mx-2 rounded-md overflow-hidden">
                    <div className="">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={500} height={250} />
                    </div>
                    <div className=" flex flex-col justify-between  p-2   bg-white">

                        <h3 className=' text-sm md:text-md font-semibold'>  Samanvay The Amelias</h3>
                        <p className=' text-xs text-gray-400'>  by Samanvay Group</p>


                        <h5 className=' text-xs font-medium mt-2'>  1, 2 BHK Apartments</h5>
                        <p className=' text-xs text-gray-400'> Sarangpura, NH - 8 Jaipur, Jaipur</p>


                        <div className=' text-sm md:text-md font-semibold mt-2'>
                            ₹ 21.0 L - 39.9 L
                            Price
                        </div>
                    </div>

                </div>

            </Carousel>

        </>
    )
}
