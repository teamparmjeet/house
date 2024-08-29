"use client"
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from '@/components/banner/Banner';

import SpotlightCard from '@/components/card/spotlight/Card';
import CollectionCard from "@/components/card/collection/Card";

import Carouselcard from "@/components/card/carouselcard/Carouselcard";
import Movein from "@/components/card/movein/Movein"
import Button from "@/components/button/Btn";
import Link from 'next/link';
import Ping from '@/components/button/ping';
export default function MainPage() {
  const [location, setLocation] = useState('Jaipur');
  const [motive, setMotive] = useState('Buy');
  const [type, setType] = useState('');

  return (
    <>
      <Navbar />
      <Banner location={location} setLocation={setLocation} motive={motive} setMotive={setMotive} type={type} setType={setType} />

      <div className='  '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className='   text-2xl md:text-4xl'>In <span className='font-bold'> Spotlight</span> </h2>
              <div className=' bg-2 w-20 h-0.5 mt-2'></div>
            </div>

          </div>
          <SpotlightCard />
        </div>
      </div>

      <div className='bg-3 '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <div className=' relative'>
                <Ping location={location} />
                <h2 className='  text-2xl md:text-4xl'>Top <span className='font-bold'>Project</span></h2>

              </div>
              <div className=' bg-2 w-20 h-0.5 mt-2'></div>
            </div>
            <div className=''>
              <Link href={`/page/collectionproject/Top`}>
                <Button title=" View All" />
              </Link>

            </div>
          </div>

          <Carouselcard listingType="Top Project" purpose={motive} location={location} type={type} />
        </div>
      </div>

      <div className='  '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <div className=' relative'>
                <Ping location={location} />
                <h2 className='text-2xl md:text-4xl'>Projects <span className='font-bold'>in Focus</span></h2>

              </div>
              <div className=' bg-2 w-20 h-0.5 mt-2'></div>
            </div>
            <div className=''>
              <Link href={`/page/collectionproject/Focus`}>
                <Button title=" View All" />
              </Link>
            </div>
          </div>
          <Carouselcard listingType="Focus" purpose={motive} location={location} type={type} />
        </div>
      </div>

      <div className=' hidden md:block'>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <div className=' relative'>
                <Ping location={location} />
                <h2 className='text-2xl md:text-4xl'>Move in now</h2>

              </div>
              <div className=' bg-2 w-20 h-0.5 mt-2'></div>
            </div>

          </div>
         <Movein location={location} />
        </div>
      </div>


      <div className='bg-3 '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <div className=' relative'>
                <Ping location={location} />
                <h2 className=' text-2xl md:text-4xl'>Featured <span className='font-bold'>Project</span></h2>

              </div>
              <div className=' bg-2 w-20 h-0.5 mt-2'></div>
            </div>
            <div className=''>
              <Link href={`/page/collectionproject/Featured`}>
                <Button title=" View All" />
              </Link>
            </div>
          </div>
          <Carouselcard listingType="Featured" purpose={motive} location={location} type={type} />
        </div>
      </div>

      <div className=' '>
        <div className='container lg:w-5/6 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <div className=' relative'>
                <Ping location={location} />
                <h2 className='text-2xl md:text-4xl'>Featured <span className='font-bold'>Collections</span></h2>

              </div>
              <div className=' bg-2 w-20 h-0.5 mt-2'></div>
            </div>

          </div>
          <CollectionCard location={location} />
        </div>
      </div>

      <Footer />
    </>
  );
}
