import React from 'react'
import { Search } from 'lucide-react';

export default function Banner({ title }) {
  return (
    <div className='relative h-full container mx-auto lg:w-[90%] bg-banner border-t border-b border-gray-200 top-0 left-0 right-0 z-40 md:rounded-b-[50px]'>
      <div className='relative overflow-hidden h-full'>
        <div className='absolute bottom-0 left-0 right-0'>
          <div className='mx-auto lg:w-3/5 mb-16 md:mb-24'>
            <h1 className='text-white bg-black/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 md:text-4xl text-2xl  mb-5 text-center md:text-left'> Properties to buy in <span className='underline'>{title}</span></h1>

            <div className="rounded-xl bg-black/60 p-4 backdrop-blur-md">
              <ul className='flex gap-x-7 text-white'>
                <li className='uppercase text-xs md:underline underline-offset-4 bg-white md:bg-transparent rounded-md text-black md:text-white font-medium p-2 md:p-0'>Buy</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Rent</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Commercial</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Plots</li>
              </ul>

             <div className=" rounded-full mt-3 overflow-hidden bg-white grid grid-cols-6">
                <div className="col-span-1 border ">
                  <input type="text" name="" id="" placeholder='Jaipur' className=' py-2 text-center w-full h-full  focus-within:outline-none' />
                </div>
                <div className="col-span-4 border ">
                  <input type="text" name="" id="" placeholder='Search for locality,landmark,project,or,builder' className='px-2 lg:py-4 py-2 w-full h-full  focus-within:outline-none' />
                </div>
                <div className="col-span-1 border items-center flex">
                  <button className=' md:p-2 bg-green-500 md:w-full mx-auto rounded-full  text-white'>
                    <span className='md:hidden justify-center flex'><Search color='white' width={50} /></span>
                    <span className=' hidden md:block'>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 mb-2 left-0 right-0 text-center'>
          <p className='bg-black/50 inline text-white font-medium text-sm px-5 py-2 rounded-[30px]'>
            Are you an Owner?
            <span className='underline cursor-pointer ml-1 text-green-400'>Post property for free</span>
          </p>
        </div>
      </div>
    </div>
  )
}
