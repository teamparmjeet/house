import React from 'react'

export default function Input({ label, name, ...props }) {
    return (
        <>
            <div>

                <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                    type="text"
                    id={name}
                    name={name}
                    {...props}
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-sm  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    required
                />
            </div>


        </>
    )
}
