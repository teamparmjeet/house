"use client"
import React, { useState } from 'react';
import Input from '@/app/admin/components/Input/Input';
import { PhoneCall } from "lucide-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobilenumber: '',
        message: ''
    });


    const [isFormValid, setIsFormValid] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };


        setFormData(updatedFormData);


        setIsFormValid(
            updatedFormData.name.trim() &&
            updatedFormData.email.trim() &&
            updatedFormData.mobilenumber.trim() &&
            updatedFormData.message.trim()
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('/api/contactus/create', formData);
            if (response.status ===200) {
                toast.success("Request Sent Successfullt")
            }
            console.log('Form submitted successfully:', response.data);

            setFormData({ name: '', email: '', mobilenumber: '', message: '' });
            setIsFormValid(false);
        } catch (error) {

            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="flex bg-banner flex-col lg:flex-row  h-screen bg-gray-50">
              <ToastContainer />
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/40'></div>
            <div className="flex-1 h-96 my-auto z-50 bg-white backdrop-blur-md rounded-r-[50px] p-10 flex flex-col justify-center items-start space-y-6">
                <h1 className="text-5xl font-semibold text-gray-800 mb-4">
                    Get in Touch with Our Sales Team
                </h1>
                <p className="text-gray-600 text-lg">
                    Provide your details, and our team will connect with you promptly.
                </p>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                    onClick={() => window.location.href = 'tel:6378822375'}
                >
                    <PhoneCall size={18} className="text-white" />
                    6378822375
                </button>
            </div>

            <div className="flex-1 flex justify-center items-center lg:py-0 py-10 relative">
                <div className="bg-white border shadow-xl rounded-md w-full max-w-lg p-8">
                    <h1 className='text-4xl font-semibold mb-5'>Contact Us</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="number"
                            name="mobilenumber"
                            placeholder="Mobile Number"
                            value={formData.mobilenumber}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Description"
                            rows={7}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className={`w-full py-2 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition
                                ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' : 'bg-gray-400 cursor-not-allowed'}`}
                            disabled={!isFormValid}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
