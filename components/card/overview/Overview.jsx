import React from 'react'
import { Square,SquareChartGantt,Building,Calendar,IndianRupee,Box } from "lucide-react"
export default function Overview() {
    return (
        <>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-2">


                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <Square width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Project Area</p>
                        <p className='text-zinc-600 text-sm font-semibold '>0.37 Acres</p>
                    </div>
                </div>

                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <SquareChartGantt width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Sizes</p>
                        <p className='text-zinc-600 text-sm font-semibold '>1583 - 2160 sq.ft.</p>
                    </div>
                </div>

                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <Building width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Project Size</p>
                        <p className='text-zinc-600 text-sm font-semibold '>1 Building - 42 unitss</p>
                    </div>
                </div>

                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <Calendar width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Launch Date</p>
                        <p className='text-zinc-600 text-sm font-semibold '>Oct, 2023</p>
                    </div>
                </div>

                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <IndianRupee width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Avg. Price</p>
                        <p className='text-zinc-600 text-sm font-semibold '>₹ 7.1 K/sq.ft</p>
                    </div>
                </div>

                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <SquareChartGantt width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Possession Status</p>
                        <p className='text-zinc-600 text-sm font-semibold '>Ready to Move</p>
                    </div>
                </div>

                <div className=' p-2 lg:col-span-1 md:col-span-1 flex items-center gap-x-2 border rounded-md'>
                    <div>
                        <Box width={20} color='#0078db' />
                    </div>
                    <div>
                        <p className=' text-zinc-400 font-semibold'>Configurations</p>
                        <p className='text-zinc-600 text-sm font-semibold '>3, 4 BHK Apartments</p>
                    </div>
                </div>






            </div>

        </>
    )
}
