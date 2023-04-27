import React from 'react'
import '../Styles/Landing.css'
import headimg from '../images/head_img7.png'
import headimgrocket from '../images/head7_rock.png'
import head_shape from '../images/head_shape_l.png'
import myhead from '../images/head_shape_r.png'

const Landing = () => {
  return (
    <div className='landing-page lg:pt-44 lg:pb-20 pt-10'>
                  <img src={head_shape} alt='' className='img2 absolute top-64'/>
                  <div className='landing-container py-0  px-8 lg:flex lg:items-center lg:justify-center lg:h-11/12'>

                          <div className='landing-image pt-20 px-5 w-full flex items-start justify-center lg:hidden'>
                                      <img src={headimgrocket} alt='' className='rocket absolute animate-bounce right-10 w-3/12'/>
                                      <img src={headimg} alt='' className='man z-5 md:w-8/12 sm:w-7/12 lg:w-7/12'/>
                            </div>

                            <div className='landing-text lg:w-4/12'>

                                    <div className='lilhead text-center lg:text-left'>
                                          <h5 className='text-sm font-bold text-indigo-500 mt-5 font-semibold'>Get Solid Solution</h5>
                                    </div>

                                    <h1 className='text-3xl text-center lg:text-left xl:text-7xl font-bold mt-6 text-5xl md:text-6xl text-gray-900'>Choose The <span className='text-gray-300'>#01</span> <span className='it'>IT Solutions</span></h1>
                                    <div className='mt-4 flex justify-center lg:justify-start'>
                                        <a href='/' className='tracking-wider font-semibold text-sm uppercase inline-block rounded-lg px-5 py-3 bg-indigo-500 text-white shadow-lg'> Learn More</a>
                                    </div>
                            </div>

                            <div className='landing-image pt-10 px-5 flex items-center  lg:justify-center hidden lg:block lg:w-4/12  lg:ml-36'>
                                    <img src={headimgrocket} alt='' className='rocket absolute animate-bounce lg:right-56'/>
                                    <img src={headimg} alt='' className='man z-5 md:w-8/12 sm:w-7/12 lg:w-11/12'/>
                            </div>

                        </div>
                  <img src={myhead} alt='' className='img1 absolute right-0 top-36'/>
    </div>
  )
}

export default Landing


// screen sizes
// 'sm': '640px'
// 'md': '768px'
// lg: 1024px
// xl: 1280
// 2xl: 1536
//sm:bg-yellow-400 md:bg-green-700 lg:bg-red-500 xl:bg-orange-200 2xl:bg-blue-300