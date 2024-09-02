"use client"
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
export default function Addnew() {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        metadata: '',
        type: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const router = useRouter();

    const validateForm = useCallback(() => {
        const { title, location, price, metadata } = formData;
        return title && location && price && metadata;
    }, [formData]);

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [formData, validateForm]);

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [formData, validateForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await axios.post('/api/project/create', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                toast.success("Property Added Successfully")
                const newProjectId = response.data.data.id;
                router.push(`addnew/update/${newProjectId}`)
                setFormData({
                    title: '',
                    location: '',
                    price: '',
                    type: '',
                    metadata:''
                });
            } else {
                setMessage(`Error: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error adding property:', error);
            setMessage('An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ToastContainer />

            <div className="mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-6">Add New Property</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid lg:grid-cols-4 gap-4">
                        <div className='lg:col-span-1'>
                            <Select
                                name="title"
                                label="Title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='lg:col-span-1'>
                            <Input
                                name="location"
                                label="Location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='lg:col-span-1'>
                            <Input
                                name="price"
                                label="Price"
                                value={formData.price}
                                onChange={handleChange}
                                type="number"
                            />
                        </div>
                        
                        <div className='lg:col-span-1'>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                required
                            >
                                <option value=""></option>

                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Land">Land</option>
                                <option value="Office">Office</option>
                            </select>
                        </div>
                        <div className='lg:col-span-2'>
                            <Input
                                name="metadata"
                                label="Metadata"
                                value={formData.metadata}
                                onChange={handleChange}
                                type="text"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`w-full   ${isFormValid ? 'bg-indigo-600' : ' bg-indigo-200'} text-white py-2 px-4 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            disabled={isSubmitting || !isFormValid}
                        >
                            {isSubmitting ? 'Adding...' : 'Add Property'}
                        </button>
                    </div>

                    {message && <p className="text-red-500 mt-4">{message}</p>}
                </form>
            </div>
        </>
    );
}
