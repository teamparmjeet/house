import React from 'react'

export default function Select({ label, name, ...props }) {
    return (
        <>
            <div>

                <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>

                <select
                    id={name}
                    name={name}
                    {...props}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
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
