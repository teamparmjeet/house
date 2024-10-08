"use client"
import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import { StarIcon, Check, ArrowDown, Heart, ArrowUp, Calendar, Home, MapPin, Tag, Info, LucideFullscreen } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Card({ ...item }) {
    const { data: session } = useSession();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const useremail = session?.user?.email;

    useEffect(() => {
        if (useremail) {
            axios.get(`/api/admin/find-admin-byemail/${useremail}`)
                .then(response => {
                    setUserData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                    setLoading(false);
                });
        }
    }, [useremail]);

    const handleAddToWishlist = async (productId) => {
        if (!userData?._id) {
            router.push("/page/auth/login");
            return;
        }

        try {
            const response = await axios.post('/api/Wishlist/create', {
                userid: userData._id,
                productid: productId,
                defaultdata: "wishlist"
            });

            if (response.status === 200) {
                toast.success("Property successfully added to your wishlist! 🏡");
            }
        } catch (error) {
            toast("Property Already in your wishlist! 🏡");
        }
    };


    return (
        <div className='rounded-md bg-white mb-4 hover:shadow border p-2 gap-2 grid grid-cols-1 sm:grid-cols-7'>
             <Toaster color="red" />
            <div className='relative overflow-hidden sm:col-span-2'>
                {item.featureImage.length > 0 && (
                    <Image
                        key={item.featureImage[0].id}
                        src={item.featureImage[0]}
                        className="rounded-md object-cover lg:h-56 h-36 w-full"
                        width={200}
                        height={100}
                        alt=""
                    />
                )}

                <div className='absolute top-0 bottom-0 left-0 right-0  rounded-md to-black/60'></div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddToWishlist(item._id);
                    }}
                    className='absolute bottom-0 right-0 m-3 h-6 text-sm px-2 text-white flex items-center gap-x-2 hover:scale-125 duration-300'
                >
                    <Heart color='#ff0000' width={20} />
                </button>
            </div>
            <div className='flex flex-col justify-between sm:col-span-5 bg-gradient-to-b from-white via-indigo-50'>
                <div>
                    <div className='flex flex-wrap gap-x-2 items-center'>
                        <h4 className='text-sm font-semibold'>{item.price} ₹</h4>
                        <p className='text-xs text-2 font-medium'>EMI  starts at ...</p>
                    </div>
                    <div className='text-xs font-medium flex gap-x-2 items-center mt-1'>
                        <span className='font-semibold '>{item.type}</span>
                        <div className='h-4 gap-x-1 bg-2 px-1 flex items-center text-white rounded'>5 <StarIcon width={10} color='white' /></div>
                        <div className='h-4 bg-gray-200 text-2 font-semibold text-[10px] flex items-center gap-x-1 rounded-md px-1'>RERA <Check width={12} color='green' /></div>
                    </div>
                    <p className=' font-semibold text-[11px]'>{item.propertyname}</p>
                    <p className='text-xs text-gray-500 my-1 font-semibold'><span className='text-2'>{item.bedrooms} BHK Flat</span> for sale  {item.address.city}</p>

                    <div className='relative hidden md:block'>
                        <div className={`z-50 rounded-md flex ${isVisible ? 'shadow-lg absolute left-0 right-0 bg-white z-50 border' : 'bg-gray-100'}`}>
                            <div className='grid grid-cols-3 w-full p-1 text-xs text-gray-500'>
                                <div className="col-span-1 px-1 my-1 flex items-center  font-semibold gap-x-2">
                                    <Calendar width={10} color="black" /><span>Possession Date <br /><span className='text-black text-[12px]'><span>{new Date(item.dateListed).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</span>
                                    </span></span>
                                </div>
                                <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2 border-l-2">
                                    <Tag width={10} color="black" /><span>Price<br /><span className='text-black text-[12px]'>{item.price} ₹</span></span>
                                </div>
                                <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2 border-l-2">
                                    <Info width={10} color="black" /><span>Possession Status<br /><span className='text-black text-[12px]'>{item.status}</span></span>
                                </div>
                                {isVisible && (
                                    <>
                                        <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2">
                                            <Home width={10} color="black" /><span>Sizes<br /><span className='text-black text-[12px]'>{item.size}</span></span>
                                        </div>
                                        <div className="col-span-1 px-1 my-1 flex items-center  font-semibold  gap-x-2 border-l-2">
                                            <MapPin width={10} color="black" /><span>Address<br /><span className='text-black text-[12px]'>{item.address.landmark} , {item.address.city}</span></span>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className='bg-gray-200 flex px-2 items-center cursor-pointer' onClick={toggleVisibility}>
                                {isVisible ? <ArrowUp width={12} color='black' /> : <ArrowDown width={12} color='black' />}
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className={`flex-grow text-[12px] z-40 line-clamp-1`}>
                            {item.description}
                        </div>

                    </div>

                </div>
                <div className='flex justify-between items-center mt-2  rounded-md px-1'>
                    <div className='flex'>
                        <Image alt='' src="/logo/Group 349 (2).svg" width={150} height={19.312} />
                    </div>

                </div>
            </div>
        </div>
    );
}
