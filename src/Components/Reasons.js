import React from 'react';
import '../Styles/Reasons.css';
import code from '../images/code3d.png';
import price from '../images/price3d.png';
import message from '../images/message3d.png';
import robot from '../images/hero-shape-2.webp';

import Zoom from 'react-reveal/Zoom'

const Reason = () => {
  return (
    <div className="align-middle justify-center pt-28">
        <section className='reason'>
          <Zoom><h2 className='heading text-center text-3xl md:text-5xl'><img src={robot} alt='' className='animate-bounce w-10 lg:w-14' />Top <span>Reason</span></h2>
          <p className='top text-xs md:text-lg my-5'>Unify your business data in one simple ecomerce dashboard</p></Zoom>

          <div className='flex justify-center w-full items-center mt-10'>
            <div className=' reason-parent flex items-center justify-between w-11/12  lg:flex lg:items-center lg:justify-around py-10 px-5 lg:w-8/12 '>
              <Zoom><div className='text-center lg:text-center lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center lg:flex lg:items-center lg:justify-center'><img src={code} alt='' className='w-2/5 md:w-4/6 xl:mb-0 mb-5'/></div>  <p className='text-xs lg:text-sm'>User Friendly</p></div></Zoom>
              <Zoom><div className='text-center lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center lg:flex lg:items-center lg:justify-center'><img src={price} alt='' className='w-2/5 md:w-4/6 xl:mb-0  mb-5' /></div><p className='text-xs lg:text-sm'> Affordable Price</p></div></Zoom>
              <Zoom><div className='text-center lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center lg:flex lg:items-center lg:justify-center'><img src={message} alt='' className='w-2/5 md:w-4/6 xl:mb-0 mb-5'/></div> <p className='text-xs lg:text-sm'> Quick Response</p></div></Zoom>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Reason;
