"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Input from '@/app/admin/components/Input/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Update2({ params }) {
    const id = params.id;
    const router = useRouter();
    const [formData, setFormData] = useState({
        address: {
            houseNumber: '',
            colony: '',
            area: '',
            landmark: '',
            city: '',
            pincode: '',
            state: '',
            country: 'India',
        },
        size: 0,
        floor: 0,
        bedrooms: 0,
        bathrooms: 0,
        landSize: 0,
        yearBuilt: '',
        category: 'Luxury',
        status: 'Available',
    });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true); 

        try {
            const response = await axios.patch('/api/project/update', { id, ...formData });
          
            toast.success("Property Updated Successfully");
            const newProjectId = response.data?.projectid; 
            if (newProjectId) {
                router.push(`../update3/${newProjectId}`);
            } else {
                console.error('ID not found in response data.');
            }
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <ToastContainer />
            <h2 className="text-2xl font-bold mb-4">Update Details</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Address</h3>
                        <div className="grid grid-cols-1 bg-blue-50/50 p-2 rounded-md sm:grid-cols-2 gap-4">
                            <Input label="House Number" name="houseNumber" value={formData.address.houseNumber} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="Colony" name="colony" value={formData.address.colony} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="Area" name="area" value={formData.address.area} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="Landmark" name="landmark" value={formData.address.landmark} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="City" name="city" value={formData.address.city} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="Pincode" name="pincode" value={formData.address.pincode} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="State" name="state" value={formData.address.state} onChange={handleAddressChange} disabled={isUpdating} />
                            <Input label="Country" name="country" value={formData.address.country} onChange={handleAddressChange} disabled={isUpdating} />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Property Details</h3>
                        <div className="grid grid-cols-1 bg-blue-50/50 p-2 rounded-md sm:grid-cols-2 gap-4">
                            <Input label="Size" name="size" type="number" value={formData.size} onChange={handleChange} disabled={isUpdating} />
                            <Input label="Floor" name="floor" type="number" value={formData.floor} onChange={handleChange} disabled={isUpdating} />
                            <Input label="Bedrooms" name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} disabled={isUpdating} />
                            <Input label="Bathrooms" name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} disabled={isUpdating} />
                            <Input label="Land Size" name="landSize" type="number" value={formData.landSize} onChange={handleChange} disabled={isUpdating} />
                            <Input label="Year Built" name="yearBuilt" type="number" value={formData.yearBuilt} onChange={handleChange} disabled={isUpdating} />
                        </div>
                    </div>

                    <div className="gap-4 grid md:grid-cols-2 bg-blue-50/50 p-2 rounded-md">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                id="category"
                                name="category"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                value={formData.category}
                                onChange={handleChange}
                                disabled={isUpdating}
                            >
                                <option value="Luxury">Luxury</option>
                                <option value="Affordable">Affordable</option>
                                <option value="Investment">Investment</option>
                                <option value="Family">Family</option>
                                <option value="Starter">Starter</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                            <select
                                id="status"
                                name="status"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                value={formData.status}
                                onChange={handleChange}
                                disabled={isUpdating}
                            >
                                <option value="Available">Available</option>
                                <option value="Sold">Sold</option>
                                <option value="Pending">Pending</option>
                                <option value="Under Offer">Under Offer</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 mt-4 font-semibold text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
