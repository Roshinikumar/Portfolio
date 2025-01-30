import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-600 pb-4 my-5'>
        <h2 className='text-neutral-200 items-center text-center text-2xl'>Experience       
        </h2>  
        <div>
            {
                EXPERIENCES.map((exp,ind)=>(
                    <div key={ind} className='mb-8 flex flex-wrap lg:justify-center'>
                       <div className='w-full lg:w-1/2'>
                       <p className='my-4 text-sm text-neutral-400'>{exp.year}</p>
                       </div>
                       <div  className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='my-4 font-semibold'>{exp.role} -{" "} 
                                <a href='https://www.solartis.com/' target='_blank'>
                                <span className='text-sm text-purple-500'>{exp.company}</span></a></h6>
 
                            <div className='my-2 font-normal'>
                                <p className='my-2 font-normal'> {exp.description}</p>
                                <p>{
                                    exp.technologies.map((tec,ind)=>(
                                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-600' key={ind}>{tec}</span>
                                    ))
                                    }</p>
                                </div>
                       </div>
                        </div>
                    ))
            }
        </div>
    </div> )
}

export default Experience