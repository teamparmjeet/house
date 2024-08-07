"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bed, Bath, Square, LocateIcon } from 'lucide-react';

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
      items: 1
    }
  };

  return (
    <>


      <Carousel responsive={responsive} infinite={true} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
        {/* {[...Array(3)].map((_, index) => ( */}
        <div className="group  bg-white overflow-hidden my-1 lg:mb-4 mx-3 group backdrop-blur-md  border duration-150">
          <div className="overflow-hidden">
            <Image
              className='object-cover h-52 w-full transition duration-300 ease-in-out transform group-hover:scale-105'
              src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif"
              alt=''
              width={400}
              height={300}
            />
          </div>
          <div className="flex flex-col justify-between p-3 bg-indigo-0">
            <div className="flex justify-between">
              <div>
                <h3 className='text-lg  font-bold text-1'>₹ 39.9 L</h3>
                <p className=' font-semibold'>Samanvay Group</p>
                <div className=' flex gap-x-2 mt-2 mb-1'>
                <LocateIcon width={15} color='#aa8453'/>
                <span className=' text-sm text-2 items-center font-medium'>2305 Frog Lane Overlandpk, MO 66210</span>
                </div>
                <div className="flex gap-x-3">
                  <div className=' flex gap-x-2 items-center'><Bed width={15} color='#222' /><span className=' text-sm text-2'>2</span></div>
                  <div className=' flex gap-x-2 items-center'><Bath width={15} color='#222' /><span className=' text-sm text-2'>1</span></div>
                  <div className=' flex gap-x-2 items-center'><Square width={15} color='#222' /><span className=' text-sm text-2'>1200 SQFT</span></div>
                </div>


              </div>

            </div>
          </div>
        </div>

        {/* ))} */}





      </Carousel>

    </>
  )
}
