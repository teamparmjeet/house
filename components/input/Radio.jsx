import React from 'react'

export default function Radio({ name, value,id }) {
    return (
        <>
            <label
                htmlFor={id}
                className="flex items-center gap-2 cursor-pointer bg-white border border-gray-300 rounded-lg p-2 shadow-sm hover:border-blue-500 transition duration-200"
            >
                <input
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    className="form-radio text-blue-500 focus:ring-0"
                />
                <span className="text-gray-700">{value}</span>
            </label>
        </>
    )
}
