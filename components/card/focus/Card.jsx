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


            <Carousel responsive={responsive}  infinite={true} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
                

                <div className=" mx-2 lg:my-4 ">
                    <div className=" relative rounded-md overflow-hidden ">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={400} height={151} />
                        <div className=' absolute bottom-0 rounded-md top-0 bg-gradient-to-b from-transparent to-black    w-full text-white '>
                          <div className=' absolute bottom-0 left-0 right-0 p-3'>
                          <h1 className='md:text-sm font-semibold'>Samanvay The Amelias</h1>
                            <p className='text-gray-300 font-semibold text-xs'>by Samanvay Group</p>

                            <div className="flex justify-between mt-2">
                                <div>
                                    <h6 className=' text-xs md:text-sm'> 1, 2 BHK Apartments</h6>

                                    <p className=' text-xs text-gray-300 font-semibold'>Sanganer, NH - 8 Jaipur, Jaipur</p>
                                </div>
                                <div className=' font-semibold text-xs md:text-sm'>₹22.95 L - 41.95 L</div>
                            </div>
                          </div>
                        </div>
                    </div>


                </div>

                
              
                <div className=" mx-2 lg:my-4 ">
                    <div className=" relative rounded-md overflow-hidden ">
                        <Image alt='' className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={400} height={151} />
                        <div className=' absolute bottom-0 rounded-md top-0 bg-gradient-to-b from-transparent to-black    w-full text-white '>
                          <div className=' absolute bottom-0 left-0 right-0 p-3'>
                          <h1 className='md:text-sm font-semibold'>Samanvay The Amelias</h1>
                            <p className='text-gray-300 font-semibold text-xs'>by Samanvay Group</p>

                            <div className="flex justify-between mt-2">
                                <div>
                                    <h6 className=' text-xs md:text-sm'> 1, 2 BHK Apartments</h6>

                                    <p className=' text-xs text-gray-300 font-semibold'>Sanganer, NH - 8 Jaipur, Jaipur</p>
                                </div>
                                <div className=' font-semibold text-xs md:text-sm'>₹22.95 L - 41.95 L</div>
                            </div>
                          </div>
                        </div>
                    </div>


                </div>


              
                
            </Carousel>

        </>
    )
}
