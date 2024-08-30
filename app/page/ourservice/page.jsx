"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Service from '@/components/service/Service'
import axios from 'axios';
import Loading from '@/components/Loader/Loading'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);

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

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1200, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Navbar />
            <div className='bg-banner py-20 flex justify-center items-center'>
                <div className='container mx-auto lg:w-[90%] text-center'>
                    <h1 className='text-white text-5xl font-bold mb-12'>Our Services</h1>
                    <Carousel 
                        responsive={responsive} 
                        infinite={true} 
                        autoPlay 
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        className="z-10"
                    >
                        {isLoading ? (
                            <Loading />
                        ) : (
                            services.map((service, index) => (
                                <Link key={index} href={`/page/service/${service.title}`}>
                                    <div className="p-4">
                                        <div className="rounded-lg shadow-2xl overflow-hidden transform transition duration-300 bg-white hover:scale-105 hover:shadow-lg">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                                                    <div className='bg-white p-2 rounded-md shadow-md'>
                                                        <Image alt='logo' width={100} height={100} src="/logo/Group 349 (2).svg" />
                                                    </div>
                                                </div>
                                                <hr className="border-t-2 border-gray-200 opacity-50 mb-4" />
                                                <p className="text-gray-600 text-base">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </Carousel>
                </div>
            </div>
            <Service />
            <Footer />
        </>
    )
}
