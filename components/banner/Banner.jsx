"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Tabbanner from "@/components/tab/Tabbanner";
import Link from 'next/link';

export default function Banner({ location, setLocation, motive, setMotive,type,setType }) {


  return (
    <div className='relative h-full bg-banner overflow-hidden'>
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent to-black rounded-md"></div> */}
      <div className='relative container lg:w-5/6 mx-auto py-5 lg:py-8 overflow-hidden h-full'>
        <div className='absolute bottom-0 left-0 right-0 p-5 mt-10'>
          {/* <h1 className="lg:text-white  sm:block text-black text-1 sm:text-5xl text-3xl mb-5 text-center  font-extrabold">
            Properties for {motive} in <span className="">{location}</span>
          </h1> */}
          <div className='xl:w-2/6 mb-2 '>

            <div className=' hidden sm:block'>
              <Tabbanner location={location} setLocation={setLocation} motive={motive} setMotive={setMotive} type={type} setType={setType}/>
            </div>
          </div>
        </div>

        <div className='absolute hidden lg:block bottom-0 mb-2 left-0 right-0 text-center'>
          <p className='bg-black/50 backdrop-blur-md inline text-white font-medium text-sm px-5 py-2 rounded-[30px]'>
            Are you an Owner?
            <Link href="/page/auth/login">
              <span className='underline cursor-pointer ml-1 text-2'>Post property for free</span>
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
