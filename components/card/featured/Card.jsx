"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Card() {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <>


            <Carousel responsive={responsive} infinite={true} autoPlay removeArrowOnDeviceType={["tablet", "mobile"]}>
                {[...Array(3)].map((_,index)=>(
                    
            <div key={index} className="rounded-md group bg-indigo-100/20 overflow-hidden my-1 lg:mb-4 mx-3 group backdrop-blur-md shadow hover:shadow-lg duration-150">
                   <div className="overflow-hidden">
                     <Image 
                       className='object-cover h-52 w-full transition duration-300 ease-in-out transform group-hover:scale-105'
                       src="/image/anant_emerald-bapu_nagar_jaipur-jaipur-anant_group.avif" 
                       alt='' 
                       width={400} 
                       height={300} 
                     />
                   </div>
                   <div className="flex flex-col justify-between p-3 bg-indigo-0">
                     <div className="flex justify-between">
                       <div>
                         <h3 className='text-xs md:text-sm font-semibold text-indigo-800'>Samanvay The Amelias</h3>
                         <p className='text-xs text-gray-400'>by Samanvay Group</p>
                         <h5 className='text-xs font-medium mt-2 '>1, 2 BHK Apartments</h5>
                         <p className='text-xs text-gray-400'>Sarangpura, NH - 8 Jaipur, Jaipur</p>
                         <h5 className='text-xs md:text-sm font-semibold mt-2 '>₹ 21.0 L - 39.9 L Price</h5>
                       </div>
                      
                     </div>
                   </div>
                 </div>

))}
            </Carousel>

        </>
    )
}
