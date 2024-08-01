import React from 'react'
import Banner from '@/components/banner/Banner'
import SpotlightCard from '@/components/card/spotlight/Card'
import TopProjectCard from "@/components/card/top-project/card"
import FocusCard from "@/components/card/focus/Card"
import CollectionCard from "@/components/card/collection/Card"
import FeatureCard from "@/components/card/featured/Card"
export default function page() {
  return (
    <>

      <Banner title=" Jaipur" />

      <div className=' '>

        <div className=' container lg:w-2/3 mx-auto py-5 lg:my-12'>
          <div className=' lg:mb-4 mb-2 px-2'>
            <h2 className=' text-3xl'>In <span className=' font-semibold'>Spotlight</span></h2>
            <p className=' font-medium text-gray-500 text-sm mt-2'>Find your best place to live with us.</p>

          </div>
          <SpotlightCard />
        </div>
      </div>




      <div className=' container lg:w-2/3 mx-auto py-5 lg:my-12'>
        <div className=' lg:mb-4 mb-2 px-2'>
          <h2 className=' text-3xl'>Top <span className=' font-semibold'>Project</span></h2>
          <p className=' text-gray-500 text-sm mt-2 font-medium'>Best developers in Jaipur to explore</p>

        </div>
        <TopProjectCard />
      </div>

      <div className=' '>
        <div className=' container lg:w-2/3 mx-auto py-5 lg:my-12'>
          <div className=' lg:mb-4 mb-2 px-2'>
            <h2 className=' text-3xl'>Projects in <span className=' font-semibold'> Focus</span></h2>
            <p className=' text-gray-500 text-sm mt-2 font-medium'>Noteworthy projects in Jaipur</p>

          </div>
          <FocusCard />
        </div>
      </div>


      <div className=' '>
        <div className=' container lg:w-2/3 mx-auto py-5 lg:my-12'>
          <div className=' lg:mb-4 mb-2 px-2'>
            <h2 className=' text-3xl'> Featured <span className=' font-semibold'>Collections</span></h2>
            <p className=' text-gray-500 text-sm mt-2 font-medium'>Handpicked projects for you</p>

          </div>
          <CollectionCard />
        </div>
      </div>



      <div className=' container lg:w-2/3 mx-auto py-5 lg:my-12'>
        <div className=' lg:mb-4 mb-2 px-2'>
          <h2 className=' text-3xl'>Featured  <span className=' font-semibold'>Projects</span></h2>
          <p className=' text-gray-500 text-sm mt-2 font-medium'>Exclusive showcase of top projects</p>

        </div>
        <FeatureCard />
      </div>
    </>
  )
}
