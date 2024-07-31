import React from 'react'
import Image from 'next/image'
export default function Card() {
    return (
        <>
            <div className="rounded-xl mx-2 bg-gradient-to-b from-indigo-200 to-red-100 grid lg:grid-cols-7  ">
                <div className="lg:col-span-2 flex flex-col justify-between lg:h-80  p-5 ">
                    <div className=' flex items-center gap-4'>
                        <Image src="/image/medium.avif" className=' rounded-md' width={80} height={80}/>
                        <h2 className=' text-lg font-semibold'>vinayak buildersand developers</h2>
                    </div>
                    <div>
                        <h2 className=' text-lg font-bold'>Vinayak Royal Crysta</h2>
                        <p className=' text-sm text-gray-500'>Bhankrota, NH - 8 Jaipur, Jaipur</p>

                    </div>
                    <div>
                        <h2 className=' text-lg font-bold '>21.0 L - 35.0 L</h2>
                        <p className=' text-sm text-gray-500'>1, 2 BHK Apartments</p>
                    </div>
                    <button className=' bg-[#5e23dc] text-white rounded-md px-4 py-2 w-full font-medium'>Contact</button>
                </div>
                <div className="lg:col-span-5 ">
                    <Image className='object-cover lg:h-80 h-52 rounded-lg  w-full' src="/image/the_century_garden-bhankrota-jaipur-century.avif" width={500} height={500}/>
                </div>
            </div>

        </>
    )
}
