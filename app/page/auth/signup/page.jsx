"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: ''
    });

    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const router = useRouter();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = async () => {
        try {
            const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            await axios.post('@/app/page/api/send-otp', { mobile: formData.mobile, otp: generatedOtp });
            setIsOtpSent(true);
            toast.success('OTP sent successfully!');
        } catch (error) {
            toast.error('Failed to send OTP.');
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would verify the OTP, for example by comparing with a stored value.
            if (otp === '123456') {  // Replace this with actual OTP verification logic
                const response = await axios.post('@/app/page/api/admin/signup', formData);

                if (response.status === 201) {
                    toast.success("Admin registered successfully!");
                    setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        password: ''
                    });
                } else {
                    toast.error(response.data.message || 'An error occurred. Please try again.');
                }
            } else {
                toast.error('Invalid OTP');
            }
        } catch (error) {
            toast.error('An error occurred while submitting the form. Please try again.');
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <Navbar />
            <div className='bg-banner px-1 md:px-0 relative z-10 flex justify-center items-end md:items-center min-h-screen'>
                <div className='absolute inset-0 bg-opacity-50 backdrop-blur-md z-20'></div>
                <div className='z-30 bg-white p-8 rounded-lg shadow-2xl max-w-md w-full'>
                    <h2 className='text-4xl font-bold mb-8 text-center text-gray-800'>Sign Up</h2>

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='w-full'>
                            <label className='block text-lg font-semibold mb-2 text-gray-700' htmlFor="name">
                                Name
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#005ca8] hover:shadow-lg bg-gray-100'
                                placeholder="Enter your name"
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='w-full'>
                            <label className='block text-lg font-semibold mb-2 text-gray-700' htmlFor="mobile">
                                Mobile Number
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#005ca8] hover:shadow-lg bg-gray-100'
                                placeholder="Enter your mobile number"
                                type="tel"
                                id="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                className="mt-2 w-full py-2 px-4 rounded-lg shadow-lg bg-[#005ca8] text-white hover:bg-[#8c6d45] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#005ca8]"
                            >
                                Send OTP
                            </button>
                        </div>

                        {isOtpSent && (
                            <div className='w-full'>
                                <label className='block text-lg font-semibold mb-2 text-gray-700' htmlFor="otp">
                                    OTP
                                </label>
                                <input
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#005ca8] hover:shadow-lg bg-gray-100'
                                    placeholder="Enter OTP"
                                    type="text"
                                    id="otp"
                                    value={otp}
                                    onChange={handleOtpChange}
                                    required
                                />
                            </div>
                        )}

                        <button
                            type='submit'
                            className={`w-full py-2 px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out bg-[#005ca8] text-white hover:bg-[#8c6d45] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#005ca8]`}>
                            Sign Up
                        </button>

                        <Link href="/page/auth/login" className='block text-center text-sm text-gray-700 hover:text-gray-900 mt-4'>
                            Already have an account? <span className='text-[#005ca8] font-semibold'>Sign In</span>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
