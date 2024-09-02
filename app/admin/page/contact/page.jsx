"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';

export default function Page() {
    const [serviceRequests, setServiceRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust the number of items per page here

    useEffect(() => {
        const fetchServiceRequests = async () => {
            try {
                const response = await axios.get('/api/contactus/fetchall/contact');
                setServiceRequests(response.data.fetch);
            } catch (err) {
                setError('Error fetching service requests');
            } finally {
                setLoading(false);
            }
        };

        fetchServiceRequests();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = serviceRequests.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(serviceRequests.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) return <Loading />;
    if (error) return <p className="text-lg text-red-600">{error}</p>;

    return (
        <>
            <div className="p-8  min-h-screen">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div className="mb-2 md:mb-0">
                        <p className="text-gray-600 text-xs md:text-sm">
                            Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, serviceRequests.length)} of {serviceRequests.length}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className="bg-[#0078db]/50 hover:bg-[#0078db] text-white rounded-md px-2 py-1 text-xs md:text-sm capitalize"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <button
                            className="bg-[#0078db] text-white rounded-md px-2 py-1 text-xs md:text-sm capitalize"
                        >
                            {currentPage}
                        </button>
                        <button
                            className="bg-[#0078db]/50 hover:bg-[#0078db] text-white rounded-md px-2 py-1 text-xs md:text-sm capitalize"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="p-6 bg-gray-100 min-h-screen">
                    {currentItems.length === 0 ? (
                        <p className="text-lg text-gray-700">No service requests found.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                <thead className="bg-2 text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Mobile Number</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {currentItems.map((request, index) => (
                                        <tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.mobilenumber}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.message}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
