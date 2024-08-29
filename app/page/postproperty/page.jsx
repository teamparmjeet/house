import React from 'react'
import Postproperty from '@/components/postproperty/Postproperty'

export default function Page() {
    return (
        <>

            <div className=' bg-2 h-screen'>

                <div className="container mx-auto lg:w-[90%] h-full flex  items-end justify-end">
                    <div className="grid lg:grid-cols-5 w-full">
                        <div className="lg:col-span-3"></div>
                        <div className="lg:col-span-2">
                            <Postproperty />
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}
