import React from 'react'
import { HERO_CONTENT } from '../constants'
import Roshini from '../assets/Roshini.jpeg'
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-1'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-6xl tracking-tight font-medium lg:mt-16 lg:text-4xl'>Roshini Kumar</h1>
                    <span className='text-2xl tracking-tight text-purple-600'>MERN Stack Developer</span>
                    <p className='my-4 max-w-xl py-6 font-light tracking-tighter'> {HERO_CONTENT}</p>
                </div>
                    
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={Roshini} alt ='Roshini' width={300} height={100}></img>
                </div>
            </div>
            </div> 
      
    </div>
  )
}

export default Hero
