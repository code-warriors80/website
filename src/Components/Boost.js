import React from 'react'
import flyer from '../images/superman_3d.png'
import "../Styles/Boost.css"

import Zoom from 'react-reveal/Zoom'

const Boost = () => {
  return (
    <section className='boost'>
        <div className='boost-container 2xl:px-36 lg:flex lg:items-center lg:justify-around lg:flex-wrap px-50  text-center lg:text-left'>
          <Zoom>
                <div className='boost-text w-full lg:w-6/12  px-10'>
                    <h3 className='text-gray-900 font-extrabold text-4xl lg:text-5xl'>Boost Your Business up to a <span className='spn'>High Level</span></h3>
                    <p className='mt-5 text-gray-500 xl:text-lg'>
                        Like any great agency, we are only as good as the result we deliver of our recent work.
                        Our developers are commited to maintaining the highest web standards so that your site will withstand the test of time
                    </p>
                </div>
            </Zoom>
            <Zoom>
                <img src={flyer} alt=''className='w-full 2xl:w-5/12 lg:w-4/12 px-10 xl:px-50 my-14'/>
            </Zoom>
        </div>
    </section>
  )
}

export default Boost