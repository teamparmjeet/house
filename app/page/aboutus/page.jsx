import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className=' bg-2 h-16'></div>
      <div className=" h-96 flex justify-center items-center">
        <h1 className=' text-5xl font-semibold'>About us Page</h1>
      </div>
      <Footer />
    </>
  );
}
