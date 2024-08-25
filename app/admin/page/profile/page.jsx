"use client";

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image'; // For profile picture
import { Edit2 } from 'lucide-react'; // Pencil icon for edit

export default function Profile() {
    const { data: session, status } = useSession();
    const [isEditing, setIsEditing] = useState(false);

    if (status === 'loading') {
        return <p>Loading...</p>; // Display a loading message while fetching session data
    }

    if (!session?.user) {
        return <p>No user data available</p>; // Handle the case where the user is not logged in
    }

    const { name, email, phone } = session.user; // Adjust this based on your actual user data structure

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <Image
                    src="/path/to/default-avatar.png" // Replace with the path to your avatar or profile image
                    alt="User Avatar"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-gray-300"
                />
                <div className="ms-4 flex-1">
                    <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
                    <p className="text-gray-600">{email}</p>
                    {phone && <p className="text-gray-600">{phone}</p>}
                </div>
                <button
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-150"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    <Edit2 size={24} />
                </button>
            </div>

            {isEditing && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Edit Profile</h2>
                    {/* Implement form or input fields here for editing user information */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                defaultValue={name}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                defaultValue={email}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                disabled // Email usually can't be edited directly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                defaultValue={phone || ''}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-150"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
