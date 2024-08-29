"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';

export default function ServiceRequests() {
    const [serviceRequests, setServiceRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <Loading />;
    if (error) return <p className="text-lg text-red-600">{error}</p>;

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
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
                                <th className="p-2 text-left font-medium">status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {serviceRequests.map(request => (
                                <tr key={request.id} className="hover:bg-[#005ca8] hover:text-white  cursor-pointer  duration-200">
                                    <td className="py-2 px-6 border-b">{request.name}</td>
                                    <td className="py-2 px-6 border-b">{request.servicetype}</td>
                                    <td className="py-42px-6 border-b">{request.mobile}</td>
                                    <td className="py-2 px-6 border-b">{new Date(request.createdAt).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit',
                                    })}</td>
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
