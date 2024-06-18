import Image from 'next/image'
import React from 'react'
import { FaSquareXTwitter, FaSquareFacebook,FaLinkedin  } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-gradient-blueApple flex justify-center items-center gap-4">
        <div>
        <Image
          alt="logo"
          src="/logo-blueApple.png"
          width={250}
          height={250}
        />
        </div>
        <div className='flex justify-center items-center border-l-1 border-white gap-4 text-5xl pl-4'>
            <FaSquareXTwitter />
            <FaSquareFacebook />
            <FaLinkedin />
        </div>
    </div>
  )
}

export default Footer
