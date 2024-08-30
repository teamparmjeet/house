"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Page() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { data: session, status } = useSession();

    const useremail = session?.user?.email;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/admin/getdata/admin');
                setUsers(response.data.fetch);
            } catch (err) {
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <Loading />;
    if (error) return <p className="text-lg text-red-600">{error}</p>;

    const handleWhatsAppClick = (mobile) => {
        const url = `https://wa.me/${mobile}`;
        window.open(url, '_blank');
    };

    // Filter out the user whose email is equal to useremail
    const filteredUsers = users.filter(user => user.email !== useremail);

    return (
        <div className="py-4 bg-gray-100">
            {filteredUsers.length === 0 ? (
                <p className="text-lg text-gray-700">No users found.</p>
            ) : (
                <div className="grid gap-y-6">
                    {filteredUsers.map((user, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className='relative'>
                                    <p className="text-lg font-semibold">{user.name}</p>
                                    <p className="text-gray-600">{user.email}</p>
                                    <div className='absolute -top-5 -left-2 text-white rounded-md text-xs px-2 py-0.5 bg-2'>
                                        {user.usertype === "1" ? 'User' : user.usertype === "2" ? 'Admin' : 'Unknown'}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="font-semibold">{user.mobile}</p>
                                <button onClick={() => handleWhatsAppClick(user.mobile)}>
                                    <Image src="/image/whatsapp.webp" alt="WhatsApp" width={30} height={30} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
