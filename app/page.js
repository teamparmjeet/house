"use client"
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from '@/components/banner/Banner';

import SpotlightCard from '@/components/card/spotlight/Card';
import CollectionCard from "@/components/card/collection/Card";

import Carouselcard from "@/components/card/carouselcard/Carouselcard";

import Button from "@/components/button/Btn";
import Link from 'next/link';

export default function MainPage() {
  const [location, setLocation] = useState('Jaipur');

  return (
    <>
      <Navbar />
      <Banner title="Properties to buy" location={location} setLocation={setLocation} />

      <div className=' '>
        <div className='container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2'>
            <h2 className='text-xl md:text-3xl font-semibold text-gray-600'>
              In <span className='text-gray-800'>Spotlight</span>
            </h2>
            <p className='font-medium text-gray-500 text-sm md:mt-2'>
              Find your best place to live with us in.
            </p>
          </div>
          <SpotlightCard />
        </div>
      </div>

      <div className=' bg-2 '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' font-bold text-white text-4xl'>Top Project</h2>
              <p className=' text-3 text-sm  mt-2 font-medium'>Best developers in <span className=' text-blue-700 font-semibold'>{location}</span> to explore</p>
            </div>
            <div className=''>
              <Link href="/page/Top_Project">
                <Button title=" View All" />
              </Link>
            </div>
          </div>

          <Carouselcard />
        </div>
      </div>

      <div className=' bg-3 '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' font-bold  text-4xl'>Projects in Focus</h2>
              <div className=' bg-1 w-20 h-0.5 mt-2'></div>
            </div>
            <div className=''>
              <Button title=" View All" />
            </div>
          </div>
          <Carouselcard />
        </div>
      </div>

      <div className=' bg-2 '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' font-bold text-4xl text-white'>Featured Project</h2>
              <p className=' text-3 text-sm  md:mt-2 font-medium'>Exclusive showcase of top projects in  <span className=' text-blue-700 font-semibold'>{location}</span> </p>
            </div>
            <div className=''>
              <Button title=" View All" />
            </div>
          </div>
          <Carouselcard />
        </div>
      </div>

      <div className=' bg-3'>
        <div className='container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' font-bold text-4xl'> Featured Collections</h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Handpicked projects for you in  <span className=' text-blue-700 font-semibold'>{location}</span> </p>
            </div>
            <div className=''>
              <Button title=" View All" />
            </div>
          </div>
          <CollectionCard />
        </div>
      </div>

      <Footer />
    </>
  );
}
