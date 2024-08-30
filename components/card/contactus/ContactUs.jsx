import React from 'react'
import Image from 'next/image'
import { StarIcon, Share, Share2  , ChartBar} from "lucide-react"
import Link from 'next/link'
export default function ContactUs() {
    return (
        <>
            <div className=' bg-3 p-6  rounded-md shadow border'>

                <div className="flex flex-col  gap-3">
                    <div >
                        <Image alt='' width={200} height={100} src="/logo/Group 349 (2).svg" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Ghar Dhundo</h2>
                        <p className="text-sm text-gray-500">Quality services since 2000</p>
                        <p className=" text-2 flex">
                            <StarIcon size={20} /> <StarIcon size={20} /> <StarIcon size={20} /> <StarIcon size={20} />  <StarIcon size={20} />
                        </p>
                    </div>
                </div>
                <div className=' flex items-center justify-between my-4'>
                    <p className="text-gray-600">
                        Contact us today
                    </p>
                    <p className=' flex items-center gap-1 text-sm px-2 border rounded-md '> Share<Share2 size={15} color='#005ca8' /></p>
                </div>
                <Link href="/page/contactus">
                <button className="w-full bg-2 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Contact Us
                </button>
                </Link>

                <p className=' text-gray-500  flex items-center gap-2 mt-2'><ChartBar/> Responds in about 27 min</p>


            </div>

        </>
    )
}
