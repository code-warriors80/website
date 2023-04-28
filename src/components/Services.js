import React, { useEffect, useRef, useState } from 'react'
import img3 from '../img/18.png'
import img1 from '../img/14.png'
import img2 from '../img/16.png'
import img4 from '../img/15.png'
import img5 from '../img/17.png'
import robot from '../img/hero-shape-2.webp'
import { motion } from 'framer-motion'


import './services.css'
import { Zoom } from 'react-reveal'
const Services = () => {
     
    const items = [
        {
            title:'Email Marketing',
            desc:'Optimize your website on google result with PC Marketing',
            img:img1
        },
        {
            title:'App Development',
            desc:'Optimize your website on google result with PPC Marketing',
            img:img2
        },
        {
            title:'Web Development',
            desc:'You can provide the answers that your potential customers are trying to find, so you can become the industery',
            img:img3
        },
        {
            title:'Upgrade',
            desc:'Get more website traffic, more customers & more online visibility with powerful SEO services',
            img:img4
        },
        {
            title:'Social',
            desc:'Get more website traffic, more customers & more online visibility with powerful SEO services',
            img:img5
        }
    ]

    const content = items.map(({title,desc,img},index) => {
       return(
         <Zoom>
            <motion.div className="item rounded-lg m-4 flex flex-col justify-center items-center w-80 bg-gray-100 ">
            
            <h3 className='font-bold flex justify-center items-center'><img src={img} alt="image" />{title}</h3>
            <p className="mt-2 leading-6 text-gray-500">{desc}</p>
        </motion.div>
         </Zoom>
       )
    })
  
    return (
        <section className="services">
            <div className="services__header mb-10 lg:mb-20">
                <Zoom>
                   
                <h2 className='text-4xl font-bold flex justify-center items-center'>  <img src={robot} alt='' />Our Top <span>Service</span></h2>
                <p className="leading-6 text-gray-500 mt-2">Natero intergrate with popular apps. Help you easy to connect and collaborate</p>
                </Zoom>
            </div>
            <div className='services__items' >
                    <motion.div className="carousel services__wrapper w-4/5 mx-auto flex overflow-x-scroll  mb-10 lg:mb-20 gap-6" >
                            {content} 
                    </motion.div>
            </div>
        </section>
    )
}

export default Services