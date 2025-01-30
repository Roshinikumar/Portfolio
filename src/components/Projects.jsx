import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
<div className='border-b border-neutral-600 pb-4 my-5'>
        <h2 className='text-neutral-200 items-center text-center text-2xl'>Projects       
        </h2>  
        <div>
            {
              PROJECTS.length>0 ? PROJECTS.map((exp,ind)=>(
                <div key={ind} className='my-8 flex flex-wrap lg:justify-center'>
                  <div className='w-full lg:w-1/4'> <img className='mb-4 rounded' src={exp.image} alt={exp.title} width={150}height={150}></img>
                  </div>
                  <div className='w-full max-w-full lg:w-3/4'>
                    <h6 className='mb-2 font-semibold ' >{exp.title}</h6>
                    <p className='mb-4 font-light text-neutral-400'>{exp.description}</p>
                    {
                      exp.technologies.map((tec,ind)=>(
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-600' key={ind}>{tec}</span>
                      ))
                    }

                  </div>
                </div>
                    )) :
                    (
                        <div className='text-2xl justify-center items-center my-5'>
                            <p className='text-center'>Arriving Soon...</p>
                            </div>
                    )
            }
        </div>      
    </div>
  )
}

export default Projects
