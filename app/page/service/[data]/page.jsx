"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/card/contactus/ContactUs';
import Input from '@/app/admin/components/Input/Input';
import axios from 'axios';
import Service from '@/components/service/Service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page({ params }) {
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [city, setCity] = useState([]);
    const [serviceType, serviceLocation] = decodeURIComponent(params.data).split(',');
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: serviceLocation,
        servicetype: serviceType,
        address: '',
        description: '',
        date:'',
        time:''
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
                    description: '',
                    date: '',
                    time: ''
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

    useEffect(() => {
        const fetchCity = async () => {

            try {
                const response = await axios.get("/api/project/findallcity/project");
                setCity(response.data.cities)
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {

            }
        };

        fetchCity();
    }, []);

    const fetchServices = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/AddService/getdata/addservice');
            setServices(response.data.fetch);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchServices();
    }, []);

    const [metadata, setMetadata] = useState([]);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await axios.get('/api/metadata/fetchall/metadata');
                setMetadata(response.data.fetch);
            } catch (err) {
                console.error('Failed to fetch metadata:', err);
            }
        };

        fetchMetadata();
    }, []);


    const filteredMetadata = metadata.filter(item => item.page === 'Service');
    return (
        <>
            <Navbar />
            {filteredMetadata.map((item) => (
                 <title key={item._id}>{item.title}</title>
            ))}
            <ToastContainer />
            <div className="bg-gray-50 bgblue pt-20">
                <div className="container mx-auto lg:w-[90%] py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="sticky top-20">
                                <ContactUs />
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">


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
                                            className="block h-12 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                            value={formData.city}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select City</option>
                                            {city.map((item) => (

                                                <option key={item._id} value={item}>{item}</option>
                                            ))}

                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="servicetype" className="block text-sm font-medium text-gray-800 mb-2">Service Type</label>
                                        <select
                                            name="servicetype"
                                            className="block w-full h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                            value={formData.servicetype}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Service</option>
                                            {isLoading ? (
                                                <li className="px-4 py-2 text-sm font-medium text-gray-700">...</li>
                                            ) : (
                                                services.map((service, index) => (
                                                    <option key={index} value={service.title}>{service.title}</option>



                                                ))
                                            )}
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

                                    <div className='md:col-span-2'>
                                        <Input
                                            label="Date"
                                            type="date"
                                            name="date"
                                            placeholder="Describe your request"
                                            className="text-lg"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className='md:col-span-2'>
                                        <Input
                                            label="Time"
                                            type="time"
                                            name="time"
                                            placeholder="Describe your request"
                                            className="text-lg"
                                            value={formData.time}
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

            <Service />
            <Footer />
        </>
    );
}
