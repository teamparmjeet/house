"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/card/contactus/ContactUs';
import Input from '@/app/admin/components/Input/Input';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page({ params }) {
    const [serviceType, serviceLocation] = decodeURIComponent(params.data).split(',');
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: serviceLocation,
        servicetype: serviceType,
        address: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const response = await axios.post('/api/service/create', formData);
            if (response.status === 200) {
                setSuccess(true);
                setFormData({
                    name: '',
                    mobile: '',
                    city: serviceLocation,
                    servicetype: serviceType,
                    address: '',
                    description: ''
                });
                toast.success("Request Sent Successfullt")
            }
        } catch (error) {
            // Handle errors
            console.error('Submission error:', error);
            setErrors({ submit: 'An error occurred while submitting the request. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="h-16 bg-blue-700"></div>
            <ToastContainer />
            <div className="bg-gray-50">
                <div className="container mx-auto lg:w-[90%] py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="sticky top-20">
                                <ContactUs />
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                            <div className="text-gray-700 mb-6">
                                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                                <p className="">
                                    We are JP Plumber Service, a trusted plumbing firm in Jaipur with over 23 years of experience. Our expertise allows us to understand and meet customer needs efficiently. We’re delighted to offer our exceptional services through Hometriangle.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-800 my-8">Request a Service</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div>
                                        <Input
                                            label="Name"
                                            name="name"
                                            className="text-lg"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            label="Mobile Number"
                                            className="text-lg"
                                            type="number"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-800 mb-2">City</label>
                                        <select
                                            name="city"
                                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                            value={formData.city}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select City</option>
                                            <option value="Jaipur">Jaipur</option>
                                            <option value="Kota">Kota</option>
                                            <option value="Jodhpur">Jodhpur</option>
                                            <option value="Bikaner">Bikaner</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="servicetype" className="block text-sm font-medium text-gray-800 mb-2">Service Type</label>
                                        <select
                                            name="servicetype"
                                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                            value={formData.servicetype}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Service</option>
                                            <option value="Plumbing">Plumbing Services</option>
                                            <option value="Electrical">Electrical Services</option>
                                            <option value="Carpentry">Carpentry Services</option>
                                            <option value="Painting">Painting Services</option>
                                        </select>
                                    </div>

                                    <div className='md:col-span-2'>
                                        <Input
                                            label="Address"
                                            name="address"
                                            placeholder="111 Extension, City"
                                            className="text-lg"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className='md:col-span-2'>
                                        <Input
                                            label="Description"
                                            type="textarea"
                                            name="description"
                                            placeholder="Describe your request"
                                            className="text-lg"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {errors.submit && <p className="text-red-500">{errors.submit}</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Submit Request'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
