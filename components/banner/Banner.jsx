import React from 'react'

export default function Banner({title}) {
  return (
    <div className=' h-full   bg-banner border  top-0 left-0 right-0 z-40 rounded-b-[50px]'>
    <div className=' relative h-full'>
      <div className=' absolute bottom-0 left-0 right-0'>
        <div className='mx-auto lg:w-3/5  w-5/6 mb-12'>
          <h1 className=' text-white drop-shadow text-4xl font-bold  mb-5'>{title}</h1>

          <div className="rounded-xl bg-black/30 p-4 backdrop-blur-md z-0">
            <ul className=' flex gap-x-7 text-white'>
              <li className=' uppercase text-xs underline underline-offset-4'>Buy</li>
              <li className=' uppercase text-xs '>Rent</li>
              <li className=' uppercase text-xs '>Commercial</li>
              <li className=' uppercase text-xs '>PG/Co-Living</li>
              <li className=' uppercase text-xs '>Plots</li>
            </ul>

       
              <div className=" rounded-full mt-3 overflow-hidden bg-white grid grid-cols-6">
                <div className="col-span-1 border p-4">
                  <input type="text" name="" id="" placeholder='Jaipur' className=' w-full h-full' />
                </div>
                <div className="col-span-4 border ">
                  <input type="text" name="" id="" placeholder='Search for locality,landmark,project,or,builder' className=' w-full h-full p-4 focus-within:outline-none' />
                </div>
                <div className="col-span-1 border p-2">
                  <button className=' bg-green-500 w-full rounded-full p-3 text-white'>Search</button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
