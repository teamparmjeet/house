"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        mobile: '',
        email: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const validate = () => {
        const mobileRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const errors = {
            mobile: mobileRegex.test(formData.mobile.replace(/\D/g, '')) ? '' : 'Invalid mobile number',
            email: emailRegex.test(formData.email) ? '' : 'Invalid email address'
        };

        setErrors(errors);
        return !Object.values(errors).some(Boolean);
    };

    const isFormValid = () => {
        return Object.values(formData).every(field => field.trim() !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            alert(`Name: ${formData.name}\nMobile Number: ${formData.mobile}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    };

    return (
        <>
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
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#aa8453] hover:shadow-lg bg-gray-100'
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
                                className={`w-full px-4 py-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#aa8453] hover:shadow-lg bg-gray-100`}
                                placeholder="Enter your mobile number"
                                type="tel"
                                id="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                            {errors.mobile && <p className='text-red-500 text-sm mt-1'>{errors.mobile}</p>}
                        </div>

                        <div className='w-full'>
                            <label className='block text-lg font-semibold mb-2 text-gray-700' htmlFor="email">
                                Email
                            </label>
                            <input
                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#aa8453] hover:shadow-lg bg-gray-100`}
                                placeholder="Enter your email"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                        </div>

                        <div className='w-full'>
                            <label className='block text-lg font-semibold mb-2 text-gray-700' htmlFor="password">
                                Password
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#aa8453] hover:shadow-lg bg-gray-100'
                                placeholder="Enter your password"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={!isFormValid()}
                            className={`w-full py-2 px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out ${
                                isFormValid() ? 'bg-[#aa8453] text-white hover:bg-[#8c6d45] hover:scale-105' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                            } focus:outline-none focus:ring-2 focus:ring-[#aa8453]`}>
                            Sign Up
                        </button>

                        <Link href="/page/auth/login" className='block text-center text-sm text-gray-700 hover:text-gray-900 mt-4'>
                            Already have an account? <span className='text-[#aa8453] font-semibold'>Sign In</span>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
