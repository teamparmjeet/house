"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loader/Loading";
import Imagegallery from "@/components/gallery/Imagegallery";
import Details from "@/components/details/Details";
import { Edit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SinglePage({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        // Optionally redirect or show a success message
        alert("Project deleted successfully");
        router.push("/admin/page/property")
      } catch (error) {
        alert("Failed to delete project");
      }
    }
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
