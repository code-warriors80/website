import React from 'react'
import '../Styles/Landing.css'
import headimg from '../images/head_img7.png'
import headimgrocket from '../images/head7_rock.png'
import head_shape from '../images/head_shape_l.png'
import myhead from '../images/head_shape_r.png'
import headline from '../images/line_r.png'
import { motion } from 'framer-motion'


const Landing = () => {
  return (
               <div className='"container landing'>
                              <img src={head_shape} alt='' className='img2 absolute top-56 left-0'/>
                                             <div className='landing-container flex items-center justify-center h-full'>
                                                            <div className='landing-parent flex items-center justify-center flex-wrap-reverse h-full'>
                                                                           <div className='landing-text bg-red-300 max-w-[700px]'>

                                                                                           <div className='tiny flex items-center'>
                                                                                                         <img src={headline} alt='' className='line'/>
                                                                                                         <h5 className='ml-5 font-bold min'>Get Solid Solution</h5>
                                                                                          </div>
                                                                                          <h1 className='text-6xl font-bold'>Choose The <span>#01</span> <span>IT Solutions</span></h1>               
                                                                           </div>

                                                                           <div className='landing-image flex items-center justify-center w-5/12 py-36'>
                                                                                           <motion.img src={headimgrocket} alt='' className='absolute animate-bounce delay-200 duration-500 w-5/5 ml-64 mb-64'/>
                                                                                          <img src={headimg} alt='' className='man w-9/12' /> 
                                                                           </div>
                                                            </div>
                                             </div>
                              <img src={myhead} alt='' className='img1 absolute top-20 right-0'/>
               </div>
  )
}

export default Landing

//     <div className='"container landing'>
//                <img src={head_shape} alt='' className='img2 absolute top-56 left-0'/>
//                <div className='landing-container'>
//                               <div className='landing-parent '>
                                             
//                                              <motion.div className='landing-text'
//                                                            initial={{x: '-100vw'}}
//                                                            animate={{x: 0}}
//                                                            transition={{delay: 1.5, type: 'spring', stiffness: 100}}>

//                                                             <div className='tiny flex items-center'>
//                                                                            <img src={headline} alt='' className='line'/>
//                                                                            <h5 className='ml-5 font-bold min'>Get Solid Solution</h5>
//                                                             </div>
//                                                             <h1 className='text-6xl font-bold z-10 leading-1'>Choose The <span>#01</span> <span>IT Solutions</span></h1>

//                                              </motion.div>

//                                              <motion.div className='landing-image'
//                                                             initial={{opacity: 0}}
//                                                             animate={{opacity: 1}}
//                                                             transition={{delay: 1.5, duration: 3}}
//                                              >
//                                                             <div className='landing-image-child'>

//                                                             <motion.img src={headimgrocket} alt='' className='absolute animate-bounce delay-200 duration-500'/>
//                                                             <img src={headimg} alt='' className='man' />
//                                                             </div>

//                                              </motion.div>

//                               </div>                              
//                </div>
//                <img src={myhead} alt='' className='img1 absolute top-20 right-0'/>
//     </div>