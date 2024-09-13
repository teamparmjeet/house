"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loader/Loading";
import Imagegallery from "@/components/gallery/Imagegallery";
import Details from "@/components/details/Details";
import { Edit, Ticket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

export default function SinglePage({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState("");



  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get("/api/offer/getdata/offer");
      setOffers(response.data.fetch);
    } catch (error) {
      console.error("Error fetching offers:", error);
      toast.error("Error fetching offers. Please try again later.");
    }
  };



  const handleAddOffer = async () => {
    if (!project._id) {
      toast.error("Project ID is missing. Please select a project.");
      return;
    }
  
    try {
   
      await axios.patch("/api/offer/update", {
        id: selectedOffer,
        productid: project._id,
      });
      toast.success("Offer added successfully!");
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error adding offer:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Failed to add offer: ${error.response.data.message}`);
      } else {
        toast.error("Failed to add offer. Please try again later.");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  

  const id = params.id;
  const router = useRouter();
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

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      try {
        await axios.delete(`/api/project/delete/${id}`);
     
        alert("Project deleted successfully");
        router.push("/admin/page/property")
      } catch (error) {
        alert("Failed to delete project");
      }
    }
  };


  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="flex justify-between">
        <Link href={`/admin/page/allimages/${project._id}`}>
          <button className="bg-2 text-white rounded-md px-2 py-1 gap-x-2 flex">
            <Edit size={20} /> Edit Details
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-700 text-white rounded-md px-2 py-1 gap-x-2 flex"
        >
          <Edit size={20} /> DELETE
        </button>
      </div>

      <button onClick={handleOpenPopup} className="bg-2 my-2 text-white rounded-md px-2 py-1 gap-x-2 flex">
        <Ticket size={20} /> Add to offer
      </button>
      <Toaster />
      {isPopupOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm transition-all duration-300'>
        <div className='bg-white p-8 rounded-lg w-full max-w-lg mx-auto relative shadow-lg transform transition-transform duration-300 scale-95'>
          <button
            onClick={handleClosePopup}
            className='absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold transition-colors duration-300'
          >
            &times;
          </button>
      
          <h2 className='text-xl font-semibold text-center mb-4 text-gray-700'>Add to Offer</h2>
          
          <select 
            id="offerSelect" 
            className="block w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            onChange={(e) => setSelectedOffer(e.target.value)}
            required
          >
            <option value="">Select Offer Type</option>
            {offers.map((item) => (
              <option key={item.type} className="text-black" value={item._id}>
                {item.type}
              </option>
            ))}
          </select>
      
          <button 
           onClick={handleAddOffer}
            className='w-full mt-6 bg-2 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md'
          >
            Add Offer
          </button>
        </div>
      </div>
      
      )}

      <h2 className="font-semibold text-2xl underline underline-offset-4 my-2">Feature Images</h2>
      <div className="overflow-scroll lg:h-56 h-36">
        <Imagegallery item={project.featureImage} />
      </div>
      <h2 className="font-semibold text-2xl underline underline-offset-4 mt-4 mb-2">Images</h2>
      <div className="overflow-scroll lg:h-56 h-36">
        <Imagegallery item={project.images} />
      </div>

      <div className="bg-gray-100 shadow-lg">
        <div className="flex flex-wrap justify-evenly mb-4">
          <div className="text-center p-2">
            <p className="font-semibold text-xs md:text-md lg:text-lg text-gray-700">
              {project.bedrooms ? `${project.bedrooms} BHK ` : ''}
              {project.type}
            </p>
            <p className="text-gray-500 text-xs font-semibold">Configurations</p>
          </div>

          <div className="text-center p-2">
            <p className="font-semibold text-xs md:text-md lg:text-lg text-gray-700">
              <span>{new Date(project.dateListed).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</span>
            </p>
            <p className="text-gray-500 text-xs font-semibold">Possession Starts</p>
          </div>

          <div className="text-center p-2">
            <p className="font-semibold text-xs md:text-md lg:text-lg text-gray-700">₹ {project.price}</p>
            <p className="text-gray-500 text-xs font-semibold">Avg. Price</p>
          </div>
          <div className="text-center p-2">
            <p className="font-semibold text-xs md:text-md lg:text-lg text-gray-700">{project.address.area}</p>
            <p className="text-gray-500 text-xs font-semibold">Area</p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 py-6">
        <div className="container mx-auto lg:w-[90%]">
          <Details item={project} />
        </div>
      </div>
    </>
  );
}
