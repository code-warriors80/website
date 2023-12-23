import React from 'react'
import flyer from '../images/superman_3d.png'
import { Zoom } from 'react-reveal'

const Boost = () => {
  return (
    <section className='boost'>
        <div className='boost-container lg:flex lg:items-center lg:justify-between lg:flex-wrap lg:px-40 lg:py-14 px-5'>
            <div className='boost-text w-full lg:w-5/12'>
                <Zoom><h3 className='text-gray-900 font-extrabold text-3xl text-center lg:text-left lg:text-5xl'>Boost Your Business up to a <span className='spn'>High Level</span></h3></Zoom>
                <Zoom><p className='text-center lg:text-left mt-5 text-sm text-gray-700 lg:text-lg'>
                    Like any great agency, we are only as good as the result we deliver of our recent work.
                    Our developers are commited to maintaining the highest web standards so that your site will withstand the test of time
                </p></Zoom>
            </div>
            <Zoom><img src={flyer} alt=''className='w-full lg:w-4/12 py-5 lg:py-5'/></Zoom>
        </div>
    </section>
  )
}

export default Boost