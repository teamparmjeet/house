import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Search } from "lucide-react";
import Input from '@/app/admin/components/Input/Input';
import { useRouter } from 'next/navigation';

export default function Tabbanner({ location, setLocation, motive, setMotive, type, setType }) {
    const [formData, setFormData] = useState({
        buyLocation: '',
        buyType: '',
        rentLocation: '',
        rentType: '',
        serviceLocation: '',
        serviceType: '',
    });

    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSearch = (e, searchType) => {
        e.preventDefault();
        const location = formData[`${searchType}Location`];
        const type = formData[`${searchType}Type`];

        // Only proceed if both location and type have values
        if (location) {
            setLocation(location);
            setType(type);
            setMotive(searchType);
        }
    };


    const handleServiceSearch = (e) => {
        e.preventDefault();
        const { serviceLocation, serviceType } = formData;


        if (serviceLocation && serviceType) {
            router.push(`/page/service/${serviceType},${serviceLocation}`);
        } else if (serviceLocation) {
            router.push(`/page/service/${serviceLocation}`);
        } else {
            router.push(`/page/service/${serviceType}`);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold mb-5 text-center">Discover Properties</h2>
            <Tabs>
                <TabList className="flex flex-wrap border-b border-gray-200 mb-4">
                    <Tab className="flex-1 py-2 px-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none bg-gray-200 rounded-md mx-1" selectedClassName="text-white bg-2">
                        Buy
                    </Tab>
                    <Tab className="flex-1 py-2 px-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none bg-gray-200 rounded-md mx-1" selectedClassName="text-white bg-2">
                        Rent
                    </Tab>
                    <Tab className="flex-1 py-2 px-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none bg-gray-200 rounded-md mx-1" selectedClassName="text-white bg-2">
                        Service
                    </Tab>
                </TabList>

                <TabPanel>
                    <form onSubmit={(e) => handleSearch(e, 'buy')}>


                        <div className="flex md:flex-col gap-4">

                            <label htmlFor="rentLocation" className='block -mb-[14px] text-sm font-medium text-gray-700'> City</label>
                            <select
                                name="buyLocation"
                                value={formData.buyLocation}
                                onChange={handleInputChange}
                                className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"

                            >
                                <option value="">Select Ciity</option>
                                <option selected value="Jaipur">Jaipur</option>
                                <option value="Kota">Kota</option>
                            </select>


                            <label htmlFor="buyType" className='block -mb-[14px] text-sm font-medium text-gray-700'> Property Type</label>
                            <select
                                name="buyType"
                                value={formData.buyType}
                                onChange={handleInputChange}
                                className="   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                required
                            >

                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="w-full flex justify-center items-center gap-x-2 py-2 px-4 bg-2 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                                Search <Search size={20} />
                            </button>
                        </div>
                    </form>
                </TabPanel>

                <TabPanel>
                    <form onSubmit={(e) => handleSearch(e, 'rent')}>
                        <div className="flex md:flex-col gap-4">

                            <label htmlFor="rentLocation" className='block -mb-[14px] text-sm font-medium text-gray-700'> City</label>
                            <select name="rentLocation"
                                value={formData.rentLocation}
                                onChange={handleInputChange}
                                className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"

                            >
                                <option value="">Select Ciity</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Kota">Kota</option>
                            </select>


                            <label htmlFor="rentType" className='block -mb-[14px] text-sm font-medium text-gray-700'> Property Type</label>
                            <select
                                name="rentType"
                                value={formData.rentType}
                                onChange={handleInputChange}
                                className="   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"

                            >

                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="w-full flex justify-center items-center gap-x-2 py-2 px-4 bg-2 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                                Search <Search size={20} />
                            </button>
                        </div>
                    </form>
                </TabPanel>

                <TabPanel>
                    <form onSubmit={handleServiceSearch}>
                        <div className="flex xl:flex-col gap-4">
                            <Input
                                label="City"
                                name="serviceLocation"
                                value={formData.serviceLocation}
                                onChange={handleInputChange}
                                placeholder="Enter location"

                            />
                            <label htmlFor="serviceType" className="block -mb-[14px] text-sm font-medium text-gray-700"> Service Type</label>
                            <select
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">Select Service</option>
                                <option value="Plumbing">Plumbing Services</option>
                                <option value="Electrical">Electrical Services</option>
                                <option value="Carpentry">Carpentry Services</option>
                                <option value="Painting">Painting Services</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-x-2 py-2 px-4 bg-2 bg-gray-200 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
                            >
                                Search <Search size={20} />
                            </button>
                        </div>
                    </form>
                </TabPanel>
            </Tabs>
        </div>
    );
}
