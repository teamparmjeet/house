import React from 'react'
export default function Btn3({ title,icon }) {
    return (
        <div>
            <button className=' bg-1 text-white  px-4 py-2 text-lg rounded-md hover:bg-[#b7986e] duration-150  flex items-center gap-x-2'>{icon} {title}</button>
        </div>
    )
}
