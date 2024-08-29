import React from 'react'
import Postproperty from '@/components/postproperty/Postproperty'
import Image from 'next/image'
import { Circle} from "lucide-react"
export default function Page() {
    return (
        <>

            <div className='lg:h-screen bgblue bg-gradient-to-br from-white to-blue-800 p-5'>

                <div className="container mx-auto lg:w-[90%] h-full flex  items-center justify-end py-5" >
                    <div className="grid  lg:grid-cols-5 w-full">
                        <div className=" order-2 md:order-1 my-5 lg:my-0 lg:col-span-3 flex flex-col  justify-center lg:justify-start">
                            <h1 className=' text-white font-semibold text-4xl'>Upload your property in 1 steps</h1>
                            <p className=' text-white text-xl flex items-center gap-2 mt-2'><Circle size={15} color='yellow'/> Add Basic Details</p>

                            <Image src="/image/download.svg" width={600} height={600} className='' />
                        </div>
                        <div className="  order-1 md:order-2 lg:col-span-2">
                            <Postproperty />
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}
