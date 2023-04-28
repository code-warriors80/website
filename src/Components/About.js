import React from 'react'
import robot from '../images/hero-shape-2.webp';
import team from '../images/head.png'
import { Zoom } from 'react-reveal'

const About = () => {
  return (
    <section>
            <Zoom><h2 className='heading text-center mt-16 lg:mt-0 text-3xl lg:text-5xl'><img src={robot} alt='' className='animate-bounce w-10 lg:w-16' />About <span>Our Team</span></h2></Zoom>
            <Zoom><p className='mt-5 px-5 text-center text-sm mb-10 lg:mb-0 lg:text-sm font-thin lg:pb-10 text-gray-400'>What Makes us unique and why should you consider using our services</p></Zoom>

              <div>
                <div className='lg:flex lg:items-center lg:justify-between lg:flex-wrap lg:px-40 lg:py-14 px-5'>
                    <Zoom><img src={team} alt='' className='w-full lg:w-4/12 py-5 lg:py-5' /></Zoom>
                    <Zoom><div className='boost-text w-full lg:w-6/12'>
                        <h3 className='text-gray-900 font-extrabold text-4xl lg:text-5xl'>Offering The Best IT Services To  <span>Clients</span></h3>
                        <p className='mt-5 text-gray-400 lg:text-lg'>
                            Like any great agency, we are only as good as the result we deliver of our recent work.
                            Our developers are commited to maintaining the highest web standards so that your site will withstand the test of time
                        </p>
                        <div className='mt-4 flex lg:justify-start lg:justify-start pb-10 lg:py-5'>
                            <a href='/' className='tracking-wider font-semibold text-sm uppercase inline-block rounded-lg px-5 py-3 bg-indigo-500 text-white shadow-lg hover:animate-bounce delay-100'> Learn More</a>
                        </div>
                    </div></Zoom>
                </div>
              </div>
    </section>
  )
}

export default About