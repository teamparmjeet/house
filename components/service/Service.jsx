"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
export default function Service() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchServices = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/AddService/getdata/addservice');
            setServices(response.data.fetch);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className="bg- p-6 text-white  shadow-lg">
            <div className="container mx-auto lg:w-[80%]">

                <h2 className="text-3xl text-black text-center font-bold mb-4 ">
                    Need Home Services?
                </h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {services.map((item) => (

                        <div key={item.id} className=" rounded-md overflow-hidden  lg:col-span-1 md:col-span-1 relative border h-40 w-full">

                            <Image alt='' className=' w-full h-full z-0 object-cover' src={item.imageUrl} width="100" height="100" />
                            <div className=' absolute backdrop-blur-xs bottom-0 left-0 top-0 right-0 bg-gradient-to-br from-transparent to-black z-20'></div>
                            <div className=' absolute top-0 p-4 z-30'>
                                <p className=' z-20 text-xl'>{item.title}</p>
                                <p className=' text-sm line-clamp-2'>{item.description}</p>
                                <Link href={`/page/service/${item.title}`}>
                                    <button className='  m-4 bg-2 text-white rounded-md px-3 py-1 text-sm'>Book Now</button>
                                </Link>

                            </div>

                        </div>
                    ))}


                </div>


            </div>
        </div>
    );
}
