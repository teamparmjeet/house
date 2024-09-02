import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Search } from "lucide-react";
import Input from '@/app/admin/components/Input/Input';
import { useRouter } from 'next/navigation';
import axios from 'axios';
export default function Tabbanner({ location, setLocation, motive, setMotive, type, setType }) {
    const [city, setCity] = useState([]);
    const [services, setServices] = useState([]);

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

    useEffect(() => {
        const fetchService = async () => {

            try {
                const response = await axios.get('/api/AddService/getdata/addservice');
                setServices(response.data.fetch);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {

            }
        };

        fetchService();
    }, []);

   
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold mb-5 text-center">Discover Properties</h2>
            <Tabs>
                <TabList className="flex flex-wrap  mb-4">
                    <Tab className="flex-1 py-3 px-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none bg-gray-200 rounded-md mx-1" selectedClassName="text-white bg-2">
                        Buy
                    </Tab>
                    <Tab className="flex-1 py-3 px-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none bg-gray-200 rounded-md mx-1" selectedClassName="text-white bg-2">
                        Rent
                    </Tab>
                    <Tab className="flex-1 py-3 px-4 text-center cursor-pointer transition-colors duration-300 focus:outline-none bg-gray-200 rounded-md mx-1" selectedClassName="text-white bg-2">
                        Service
                    </Tab>
                </TabList>

                <TabPanel>
                    <form onSubmit={(e) => handleSearch(e, 'buy')}>


                        <div className="flex md:flex-col gap-4">

                            <label htmlFor="rentLocation" className='block -mb-[14px] text-[12px] font-medium text-gray-700'> City</label>
                            <select
                                name="buyLocation"
                                value={formData.buyLocation}
                                onChange={handleInputChange}
                                className=" block w-full px-3 py-3 border border-gray-300 rounded-md   focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"

                            >
                                <option value="">Select Ciity</option>
                                {city.map((item) => (
                                    <option key={item.id} selected value={item}>{item}</option>
                                ))}

                            </select>


                            <label htmlFor="buyType" className='block -mb-[14px] text-[12px] font-medium text-gray-700'> Property Type</label>
                            <select
                                name="buyType"
                                value={formData.buyType}
                                onChange={handleInputChange}
                                className="   w-full px-3 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                required
                            >

                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="w-full flex font-medium justify-center items-center gap-x-2 py-3 px-4 bg-2 text-white rounded-lg hover:bg-[#ffaa3e] transition-colors duration-300 focus:outline-none">
                                Search
                            </button>
                        </div>
                    </form>
                </TabPanel>

                <TabPanel>
                    <form onSubmit={(e) => handleSearch(e, 'rent')}>
                        <div className="flex md:flex-col gap-4">

                            <label htmlFor="rentLocation" className='block -mb-[14px] text-[12px] font-medium text-gray-700'> City</label>
                            <select name="rentLocation"
                                value={formData.rentLocation}
                                onChange={handleInputChange}
                                className=" block w-full px-3 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"

                            >
                                <option value="">Select Ciity</option>
                                {city.map((item) => (
                                    <option  key={item.id} selected value={item}>{item}</option>
                                ))}
                            </select>


                            <label htmlFor="rentType" className='block -mb-[14px] text-[12px] font-medium text-gray-700'> Property Type</label>
                            <select
                                name="rentType"
                                value={formData.rentType}
                                onChange={handleInputChange}
                                className="   w-full px-3 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"

                            >

                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="w-full font-medium flex justify-center items-center gap-x-2 py-3 px-4 bg-2 text-white rounded-lg hover:bg-[#ffaa3e] transition-colors duration-300 focus:outline-none">
                                Search
                            </button>
                        </div>
                    </form>
                </TabPanel>

                <TabPanel>
                    <form onSubmit={handleServiceSearch}>
                        <div className="flex xl:flex-col gap-4">
                            <label htmlFor="ger" className='block -mb-[14px] text-[12px] font-medium text-gray-700'> City</label>

                            <select
                                id="ger"
                                name="serviceLocation"
                                value={formData.serviceLocation}
                                onChange={handleInputChange}
                                className=" block w-full px-3 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"

                            >
                                <option value="">Select Ciity</option>
                                {city.map((item) => (
                                    <option  key={item.id} selected value={item}>{item}</option>
                                ))}
                            </select>

                            <label htmlFor="serviceType" className="block -mb-[14px] text-[12px] font-medium text-gray-700"> Service Type</label>
                            <select
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">Select Service</option>
                                {services.map((item) => (

                                    <option key={item.id} value={item.title}>{item.title}</option>
                                ))}

                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center font-medium items-center gap-x-2 py-3 px-4 bg-2 bg-gray-200 text-white rounded-lg hover:bg-[#ffaa3e] transition-colors duration-300 focus:outline-none"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </TabPanel>
            </Tabs>
        </div>
    );
}
