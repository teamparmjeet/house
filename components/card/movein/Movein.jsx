import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Movein() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-4">
         
            <Link href="">
            <div className="relative lg:col-span-1 h-96 rounded-lg p-6 bg-[#f0f9ff] shadow-lg ">
                <div className="mb-4">
                    <h2 className='text-2xl  font-semibold text-gray-600 mb-2'>Independent House/Villa</h2>
                    <p className='text-lg text-gray-600 mb-2'>30+ Properties Available</p>
                    
                </div>
                <Image className='absolute left-0 w-full bottom-0 right-0 ' src="/image/d_hp_property_type_2.webp" alt='Property Image' width={250} height={250} />
            </div>
            
            </Link>

            <Link href="">
            <div className="relative lg:col-span-1 h-96 rounded-lg p-6 bg-[#f0f9ff] shadow-lg ">
                <div className="mb-4">
                    <h2 className='text-2xl  font-semibold text-gray-600 mb-2'>Independent Builder/Floor</h2>
                    <p className='text-lg text-gray-600 mb-2'>30+ Properties Available</p>
                    
                </div>
                <Image className='absolute left-0 w-full bottom-0 right-0 ' src="/image/d_hp_property_type_4.webp" alt='Property Image' width={250} height={250} />
            </div>
            
            </Link>

            <Link href="">
            <div className="relative lg:col-span-1 h-96 rounded-lg p-6 bg-[#f0f9ff] shadow-lg ">
                <div className="mb-4">
                    <h2 className='text-2xl  font-semibold text-gray-600 mb-2'>Farm House</h2>
                    <p className='text-lg text-gray-600 mb-2'>30+ Properties Available</p>
                    
                </div>
                <Image className='absolute left-0 w-full bottom-0 right-0 ' src="/image/d_hp_property_type_5.webp" alt='Property Image' width={250} height={250} />
            </div>
            
            </Link>

            <Link href="">
            <div className="relative lg:col-span-1 h-96 rounded-lg p-6 bg-[#f0f9ff] shadow-lg ">
                <div className="mb-4">
                    <h2 className='text-2xl  font-semibold text-gray-600 mb-2'>Serviced Apartments</h2>
                    <p className='text-lg text-gray-600 mb-2'>30+ Properties Available</p>
                    
                </div>
                <Image className='absolute left-0 w-full bottom-0 right-0 ' src="/image/d_hp_property_type_22.webp" alt='Property Image' width={250} height={250} />
            </div>
            
            </Link>
          
        </div>
    )
}
