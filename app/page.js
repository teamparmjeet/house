import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from '@/components/banner/Banner'
import SpotlightCard from '@/components/card/spotlight/Card'
import TopProjectCard from "@/components/card/top-project/card"
import FocusCard from "@/components/card/focus/Card"
import CollectionCard from "@/components/card/collection/Card"
import FeatureCard from "@/components/card/featured/Card"
import Button from "@/components/button/Btn"
import Link from 'next/link'
export default function page() {
  return (
    <>
      <Navbar />
      <Banner title=" Jaipur" />

      <div className=' '>
        <div className='container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className='lg:mb-4 mb-2 px-2'>
            <h2 className='text-xl md:text-3xl font-semibold text-gray-600'>
              In <span className='text-gray-800'>Spotlight</span>
            </h2>
            <p className='font-medium text-gray-500 text-sm md:mt-2'>
              Find your best place to live with us.
            </p>
          </div>
          <SpotlightCard />
        </div>
      </div>





      <div className=' '>

        <div className=' container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-3xl text-gray-600' >Top <span className=' font-semibold text-gray-800'>Project</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Best developers in Jaipur to explore</p>
            </div>
            <div className=''>
              <Link href="/page/Top_Project">
                <Button />
              </Link>
            </div>
          </div>

          <TopProjectCard />
        </div>

      </div>

      <div >
        <div className=' container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-3xl text-gray-600'>Projects in <span className=' font-semibold text-gray-800'> Focus</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Noteworthy projects in Jaipur</p>
            </div>
            <div className=''>
              <Button />
            </div>
          </div>
          <FocusCard />
        </div>
      </div>


      <div >
        <div className=' container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-3xl text-gray-600'>Featured  <span className='text-gray-800 font-semibold'>Projects</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Exclusive showcase of top projects</p>
            </div>
            <div className=''>
              <Button />
            </div>
          </div>
          <FeatureCard />
        </div>
      </div>



      <div>
        <div className=' container lg:w-4/5 mx-auto py-5 lg:py-8'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-3xl text-gray-600'> Featured <span className='text-gray-800 font-semibold'>Collections</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Handpicked projects for you</p>
            </div>
            <div className=''>
              <Button />
            </div>
          </div>
          <CollectionCard />
        </div>
      </div>

      <Footer />
    </>
  )
}
