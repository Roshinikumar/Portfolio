import React from 'react'
import Deepak from '../assets/Deepak.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-600 pb-4 my-5'>
        <h2 className='text-neutral-200 items-center text-center text-2xl'>About         <span className='text-neutral-600'> Me</span>
        </h2>
       <div className='flex flex-wrap my-3'>

{/* Need to insert img later */}

          {/* <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center' >
                <img className='rounded-2xl' src={Deepak}  width={300} height={100} alt='about'></img>
            </div>
            </div> */}

            <div className='w-full mb-5'>
            <div className='flex justify-center items-center'><p>{ABOUT_TEXT}</p> </div>
              </div>
           
        </div> 
    </div>
  )
}

export default About
