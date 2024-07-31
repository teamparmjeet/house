import React from 'react'
import Banner from '@/components/banner/Banner'
import Card from '@/components/card/spotlight/Card'
export default function page() {
  return (
    <>

      <Banner title=" Jaipur" />

      <div className=' container lg:w-2/3 mx-auto py-5'>
      <Card />
      </div>
    </>
  )
}
