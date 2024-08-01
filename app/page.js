import React from 'react'
import Banner from '@/components/banner/Banner'
import SpotlightCard from '@/components/card/spotlight/Card'
import TopProjectCard from "@/components/card/top-project/card"
import FocusCard from "@/components/card/focus/Card"
export default function page() {
  return (
    <>

      <Banner title=" Jaipur" />

      <div className=' bg-indigo-50'>

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

<div  className=' bg-indigo-50'>
      <div className=' container lg:w-2/3 mx-auto py-5 lg:my-12'>
        <div className=' lg:mb-4 mb-2 px-2'>
          <h2 className=' text-3xl'>Projects in <span className=' font-semibold'> Focus</span></h2>
          <p className=' text-gray-500 text-sm mt-2 font-medium'>Noteworthy projects in Jaipur</p>

        </div>
        <FocusCard />
      </div>
      </div>
    </>
  )
}
