import React from 'react'
import Banner from '@/components/banner/Banner'
import SpotlightCard from '@/components/card/spotlight/Card'
import TopProjectCard from "@/components/card/top-project/card"
import FocusCard from "@/components/card/focus/Card"
import CollectionCard from "@/components/card/collection/Card"
import FeatureCard from "@/components/card/featured/Card"
import Button from "@/components/button/Btn"
export default function page() {
  return (
    <>
      <Banner title=" Jaipur" />

      <div className=' bg-gradient-to-b from-white via-indigo-50'>
        <div className='container lg:w-3/4 mx-auto py-5 lg:py-12'>
          <div className='lg:mb-4 mb-2 px-2'>
            <h2 className='text-xl md:text-4xl font-semibold text-gray-800'>
              In <span className='text-indigo-800'>Spotlight</span>
            </h2>
            <p className='font-medium text-gray-500 text-sm md:mt-2'>
              Find your best place to live with us.
            </p>
          </div>
          <SpotlightCard />
        </div>
      </div>





      <div >

        <div className=' container lg:w-3/4 mx-auto py-5 lg:py-12'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-4xl text-gray-800' >Top <span className=' font-semibold text-indigo-800'>Project</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Best developers in Jaipur to explore</p>
            </div>
            <div className=''>
              <Button />
            </div>
          </div>

          <TopProjectCard />
        </div>

      </div>

      <div >
        <div className=' container lg:w-3/4 mx-auto py-5 lg:py-12'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-4xl text-gray-800'>Projects in <span className=' font-semibold text-indigo-800'> Focus</span></h2>
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
        <div className=' container lg:w-3/4 mx-auto py-5 lg:py-12'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-4xl text-gray-800'>Featured  <span className='text-indigo-800 font-semibold'>Projects</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Exclusive showcase of top projects</p>
            </div>
            <div className=''>
              <Button />
            </div>
          </div>
          <FeatureCard />
        </div>
      </div>



      <div  >
        <div className=' container lg:w-3/4 mx-auto py-5 lg:py-12'>
          <div className=' lg:mb-4 mb-2 px-2 flex justify-between items-center'>
            <div>
              <h2 className=' text-xl md:text-4xl text-gray-800'> Featured <span className='text-indigo-800 font-semibold'>Collections</span></h2>
              <p className=' text-gray-500 text-sm  md:mt-2 font-medium'>Handpicked projects for you</p>
            </div>
            <div className=''>
              <Button />
            </div>
          </div>
          <CollectionCard />
        </div>
      </div>


    </>
  )
}
