import React from 'react';
import code from '../images/code3d.png';
import price from '../images/price3d.png';
import message from '../images/message3d.png';
import robot from '../images/hero-shape-2.webp';
import { Zoom } from 'react-reveal'

const Reason = () => {
  return (
    <section className=" align-middle justify-center pt-28">
        <section className='reason'>
            <Zoom><h2 className='heading text-center text-3xl lg:text-5xl'><img src={robot} alt='' className='animate-bounce w-10 lg:w-16' />Top <span>Reason</span></h2></Zoom>
            <Zoom>
            <p className='heading-p mt-5 px-5 text-center text-sm lg:text-sm font-thin lg:pb-10 text-gray-400'>Our team comprises of experts in web development, mobile apps,AI, and many more.</p>
            <p className='heading-p px-3 text-center text-sm lg:text-sm font-thin lg:pb-10 text-gray-400'>We are your one-stop-shop for all things tech.</p>
            </Zoom>

          <div className=' flex items-center justify-center'>
              <div className='reason-parent w-11/12 lg:w-7/12 flex items-center justify-between lg:justify-between py-10'>
                  <Zoom><div className='lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center '><img src={code} alt='' className='w-8 lg:w-8/12 md:w-2/6'/></div> <p className='text-sm font-bold mt-2 lg:font-bold lg:mt-0'>User Friendly</p></div></Zoom>
                  <Zoom><div className='lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center'><img src={price} alt='' className='w-8 lg:w-8/12 md:w-2/6' /></div> <p className='text-sm font-bold mt-2 lg:font-bold lg:mt-0'> Affordable Price</p></div></Zoom>
                  <Zoom><div className='lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center'><img src={message} alt='' className='w-8 lg:w-8/12 md:w-2/6' /></div>  <p className='text-sm font-bold lg:font-bold mt-3 lg:mt-0'> Quick Response</p></div></Zoom>
              </div>
          </div>
        </section>
    </section>
  )
}

export default Reason;
