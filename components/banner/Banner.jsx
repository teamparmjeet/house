"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Define an object with cities as keys and arrays of suggestions as values
const citySuggestions = {
  Jaipur: ['Amber', 'City Palace', 'Hawa Mahal'],
  Mumbai: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'],
  Delhi: ['Red Fort', 'Qutub Minar', 'India Gate'],
  Bangalore: ['Lalbagh Botanical Garden', 'Bangalore Palace', 'Cubbon Park'],
  Chennai: ['Marina Beach', 'Fort St. George', 'Kapaleeshwarar Temple'],
  Kolkata: ['Victoria Memorial', 'Howrah Bridge', 'Indian Museum'],
  Pune: ['Shaniwar Wada', 'Aga Khan Palace', 'Osho Ashram'],
  Hyderabad: ['Charminar', 'Hussain Sagar Lake', 'Golconda Fort'],
};

export default function Banner({ title, location, setLocation }) {
  const [inputLocation, setInputLocation] = useState(location);
  const [inputSearchTerm, setInputSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    setLocation(inputLocation);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setInputLocation(value);

    if (value.length > 0) {
      const suggestionsForCity = Object.keys(citySuggestions).find((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );

      if (suggestionsForCity) {
        const filteredSuggestions = citySuggestions[suggestionsForCity];
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputLocation(suggestion);
    setSuggestions([]);
  };

  return (
    <div className='relative h-full container mx-auto  bg-banner overflow-hidden '>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#222]/50 rounded-md"></div>
      <div className='relative overflow-hidden h-full'>
        <div className='absolute bottom-0 left-0 right-0'>
          <div className='mx-auto lg:w-3/5 mb-10 md:mb-24'>
            <h1 className="text-white md:text-5xl text-3xl mb-5 text-center md:text-left font-extrabold">
              {title} in <span className="">{location}</span>
            </h1>

            <div className="rounded-xl  bg-[#222]/50 p-4 backdrop-blur-md">
              <ul className='flex md:gap-x-7 gap-x-4 text-white'>
                <li className='uppercase text-xs md:underline underline-offset-4 bg-white md:bg-transparent rounded-md text-black md:text-white font-medium p-2 md:p-0'>Buy</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Rent</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Commercial</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Plots</li>
                <li className='uppercase text-xs font-medium p-2 md:p-0'>Pg</li>
              </ul>

              <div className="rounded-full mt-3 overflow-hidden bg-white grid grid-cols-6">
                <div className="col-span-1 relative">
                  <input
                    type="text"
                    value={inputLocation}
                    onChange={handleLocationChange}
                    placeholder='Jaipur'
                    className='py-2 text-center w-full h-full focus-within:outline-none'
                  />
                  {suggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-md overflow-hidden z-50">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-span-4">
                  <input
                    type="text"
                    value={inputSearchTerm}
                    onChange={(e) => setInputSearchTerm(e.target.value)}
                    placeholder='Search here'
                    className='px-2 lg:py-4 py-2 w-full h-full focus-within:outline-none'
                  />
                </div>
                <div className="col-span-1 flex items-center p-1 md:px-2 justify-center">
                  <button
                    className="p-2 bg-green-500 w-full mx-auto rounded-full text-white transition duration-300 hover:bg-green-600"
                    onClick={handleSearch}
                  >
                    <span className="md:hidden flex justify-center">
                      <Search color="white" width={20} />
                    </span>
                    <span className="hidden md:block">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 mb-2 left-0 right-0 text-center'>
          <p className='bg-black/50 backdrop-blur-md inline text-white font-medium text-sm px-5 py-2 rounded-[30px]'>
            Are you an Owner?
            <span className='underline cursor-pointer ml-1 text-green-400'>Post property for free</span>
          </p>
        </div>
      </div>
    </div>
  );
}
