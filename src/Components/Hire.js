import React from 'react'
import vector1 from '../images/vector1.png'
import vector2 from '../images/vector2.png'
import { Zoom } from 'react-reveal'

const Hire = () => {
  return (
    <section className='hire flex items-center justify-center'>
               <div className='high-container flex justify-around w-11/12 lg:w-10/12 lg:flex lg:justify-between lg:pt-20'>
                              <Zoom><img src={vector1} alt='' className='hidden lg:block'/></Zoom>
                              <div className='high-text text-center py-10 pb-7 lg:relative lg:bottom-20 '>
                                             <Zoom><h4 className='text-white font-thin lg:font-thin uppercase mb-3 md:text-1xl text-2xl lg:mt-20 lg:text-4xl lg:mb-6'>Hire us for your project</h4></Zoom>
                                             <Zoom><h2 className='text-white font-thin lg:font-thin text-1xl mb-5 lg:text-2xl lg:mb-10 '>Let's Work Together</h2></Zoom>
                                             <Zoom><div className='flex justify-center lg:justify-center'>
                                                               <a href='/' className='bg-white py-2 px-3 lg:py-4 lg:px-8 text-indigo-500 font-thin lg:font-semibold shadow-lg rounded-lg hover:animate-bounce delay-100'>Hire Us</a>         
                                             </div></Zoom>
                                          
                              </div>
                              <Zoom><img src={vector2} alt='' className='hidden lg:block'/></Zoom>
               </div>
    </section>
  )
}

export default Hire