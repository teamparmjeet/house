import React from 'react'
import Ani from '@/components/button/ani'
import Radio from '../input/Radio'
import Input from '@/app/admin/components/Input/Input'
export default function Postproperty() {
    return (
        <>

            <div className="bg-white p-4 rounded-md ">
                <div className=' relative inline-block'>
                    <h1 className=' text-3xl font-semibold '>Post Property</h1>
                    <div className=' absolute -top-4 -right-5'>
                        <Ani />
                    </div>
                </div>

                <form action="">
                    <div className="flex flex-col justify-start items-start gap-2">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold mt-4 text-gray-700">Property Type</h1>
                            <div className="flex gap-4">
                                <Radio name="propertytype" value="Residential" id="1" />
                                <Radio name="propertytype" value="Commercial" id="2" />

                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold mt-2 text-gray-700">Looking to</h1>
                            <div className="flex gap-4">
                                <Radio name="purpose" value="Rent" id="3" />
                                <Radio name="purpose" value="Sell" id="4" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">

                            <div className="flex flex-col">
                                <p className='text-gray-700'>Mobile Number</p>
                                <Input type="number" placeholder="Enter Mobile Number" />
                            </div>
                        </div>
                    </div>

                </form>


            </div>

        </>
    )
}
