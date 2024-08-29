import React from 'react';

export default function Enquiry() {
    // Dummy data
    const enquiries = [
        { id: 1, name: 'Michael Scott', email: 'michael@dundermifflin.com', subject: 'Product Inquiry', date: '2024-08-01' },
        { id: 2, name: 'Pam Beesly', email: 'pam@dundermifflin.com', subject: 'Service Feedback', date: '2024-08-02' },
        { id: 3, name: 'Jim Halpert', email: 'jim@dundermifflin.com', subject: 'Order Status', date: '2024-08-03' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Enquiries</h1>
            
            {enquiries.length === 0 ? (
                <p className="text-lg text-gray-600">No enquiries found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead className="bg-gray-200 text-gray-600">
                            <tr>
                                <th className="py-3 px-4 border-b">ID</th>
                                <th className="py-3 px-4 border-b">Name</th>
                                <th className="py-3 px-4 border-b">Email</th>
                                <th className="py-3 px-4 border-b">Subject</th>
                                <th className="py-3 px-4 border-b">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {enquiries.map(enquiry => (
                                <tr key={enquiry.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4 border-b">{enquiry.id}</td>
                                    <td className="py-3 px-4 border-b">{enquiry.name}</td>
                                    <td className="py-3 px-4 border-b">{enquiry.email}</td>
                                    <td className="py-3 px-4 border-b">{enquiry.subject}</td>
                                    <td className="py-3 px-4 border-b">{enquiry.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
