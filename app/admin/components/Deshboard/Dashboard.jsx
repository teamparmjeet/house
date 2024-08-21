"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Home, Inbox } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
export default function Dashboard() {
    const { data: session } = useSession();
    const [totalProperties, setTotalProperties] = useState(null);

    useEffect(() => {

        const fetchProperties = async () => {
            try {
                const response = await axios.get('/api/project/number');
                setTotalProperties(response.data.fetch);
            } catch (error) {
                console.error("Error fetching total properties:", error);
            }
        };

        fetchProperties();

    }, []);
    return (
        <div className="">
            <h2 className="text-4xl font-extrabold mb-8  bg-gray-100 p-4 rounded-lg shadow-lg">
                Welcome, <span className="text-2">{session?.user?.name}</span>
            </h2>


            <div className="bg-white p-8 rounded-xl shadow-lg">


                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                    <Link href="/admin/page/property">
                        <div className="flex items-center p-6 bg-[#f8f5f0] rounded-xl shadow-md border-l-4 border-[#aa8453]">
                            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                                <Home className="text-green-500 w-8 h-8" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-gray-800">Total Properties</h3>
                                <p className="mt-2 text-2xl font-bold text-gray-900">{totalProperties}</p>
                            </div>
                        </div>
                    </Link>



                </div>
            </div>
        </div>
    );
}
