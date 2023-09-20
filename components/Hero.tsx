"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Modal from './Modal';


const Hero = () => {
    const handlerScroll = () => {

    }
    const [showModal,setShowModal]=useState(false)
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className='text-3xl font-bold leading-8'>Find, book or rent a car - quickly and easily !</h1>
                <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton title="Custom Cars" containerStyles="bg-primary-blue hover:bg-blue-800 text-white px-4 py-2 rounded-full mt-10"
                    handleClick={handlerScroll} />
                <button onClick={()=>setShowModal(true)}>Click to Open</button>
                 <Modal isVisible={showModal} onClose={()=>{setShowModal(false)}}></Modal>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </div>
    )

}
export default Hero;