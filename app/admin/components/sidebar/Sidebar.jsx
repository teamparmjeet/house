import React from 'react';
import Link from 'next/link';
export default function Sidebar() {
  return (
    <>
      <ul className="space-y-4">
        <li><Link href="" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Dashboard</Link></li>
        <li><Link href="" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Manage Properties</Link></li>
        <li><Link href="" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Inquiries</Link></li>
        <li><Link href="" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Transactions</Link></li>
        <li><Link href="" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Reports</Link></li>
        <li><Link href="" className="block p-2 hover:text-[#aa8453] duration-150 font-semibold rounded">Settings</Link></li>
      </ul>
    </>
  );
}
