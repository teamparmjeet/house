import React from 'react';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div className='bg-banner  px-1 md:px-0 relative z-10 flex justify-center items-center min-h-screen'>
                <div className='absolute inset-0 backdrop-blur-md z-20'></div>

                <div className='z-30 bg-white p-8 rounded-md shadow-lg max-w-md w-full'>
                <h2 className='text-4xl font-extrabold mb-8 text-center text-gray-800'>Sign In</h2>

                    <form className='space-y-6'>
                        <div className='w-full'>
                            <label className='block text-2 font-semibold mb-2' htmlFor="email">
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-1 focus:ring-[#aa8453] hover:shadow-lg hover:border-[#aa8453] bg-gray-100'
                                placeholder="Enter your email"
                                type="email"
                                id="email"
                                required
                            />
                        </div>

                        <div className='w-full'>
                            <label className='block text-2 font-semibold mb-2' htmlFor="password">
                                Password
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none focus:ring-1 focus:ring-[#aa8453] hover:shadow-lg hover:border-[#aa8453] bg-gray-100'
                                placeholder="Enter your password"
                                type="password"
                                id="password"
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-1 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
