import Link from 'next/link';
import React from 'react';


export default function Service() {
    return (
        <div className="bg- p-6 text-white  shadow-lg">
            <div className="container mx-auto lg:w-[80%]">

                <h2 className="text-3xl text-black text-center font-bold mb-4 ">
                    Need Home Services?
                </h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    <div className="lg:col-span-1 md:col-span-1 relative border p-5 bgservice1 bg-white h-40 w-full rounded-md">
                        <p className=' text-xs'>Looking for washing<br></br>
                            machine Repair Expert?</p>
                        <Link href="/page/ourservice">
                            <button className=' absolute bottom-0 left-0 m-4 bg-2 text-white rounded-md px-3 py-1 text-sm'>Book Now</button>
                        </Link>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 relative border p-5 bgservice2 bg-blue-200 h-40 w-full rounded-md">
                        <p className=' text-xs text-black font-semibold'>AC Servicing</p>
                        <p className=' text-xs text-black'>Ac Service repair<br></br>
                            at your doorstep</p>

                            <Link href="/page/ourservice">
                            <button className=' absolute bottom-0 left-0 m-4 bg-2 text-white rounded-md px-3 py-1 text-sm'>Book Now</button>
                        </Link>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 relative border p-5 bgservice3 bg-green-200 h-40 w-full rounded-md">
                        <p className=' text-xs text-black font-semibold'>Need For Electrician</p>
                        <p className=' text-xs text-black'>Electric Service<br></br>
                            at your doorstep</p>

                            <Link href="/page/ourservice">
                            <button className=' absolute bottom-0 left-0 m-4 bg-2 text-white rounded-md px-3 py-1 text-sm'>Book Now</button>
                        </Link>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 relative border p-5 bgservice4 bg-1 h-40 w-full rounded-md">
                        <p className=' text-xs text-black font-semibold'>Kitchen Servicing</p>
                        <p className=' text-xs text-black'>Ac Service repair<br></br>
                            at your doorstep</p>

                            <Link href="/page/ourservice">
                            <button className=' absolute bottom-0 left-0 m-4 bg-2 text-white rounded-md px-3 py-1 text-sm'>Book Now</button>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    );
}
