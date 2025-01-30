import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const Tech = () => {
  return (
    <div className='border-b border-neutral-600 pb-4 my-5'>
        <h2 className='text-neutral-200 items-center text-center text-2xl'>Technologies        
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4 mt-5'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-400'></RiReactjsLine>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-5xl text-green-600'></RiNodejsLine>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-5xl text-green-800'></SiMongodb>
            </div>
            
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-5xl text-blue-700'></SiMysql>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-5xl text-cyan-400'></SiExpress>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <PiFigmaLogoDuotone className='text-5xl text-cyan-400'></PiFigmaLogoDuotone>
            </div>
        </div>
        </div>
  )
}

export default Tech
