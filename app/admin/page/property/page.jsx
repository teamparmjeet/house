"use client";
import React, { useState, useEffect } from 'react';
import AllProjectCard from "@/components/card/admin-allprojectpage/Card";
import Link from 'next/link';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';

export default function Property() {
  const [rawItems, setRawItems] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('Relevance');
  const [selectedTitle, setSelectedTitle] = useState('All Category');
  const [titles, setTitles] = useState(['All Category']);
  const [loading, setLoading] = useState(true); // Add loading state
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetch
      try {
        const response = await axios.get('/api/project/fetchall/project');
        const fetchedItems = response.data.fetch;
        setRawItems(fetchedItems);

        const uniqueTitles = ['All Category', ...new Set(fetchedItems.map(item => item.title))];
        setTitles(uniqueTitles);

        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedItems = [...rawItems];

    if (sortOrder === 'Price (Inc)') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'Price (Dec)') {
      sortedItems.sort((a, b) => b.price - a.price);
    }

    if (selectedTitle !== 'All Category') {
      sortedItems = sortedItems.filter(item => item.title === selectedTitle);
    }

    setItems(sortedItems);
    setCurrentPage(1);
  }, [sortOrder, selectedTitle, rawItems]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className='bg-[#f4f4f4]'>
      <div className="container mx-auto px-2 my-2">
        <div className="gap-4">
          <div className="p-0">
            <div className='bg-gray-100 rounded-t-md pb-2 px-4'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='mb-0 md:mb-2'>
                  <p className='text-gray-600 text-2 text-xs md:text-sm'>
                    Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, items.length)} of {items.length}
                  </p>
                </div>
                <div className='flex justify-between md:justify-end w-full md:w-fit flex-row md:items-center gap-y-2 md:gap-x-4'>
                  <div className='text-xs flex items-center gap-x-2'>
                    <p className='hidden md:block'>Sort by:</p>
                    <select 
                      value={sortOrder}
                      onChange={handleSortChange}
                      className='px-2 py-1 text-xs md:text-sm shadow rounded focus:border-none focus:outline-none'
                    >
                      <option value="Relevance">Relevance</option>
                      <option value="Price (Inc)">Price (Inc)</option>
                      <option value="Price (Dec)">Price (Dec)</option>
                    </select>
                  </div>
                  <div className='text-xs flex items-center gap-x-2'>
                    <p className='hidden md:block'>Filter by Category:</p>
                    <select 
                      value={selectedTitle}
                      onChange={handleTitleChange}
                      className='px-2 py-1 text-xs md:text-sm shadow rounded focus:border-none focus:outline-none'
                    >
                      {titles.map(title => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
                  <div className='flex gap-1 md:gap-2 mt-2 md:mt-0'>
                    <button 
                      className='bg-[#0078db]/50 hover:bg-[#0078db] text-white rounded-md px-2 py-1 text-xs md:text-sm capitalize' 
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                    <button 
                      className='bg-[#0078db] text-white rounded-md px-2 py-1 text-xs md:text-sm capitalize'
                    >
                      {currentPage}
                    </button>
                    <button 
                      className='bg-[#0078db]/50 hover:bg-[#0078db] text-white rounded-md px-2 py-1 text-xs md:text-sm capitalize'
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='overflow-auto bg-white h-[100vh] pb-56 p-2'>
              {loading ? (
              <Loading/>
              ) : (
                currentItems.map((item) => (
                  <AllProjectCard key={item._id} item={item} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
