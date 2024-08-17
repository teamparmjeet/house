"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';
import Image from 'next/image';
const Page = ({ params }) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [featureImages, setFeatureImages] = useState([]);
    const [normalImages, setNormalImages] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`/api/project/fetch-single/${params.id}`);
                setProject(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [params.id]);

    const handleFileChange = (event, type) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));

        if (type === 'feature') {
            setFeatureImages(prevImages => [...prevImages, ...newImages]);
        } else {
            setNormalImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const handleRemoveImage = (index, type) => {
        if (type === 'feature') {
            setFeatureImages(prevImages => prevImages.filter((_, i) => i !== index));
        } else {
            setNormalImages(prevImages => prevImages.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here
        alert('Form submitted!');
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-4">Error: {error}</div>;
    }

    return (
        <>
            <h1 className='text-4xl font-semibold text-center mb-6'>Add Images</h1>
            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <div className="grid gap-6">
                    <div className="flex flex-col gap-4">
                        <label className="text-lg font-medium text-gray-700" htmlFor="feature-images">
                            Feature Images
                        </label>
                        <input
                            className="w-full rounded-md border border-gray-300 bg-gray-100 text-gray-700 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                            type="file"
                            id="feature-images"
                            multiple
                            onChange={(e) => handleFileChange(e, 'feature')}
                        />
                        <div className="flex flex-wrap gap-4">
                            {featureImages.map((preview, index) => (
                                <div key={index} className="relative group">
                                    <Image
                                        src={preview}
                                        alt={`Feature preview ${index}`}
                                        className="w-32 h-32 object-cover rounded-lg border border-gray-300 transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => handleRemoveImage(index, 'feature')}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-lg font-medium text-gray-700" htmlFor="normal-images">
                            Normal Images
                        </label>
                        <input
                            className="w-full rounded-md border border-gray-300 bg-gray-100 text-gray-700 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                            type="file"
                            id="normal-images"
                            multiple
                            onChange={(e) => handleFileChange(e, 'normal')}
                        />
                        <div className="flex flex-wrap gap-4">
                            {normalImages.map((preview, index) => (
                                <div key={index} className="relative group">
                                    <Image
                                        src={preview}
                                        alt={`Normal preview ${index}`}
                                        className="w-32 h-32 object-cover rounded-lg border border-gray-300 transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => handleRemoveImage(index, 'normal')}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Page;
