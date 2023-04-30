import React from 'react'
import Zoom from 'react-reveal/Zoom'
import {motion} from 'framer-motion'

const Card = ({id ,img, title, description}) => {
  return (
               <Zoom key={id}>
                              <motion.div className='box box-1 shadow-lg' >
                                             <div className='flex items-center justify-center'><img src={img} alt='' /></div>
                                             <h3 className='my-3'>{title}</h3>
                                             <p> {description}</p>
                              </motion.div>
               </Zoom>
  )
}

export default Card