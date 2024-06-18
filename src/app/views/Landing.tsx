'use client'
import { Button } from '@nextui-org/react'
import React from 'react'

const Landing = () => {
  const handleClick = () => {
    window.open('https://calendly.com/fran-brandalise', '_blank');
  };
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-10 bg-gradient-blueApple' id="landing">
      <h1 className='text-6xl'>3X YOUR REVENUE</h1>
      <h3 className='text-lg'>It&apos;s time to make your ad-budget count, scale your business and glow up your sales.</h3>
      <Button className='font-bold bg-blue-blueApple' onClick={handleClick}>BOOK A FREE DEMO</Button>
    </div>
  )
}

export default Landing
