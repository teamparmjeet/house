import React from 'react'
import { useSession } from 'next-auth/react';
export default function Dashboard() {
    const { data: session } = useSession();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}</h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <p>This is your admin dashboard where you can manage various aspects of the application.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-4 bg-blue-50 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">Total Users</h3>
                        <p className="mt-2 text-blue-900">1,234</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">Pending Reports</h3>
                        <p className="mt-2 text-blue-900">23</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">System Status</h3>
                        <p className="mt-2 text-blue-900">All systems operational</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
