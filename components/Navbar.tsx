"use client"
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { link } from "fs";
const Navbar=()=>{
    const linkHandler=()=>{

    }
    return (
            <header className="absolute w-full z-10">
                <nav className="w-max-[1440px] justify-between mx-auto flex sm:px-16 px-6 py-4 items-center">
                    <Link href="/" className="flex justify-center items-center">
                        <Image src="/carlogo.png" alt="CarMart" width={118} height={18} className="object-contain"/>
                    </Link>
                    <CustomButton title="Buy/Sell Car" handleClick={linkHandler} containerStyles="text-bold text-white text-lg"></CustomButton>
                </nav>  
            </header>
    )
}
export default Navbar;