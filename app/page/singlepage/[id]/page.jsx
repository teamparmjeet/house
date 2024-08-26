import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Btn3 from "@/components/button/Btn3"
import { Phone } from "lucide-react"
import Gallery from '@/components/gallery/Gallery'
import Details from "@/components/singlepagedetails/Details"
export default function SinglePage({ params }) {
    const id = params.id
    return (
        <>
            <Navbar />
            <div className=' h-14' />
            <div className="container px-2 border-b mx-auto lg:w-[80%]">

                <div className="flex justify-between  md:mt-8 md:mb-5 mb-2">
                    <div>
                        <h1 className=' text-xl md:text-3xl font-semibold md:mb-2'>Royal Gravitaz</h1>
                        <p className=' text-gray-600 text-sm font-semibold md:mb-1'>By <span className=' text-2'>Ganga Kotecha Group</span></p>
                        <p className=' text-gray-500 text-sm font-semibold'>Vaishali Nagar, Jaipur</p>
                    </div>

                    <div>
                        <h2 className=' text-xl md:text-3xl font-semibold md:mb-2 text-end'>₹ 41.82 L</h2>
                        <p className=' text-2  text-sm font-semibold text-end'>EMI starts at ₹22.15 K</p>
                        <div className=' hidden md:block'>
                            <Btn3 title="Contact Developers" icon={<Phone width={20} />} />
                        </div>
                    </div>

                </div>



                <div className='mb-2 md:mb-4'>
                    <Gallery />
                </div>


                <div>
                    <div className="grid grid-cols-4 divide-x-2 mb-4">
                        <div className="col-span-1 text-center p-2">
                            <p className='font-semibold text-xs md:text-lg text-2'>2, 3 BHK Apartments</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Configurations</p>
                        </div>

                        <div className="col-span-1 text-center p-2">
                            <p className='font-semibold text-xs md:text-lg text-2'>Dec, 2025</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Possession Starts</p>
                        </div>

                        <div className="col-span-1 text-center p-2">
                            <p className='font-semibold text-xs md:text-lg text-2'>₹4.25 K/sq.ft</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Avg. Price</p>
                        </div>
                        <div className="col-span-1 text-center p-2">
                            <p className='font-semibold text-xs md:text-lg text-2'>1500 sq.ft</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Area</p>
                        </div>

                    </div>
                </div>



            </div>

            <div className=' bg-zinc-100 py-6'>
            <div className="container  mx-auto lg:w-[80%]">
                <Details/>
            </div>
            </div>

            <Footer />
        </>
    )
}
