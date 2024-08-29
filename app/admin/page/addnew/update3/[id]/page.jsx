"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "@/app/admin/components/Input/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Update3({ params }) {
  const id = params.id;
  const router = useRouter();
  const [formData, setFormData] = useState({
    amenities: [""],
    features: [""],
    listingType: "New Listing",
    dateListed: new Date().toISOString().split("T")[0],
    energyRating: "",
    purpose: "",
    nearbyFacilities: [""],
    parkingSpaces: 0,
    description: "",
    propertyType: "",
    yearRenovated: 0,
    hasGarage: false,
    hasPool: false,
    hasGarden: false,
    heatingType: "",
    coolingType: "",
    securityFeatures: [""],
    flooringType: "",
    viewType: "",
    petFriendly: false,
  });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Fetch existing data when the component mounts
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get(`/api/project/fetch-single/${id}`);
        const projectData = response.data.project;

        if (projectData) {
          setFormData({
            amenities: projectData.amenities?.length ? projectData.amenities : [""],
            features: projectData.features?.length ? projectData.features : [""],
            listingType: projectData.listingType || "New Listing",
            dateListed: projectData.dateListed || new Date().toISOString().split("T")[0],
            energyRating: projectData.energyRating || "",
            purpose: projectData.purpose || "",
            nearbyFacilities: projectData.nearbyFacilities?.length ? projectData.nearbyFacilities : [""],
            parkingSpaces: projectData.parkingSpaces || 0,
            description: projectData.description || "",
            propertyType: projectData.propertyType || "",
            yearRenovated: projectData.yearRenovated || 0,
            hasGarage: projectData.hasGarage || false,
            hasPool: projectData.hasPool || false,
            hasGarden: projectData.hasGarden || false,
            heatingType: projectData.heatingType || "",
            coolingType: projectData.coolingType || "",
            securityFeatures: projectData.securityFeatures?.length ? projectData.securityFeatures : [""],
            flooringType: projectData.flooringType || "",
            viewType: projectData.viewType || "",
            petFriendly: projectData.petFriendly || false,
          });
        }
      } catch (error) {
        console.error("Error fetching property data:", error);
        toast.error("Failed to load property data.");
      }
    };

    fetchPropertyData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  const addField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeField = (index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true); // Disable fields after form submission

    try {
      const response = await axios.patch("/api/project/update", {
        id,
        ...formData,
      });

      toast.success("Property Updated Successfully");
      const newProjectId = response.data?.projectid; // Optional chaining to avoid errors
      if (newProjectId) {
        window.location.reload();
      } else {
        console.error("ID not found in response data.");
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Update Details</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-6">
          <div className="space-y-4 lg:col-span-1 md:col-span-1">
            <div className="grid grid-cols-1  p-2 rounded-md sm:grid-cols-2 gap-4">

            {/* <label htmlFor="purpose" className="block   text-sm font-medium text-gray-700">Buy/Rent</label> */}
            <select name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              disabled={isUpdating}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
                
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
              <option value="Focus">Focus</option>
              <option value="Top Project">Top Project</option>
            </select>

            {/* <label htmlFor="listingType" className="block  text-sm font-medium text-gray-700">ListingType</label> */}
            <select name="listingType"
              value={formData.listingType}
              onChange={handleChange}
              disabled={isUpdating}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
              <option value="New Listing">New Listing</option>
              <option value="Featured">Featured</option>
              <option value="Focus">Focus</option>
              <option value="Top Project">Top Project</option>
            </select>

              <div>
                {formData.amenities.map((amenity, index) => (
                  <div key={`amenity-${index}`} className="flex items-center">
                    <Input
                      label={`Amenity ${index + 1}`}
                      name={`amenity-${index}`}
                      value={amenity}
                      onChange={(e) =>
                        handleArrayChange(index, "amenities", e.target.value)
                      }
                      disabled={isUpdating}
                    />
                    {formData.amenities.length > 1 && (
                      <button
                        type="button"
                        className="ml-2 text-red-600"
                        onClick={() => removeField(index, "amenities")}
                        disabled={isUpdating}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-xs bg-blue-700 mt-2 font-semibold text-white py-1 px-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => addField("amenities")}
                  disabled={isUpdating}
                >
                  Add More
                </button>
              </div>

              <div>
                {formData.features.map((feature, index) => (
                  <div key={`feature-${index}`} className="flex items-center">
                    <Input
                      label={`Feature ${index + 1}`}
                      name={`feature-${index}`}
                      value={feature}
                      onChange={(e) =>
                        handleArrayChange(index, "features", e.target.value)
                      }
                      disabled={isUpdating}
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        className="ml-2 text-red-600"
                        onClick={() => removeField(index, "features")}
                        disabled={isUpdating}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-xs bg-blue-700 mt-2 font-semibold text-white py-1 px-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => addField("features")}
                  disabled={isUpdating}
                >
                  Add More
                </button>
              </div>

              <div>
                {formData.nearbyFacilities.map((facility, index) => (
                  <div
                    key={`nearbyFacility-${index}`}
                    className="flex items-center"
                  >
                    <Input
                      label={`Nearby Facility ${index + 1}`}
                      name={`nearbyFacility-${index}`}
                      value={facility}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "nearbyFacilities",
                          e.target.value
                        )
                      }
                      disabled={isUpdating}
                    />
                    {formData.nearbyFacilities.length > 1 && (
                      <button
                        type="button"
                        className="ml-2 text-red-600"
                        onClick={() => removeField(index, "nearbyFacilities")}
                        disabled={isUpdating}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-xs bg-blue-700 mt-2 font-semibold text-white py-1 px-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => addField("nearbyFacilities")}
                  disabled={isUpdating}
                >
                  Add More
                </button>
              </div>

              <div>
                {formData.securityFeatures.map((feature, index) => (
                  <div
                    key={`securityFeature-${index}`}
                    className="flex items-center"
                  >
                    <Input
                      label={`Security Feature ${index + 1}`}
                      name={`securityFeature-${index}`}
                      value={feature}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "securityFeatures",
                          e.target.value
                        )
                      }
                      disabled={isUpdating}
                    />
                    {formData.securityFeatures.length > 1 && (
                      <button
                        type="button"
                        className="ml-2 text-red-600"
                        onClick={() => removeField(index, "securityFeatures")}
                        disabled={isUpdating}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-xs bg-blue-700 mt-2 font-semibold text-white py-1 px-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => addField("securityFeatures")}
                  disabled={isUpdating}
                >
                  Add More
                </button>
              </div>
            </div>

            <Input
              label="Energy Rating"
              name="energyRating"
              value={formData.energyRating}
              onChange={handleChange}
              disabled={isUpdating}
            />

          

            <Input
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <Input
              label="Property Type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <Input
              label="Year Renovated"
              name="yearRenovated"
              type="number"
              value={formData.yearRenovated}
              onChange={handleChange}
              disabled={isUpdating}
            />

          </div>
          <div className="space-y-4 lg:col-span-1 md:col-span-1">
            <Input
              label="Heating Type"
              name="heatingType"
              value={formData.heatingType}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <Input
              label="Cooling Type"
              name="coolingType"
              value={formData.coolingType}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <Input
              label="Flooring Type"
              name="flooringType"
              value={formData.flooringType}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <Input
              label="View Type"
              name="viewType"
              value={formData.viewType}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <Input
              label="Parking Spaces"
              name="parkingSpaces"
              type="number"
              value={formData.parkingSpaces}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="hasGarage"
                checked={formData.hasGarage}
                onChange={handleChange}
                disabled={isUpdating}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-900">Has Garage</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="hasPool"
                checked={formData.hasPool}
                onChange={handleChange}
                disabled={isUpdating}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-900">Has Pool</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="hasGarden"
                checked={formData.hasGarden}
                onChange={handleChange}
                disabled={isUpdating}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-900">Has Garden</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="petFriendly"
                checked={formData.petFriendly}
                onChange={handleChange}
                disabled={isUpdating}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-900">Pet Friendly</label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="text-white w-full bg-blue-700 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

