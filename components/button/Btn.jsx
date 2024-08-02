import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function Btn() {
    return (
        <>
            <button className=' bg-indigo-600 text-white rounded-md  text-center px-2 py-1 gap-x-2 font-medium flex'> View All <ArrowRight width={20} /> </button>
        </>
    )
}
