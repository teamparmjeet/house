"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loader/Loading";
import Imagegallery from "@/components/gallery/Imagegallery";
import Gallery from "@/components/gallery/Gallery";
import Details from "@/components/Details/Details";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function SinglePage({ params }) {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = params.id;

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`/api/project/fetch-single/${id}`);
                setProject(response.data.project);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch project data");
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <Navbar />
            <div className=" h-16 bg-2"></div>
            <div className=" h-5"></div>

            <div className="container lg:w-[90%] mx-auto">
                <Gallery project={project.featureImage} />



                <h2 className=" font-semibold text-2xl underline underline-offset-4 mt-4 mb-2">Images</h2>
                <div className=" overflow-scroll lg:h-64 h-36">
                    <Imagegallery item={project.images} />
                </div>

                <div className=" bg-gray-100 shadow-lg">
                    <div className=" flex flex-wrap  justify-evenly  mb-4">
                        <div className=" text-center p-2 ">
                            <p className='font-semibold text-xs md:text-md lg:text-lg text-gray-700'>  {project.bedrooms ? `${project.bedrooms} BHK ` : ''}{project.type}</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Configurations</p>
                        </div>

                        <div className=" text-center p-2 ">
                            <p className='font-semibold text-xs md:text-md lg:text-lg text-gray-700'><span>{new Date(project.dateListed).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</span>            </p>
                            <p className=' text-gray-500 text-xs font-semibold'>Possession Starts</p>
                        </div>

                        <div className=" text-center p-2 ">
                            <p className='font-semibold text-xs md:text-md lg:text-lg text-gray-700'>₹ {project.price}</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Avg. Price</p>
                        </div>
                        <div className=" text-center p-2 ">
                            <p className='font-semibold text-xs md:text-md lg:text-lg text-gray-700'>{project.address.area}</p>
                            <p className=' text-gray-500 text-xs font-semibold'>Area</p>
                        </div>

                    </div>
                </div>
                <div className=' bg-zinc-100 py-6'>
                    <div className="container  mx-auto lg:w-[90%]">
                        <Details item={project} />
                    </div>
                </div>

            </div>
            <Footer />

        </>
    );
}
