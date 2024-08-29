"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Home, Calendar, FileText } from 'lucide-react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';
import Link from 'next/link';

export default function Dashboard() {
    const { data: session } = useSession();
    const [totalProperties, setTotalProperties] = useState(null);
    const [latestUpdate, setLatestUpdate] = useState(null);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('/api/project/number/project');
                setTotalProperties(response.data.fetch);

                // Simulating fetching latest update
                setLatestUpdate("New property listings added recently.");
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchProperties();
    }, []);

    return (
        <div className="p-4 bg-gray-100 ">
            <h2 className="text-2xl font-extrabold mb-8 bg-white p-4 rounded-lg shadow-lg">
                Welcome, <span className="text-indigo-600">{session?.user?.name}</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Link href="/admin/page/property">
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
                                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
                                    <Home className="text-blue-500 w-8 h-8" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Total Properties</h3>
                                    <p className="mt-2 text-2xl font-bold text-gray-900">{totalProperties}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="flex items-center p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
                            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                                <Calendar className="text-green-500 w-8 h-8" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-gray-800">Latest Update</h3>
                                <p className="mt-2 text-gray-700">{latestUpdate}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
