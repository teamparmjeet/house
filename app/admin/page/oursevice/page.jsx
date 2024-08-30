"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Loading from '@/components/Loader/Loading';
import ServicePopup from '../../components/ServicePopup/ServicePopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [services, setServices] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedService, setSelectedService] = useState(null); // For popup
    const [isPopupVisible, setIsPopupVisible] = useState(false); // For popup visibility

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title && description) {
            setIsSubmitting(true);
            try {
                await axios.post('/api/AddService/create', { title, description });
                toast.success("Service Added Successfully")
                window.location.reload()
                setServices([...services, { title, description }]);
                setTitle('');
                setDescription('');
            } catch (error) {
                console.error('Error submitting service:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        setSelectedService(null);
    };

    const handleDeleteService = async (_id) => {
        try {
            await axios.delete(`/api/AddService/delete/${_id}`);
            toast.success("Service Deleted Successfully")
            window.location.reload()
            setServices(services.filter(service => service._id !== _id));
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const isFormValid = title && description;

    return (
        <div className="p-6 mx-auto">
              <ToastContainer />
            <button
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="bg-2 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
            >
                {isFormVisible ? 'Hide Form' : 'Add Service'}
            </button>

            {isFormVisible && (
                <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Add New Service</h2>
                    <Input
                        label="Title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mb-4"
                    />
                    <Input
                        label="Description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mb-4"
                    />
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Add Service'}
                    </button>
                </form>
            )}

            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Services List</h2>
                  
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-5 my-2 shadow-md border gap-2 cursor-pointer"
                            onClick={() => handleServiceClick(service)}
                        >
                            <div className="lg:col-span-1 bg-2 rounded-md px-2 text-white flex items-center">{service.title}</div>
                            <div className="lg:col-span-4 rounded-md px-2 text-gray-800 line-clamp-1 leading-9">{service.description}</div>
                        </div>
                    ))}

                    {isPopupVisible && selectedService && (
                        <ServicePopup
                            service={selectedService}
                            onClose={handleClosePopup}
                            onDelete={handleDeleteService}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
