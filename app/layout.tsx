"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Modal from '@/components/Modal'
import { useState } from 'react'
export const metadata: Metadata = {
  title: 'Car Store',
  description: 'Discover the best deals on Car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showModal,setShowModal]=useState(false);
  return (
    <html lang="en">
     <body className="relative">
        <Navbar></Navbar>
        {children}
        <button onClick={()=>setShowModal(true)}>Open Modal</button>
       
        <Footer></Footer>
      </body>

    </html>
  )
}
