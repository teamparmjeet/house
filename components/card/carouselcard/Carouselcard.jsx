"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bed, Bath, Square, LocateIcon,Home } from 'lucide-react';

export default function Card() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive} infinite={true} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
      {[...Array(3)].map((_,index)=>(

     
      <div key={index} className="group bg-white overflow-hidden my-1 lg:mb-4 mx-3 backdrop-blur-md border  duration-150 ">
        <div className="overflow-hidden relative">
          <Image
            className='object-cover h-60 w-full transition duration-300 ease-in-out transform group-hover:scale-105'
            src="/property-grid-3.png"
            alt=''
            width={400}
            height={300}
          />
          <div className="absolute bg-gradient-to-b from-transparent   via-transparent to-black/70 top-0 bottom-0 left-0 right-0 flex justify-center items-center duration-300">
                          
                        </div>
            <button className=' absolute top-0 left-0 m-3  h-6 text-sm px-2  text-white bg-2'>For Sale</button>
            <button className=' absolute bottom-0 left-0 m-3  h-6 text-sm px-2  text-white flex items-center gap-x-2 '><Home color='#aa8453' width={20}/>Appartment</button>

        </div>
        <div className="flex h-60 flex-col justify-between ">
          <div className="flex flex-col h-full justify-between ">
            <div className='p-4'>
              <h3 className='text-xl font-bold text-1'>₹ 39.9 L</h3>
              <p className='font-semibold text-lg text-2'>Samanvay Group</p>
              <div className='flex items-center gap-x-2 mt-2 mb-1'>
                <LocateIcon width={15} color='#aa8453'/>
                <span className='text-sm text-2 font-medium'>2305 Frog Lane Overlandpk, MO 66210</span>
              </div>
              <div className="flex gap-x-4 mt-3">
                <div className='flex items-center gap-x-1'><Bed width={15} color='#222' /><span className='text-sm text-2'>2</span></div>
                <div className='flex items-center gap-x-1'><Bath width={15} color='#222' /><span className='text-sm text-2'>1</span></div>
                <div className='flex items-center gap-x-1'><Square width={15} color='#222' /><span className='text-sm text-2'>1200 SQFT</span></div>
              </div>
            </div>
            <div className='border-t  flex justify-between items-center p-4'>
              <Image alt='' src="/image/Black_Outline_Street_Brand_Modern_Typography_Logo__1___1_-removebg-preview.png" width={101} height={38.625} />
              <span className='text-sm text-2'>2 Months Ago</span>
            </div>
          </div>
        </div>
      </div>
       ))}
    </Carousel>
  )
}
