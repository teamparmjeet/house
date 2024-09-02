"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';

export default function ServiceRequests() {
    const [serviceRequests, setServiceRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Change this value to set how many items you want per page

    useEffect(() => {
        const fetchServiceRequests = async () => {
            try {
                const response = await axios.get('/api/service/fetchall/service'); // Replace with your actual API endpoint
                setServiceRequests(response.data.fetch);
            } catch (err) {
                setError('Error fetching service requests');
            } finally {
                setLoading(false);
            }
        };

        fetchServiceRequests();
    }, []);

    const totalPages = Math.ceil(serviceRequests.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = serviceRequests.slice(indexOfFirstItem, indexOfLastItem);

    if (loading) return <Loading />;
    if (error) return <p className="text-lg text-red-600">{error}</p>;

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
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

            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Service Requests</h1>

            {serviceRequests.length === 0 ? (
                <p className="text-lg text-gray-700">No service requests found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead className="bg-2 text-white">
                            <tr>
                                <th className="p-2 text-left font-medium">Requestor</th>
                                <th className="p-2 text-left font-medium">Service Type</th>
                                <th className="p-2 text-left font-medium">Mobile</th>
                                <th className="p-2 text-left font-medium">Date</th>
                                <th className="p-2 text-left font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {currentItems.map(request => (
                                <tr key={request.id} className="hover:bg-[#005ca8] hover:text-white cursor-pointer duration-200">
                                    <td className="py-2 px-6 border-b">{request.name}</td>
                                    <td className="py-2 px-6 border-b">{request.servicetype}</td>
                                    <td className="py-2 px-6 border-b">{request.mobile}</td>
                                    <td className="py-2 px-6 border-b">{request.date}</td>
                                    <td className="py-2 px-6 border-b">{request.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
