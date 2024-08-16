"use client"
import React from 'react'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react'

export default function Page() {
  const { data: session } = useSession();
  return (
    <div className=" h-96  flex flex-col">
      i am admin page
      <button  onClick={() => signOut()} className=' bg-red-700 text-white px-4 py-1 rounded-md'>Logout</button>
    </div>
  )
}
