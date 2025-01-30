import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-5 flex item-center justify-between py-3'>
      <div className='flex flex-shrink-0 items-center'>
         <h2 className='font-bold text-white mx-3 text-2xl'>RK</h2>

      </div>
      <div className='flex gap-6 justify-center items-center m-4 text-2xl'>
          <a href='https://www.linkedin.com/in/deepakkumar-vaitheeswaran-2672451aa/' target='_blank'><FaLinkedin/></a>  
          <a href='https://github.com/Deepakkumar08'target='_blank' >        <FaGithub/></a>    
        {/* <FaInstagram></FaInstagram> */}
      </div>
    </nav>
  )
}

export default Navbar