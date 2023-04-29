import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Service.css'
import webdev from '../images/18.png'
import appdev from '../images/16.png'
import emaildev from '../images/14.png'
import notificationdev from '../images/15.png'
import socialdev from '../images/17.png'
import {motion} from 'framer-motion'
import robot from '../images/hero-shape-2.webp'
import Zoom from 'react-reveal/Zoom'


const Service = () => {
  const [width, setwidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <section className='service'>
            <Zoom><h2 className='heading text-center mt-16 lg:mt-0 text-3xl lg:text-5xl'><img src={robot} alt='' className='animate-bounce w-10 lg:w-16' />Out Top<span> Services</span></h2></Zoom>
            <Zoom><p className='mt-5 px-5 text-center text-sm mb-10 lg:mb-0 lg:text-sm font-thin lg:pb-10 text-gray-400'>What Makes us unique and why should you consider using our services</p></Zoom>

               <div className='service-container'>
                              <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                              <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='service-parent'>
                                             <Zoom>
                                             <motion.div className='box box-1 shadow-lg' >
                                                            <div className='flex items-center justify-center'><img src={emaildev} alt='' /></div>
                                                            <h3 className='my-3'>Email Marketing</h3>
                                                            <p> Optimize your website on google result with PC Marketing</p>
                                             </motion.div>
                                             </Zoom>

                                             <Zoom>
                                             <motion.div className='box box-2 shadow-lg'>
                                                            <div className='flex items-center justify-center'><img src={appdev} alt='' /></div>
                                                            <h3 className='my-3'>App Development</h3>
                                                            <p>Optimize your website on google result with PPC Marketing</p>
                                             </motion.div>
                                             </Zoom>

                                             <Zoom>
                                             <motion.div className='box box-3 shadow-lg'>
                                                            <div className='flex items-center justify-center'><img src={webdev} alt='' /></div>
                                                            <h3 className='my-3'>Web Development</h3>
                                                            <p>You can provide the answers that your potential customers are trying to find, so you can become the industery</p>
                                             </motion.div>
                                             </Zoom>

                                             <Zoom>
                                                            <motion.div className='box box-4 shadow-lg'>
                                                                           <div className='flex items-center justify-center'><img src={notificationdev} alt='' /></div>
                                                                           <h3 className='my-3'>Upgrade</h3>
                                                                           <p> Get more website traffic, more customers & more online visibility with powerful SEO services</p>
                                                            </motion.div>
                                             </Zoom>

                                                            <Zoom>
                                                                           <motion.div className='box box-5 shadow-lg'>
                                                                           <div className='flex items-center justify-center'><img src={socialdev} alt='' /></div>
                                                                           <h3 className='my-3'>Debuging</h3>
                                                                           <p> Get more website traffic, more customers & more online visibility with powerful SEO services</p>
                                                                           </motion.div>
                                                            </Zoom>
                                             </motion.div>
                              </motion.div>
               </div>
    </section>
  )
}

export default Service