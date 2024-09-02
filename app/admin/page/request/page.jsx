"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';

export default function PropertyPostRequest() {
    const [serviceRequests, setServiceRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // You can adjust this number based on how many items you want per page

    useEffect(() => {
        const fetchServiceRequests = async () => {
            try {
                const response = await axios.get('/api/postproperty/fetchall/porpery');
                setServiceRequests(response.data.fetch);
            } catch (err) {
                setError('Error fetching service requests');
            } finally {
                setLoading(false);
            }
        };

        fetchServiceRequests();
    }, []);

    // Calculate the total pages
    const totalPages = Math.ceil(serviceRequests.length / itemsPerPage);

    // Determine the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = serviceRequests.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    if (loading) return <Loading />;
    if (error) return <p className="text-lg text-red-600">{error}</p>;

    return (
        <>
             <div className="p-8  min-h-screen">
            <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-0 md:mb-2">
                    <p className="text-gray-600 text-xs md:text-sm">
                        Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, serviceRequests.length)} of {serviceRequests.length}
                    </p>
                </div>
                <div className="flex justify-between md:justify-end w-full md:w-fit flex-row md:items-center gap-y-2 md:gap-x-4">
                    <div className="flex gap-1 md:gap-2 mt-2 md:mt-0">
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
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">City</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Mobile Number</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Property Type</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Buy/Sell</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {currentItems.map((request, index) => (
                                    <tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.city}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.mobileNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.propertytype}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.purpose}</td>
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
