import React from 'react'
import flyer from '../images/superman_3d.png'
import "../css/Boost.css"

const Boost = () => {
  return (
    <section className='boost'>
        <div className='boost-container lg:flex lg:items-center lg:justify-between lg:flex-wrap lg:px-30 px-20'>
            <div className='boost-text w-full lg:w-5/12'>
                <h3 className='text-gray-900 font-extrabold text-4xl lg:text-5xl'>Boost Your Business up to a <span className='spn'>High Level</span></h3>
                <p className='mt-5 text-gray-500'>
                    Like any great agency, we are only as good as the result we deliver of our recent work.
                    Our developers are commited to maintaining the highest web standards so that your site will withstand the test of time
                </p>
            </div>
            <img src={flyer} alt=''className='w-full lg:w-5/12'/>
        </div>
    </section>
  )
}

export default Boost