import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import robot from '../images/hero-shape-2.webp'
import Zoom from 'react-reveal/Zoom'
import { services } from '../Routes/ServiceList'


const Service = () => {
  const [width, setwidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <section className='service'>
            <Zoom><h2 className='heading text-center mt-16 lg:mt-0 text-3xl lg:text-5xl'><img src={robot} alt='' className='animate-bounce w-10 lg:w-16' />Out Top<span> Services</span></h2></Zoom>
            <Zoom><p className='heading-p mt-5 px-5 text-center text-sm mb-10 lg:mb-0 lg:text-sm font-thin lg:pb-10 text-gray-400'>What Makes us unique and why you should consider using our services</p></Zoom>

               <div className='service-container'>
                              <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                              <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='service-parent'>
                                                                {services.map((serv, i) => {
                                                                  return (
                                                                    <Zoom key={i}>
                                                                                <motion.div className='box box-1 shadow-lg' >
                                                                                   <div className='flex items-center justify-center'><img src={services[i].img} alt='' /></div>
                                                                                   <h3 className='my-3'>{services[i].title}</h3>
                                                                                   <p> {services[i].description}</p>
                                                                              </motion.div>
                                                                      </Zoom>
                                                                  )
                                                                })}
                                             </motion.div>
                              </motion.div>
               </div>
    </section>
  )
}

export default Service