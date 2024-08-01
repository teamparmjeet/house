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


            <Carousel responsive={responsive} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
                <div className=" mx-2">
                    <div className=" relative">
                        <Image className='object-cover  w-full' src="/image/samanvay_the_amelias-sarangpura-jaipur-samanvay_group.avif" width={500} height={250} />
                        <div className=' absolute bottom-0 bg-gradient-to-b from-transparent to-black  h-1/2  w-full text-white '>
                           <h1>Samanvay The Amelias</h1>
                        </div>
                    </div>


                </div>
            </Carousel>

        </>
    )
}
