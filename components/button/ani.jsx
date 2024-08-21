import React from 'react'

export default function ani() {
    return (
        <>
            <button
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-green-500 backdrop-blur-lg  px-2  h-4 text-base font-semibold text-white transition-all duration-300 ease-in-out0"
            >
                <span className="text-[11px]">Free</span>
                <div
                    className="absolute inset-0 flex h-full w-full justify-center shimmer-animation"
                >
                    <div className="relative h-full w-4 bg-[#fff5e4]/50"></div>
                </div>
            </button>
        </>
    )
}
