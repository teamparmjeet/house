import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
export default function TopProject() {
    return (
        <>
            <div className=' bg-black h-14 fixed'></div>
            <div className=' bg-black h-14'></div>




            <div className="container mx-auto sticky  p-2  my-4 ">

                <div className="grid lg:grid-cols-4">
                    <div className="col-span-3 p-5 ">


                        <div className=' bg-gray-600 h-12 mb-2'>

                        </div>
                        <div className=' overflow-auto  h-svh px-2'>
                            {[...Array(15)].map((_, index) => (
                                <div key={index} className=' rounded-md mb-4 flex border p-2'>
                                    <div className=' relative h-[30%] w-[30%] overflow-hidden '>
                                        <Image src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif" className=' rounded-md object-center h-full w-full' width={200} height={100} alt='' />
                                        <div className=' absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent rounded-md to-black/60'></div>
                                    </div>
                                 

                                </div>

                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 p-5 hidden lg:block">
                        <div className=' bg-gray-600 h-52 '>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
