import React from 'react';
import { useSession } from 'next-auth/react';
import { Home, Inbox } from 'lucide-react';

export default function Dashboard() {
    const { data: session } = useSession();

    return (
        <div className="">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Welcome, {session?.user?.name}
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg">


                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                    <div className="flex items-center p-6 bg-[#f8f5f0] rounded-xl shadow-md border-l-4 border-[#aa8453]">
                        <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                            <Home className="text-green-500 w-8 h-8" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Total Properties</h3>
                            <p className="mt-2 text-2xl font-bold text-gray-900">567</p>
                        </div>
                    </div>

                    <div className="flex items-center p-6 bg-[#f8f5f0] rounded-xl shadow-md border-l-4 border-[#aa8453]">
                        <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
                            <Inbox className="text-blue-500 w-8 h-8" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Recent Inquiries</h3>
                            <p className="mt-2 text-2xl font-bold text-gray-900">34</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
