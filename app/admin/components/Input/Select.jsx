import React from 'react'

export default function Select({ label, name, ...props }) {
    return (
        <>
            <div>

                <label htmlFor={name} className="block text-sm font-medium text-gray-600">{label}</label>

                <select
                    id={name}
                    name={name}
                    {...props}
                    className="w-full h-8 px-3 border-b  focus:border-b focus:border-blue-900 bg-white focus:bg-white focus:rounded-none text-gray-700  focus:ring-0 focus:outline-none transition duration-150 ease-in-out sm:text-sm"
                    required
                >
                    <option value=""></option>
                    <option value="Luxury">Luxury</option>
                    <option value="Affordable" selected>Affordable</option>
                    <option value="Investment">Investment</option>
                    <option value="Family">Family</option>
                    <option value="Starter">Starter</option>

                </select>
            </div>


        </>
    )
}
