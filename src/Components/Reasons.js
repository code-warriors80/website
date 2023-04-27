import React from 'react';
import '../Styles/Reasons.css';
import code from '../images/code3d.png';
import price from '../images/price3d.png';
import message from '../images/message3d.png';
import robot from '../images/hero-shape-2.webp';

const Reason = () => {
  return (
    <div className="align-middle justify-center pt-28">
        <section className='reason'>
              <h2 className='heading text-center text-3xl md:text-5xl'><img src={robot} alt='' className='animate-bounce w-10' />Top <span>Reason</span></h2>
              <p className='top text-xs md:text-lg my-5'>Unify your business data in one simple ecomerce dashboard</p>

          <div className='flex justify-center items-center'>
            <div className=' reason-parent flex items-center justify-around py-10 px-5 lg:w-7/12'>
              <div className='flex items-center justify-center flex-wrap'><img src={code} alt='' className='mr-5 mb-3 w-1/4 md:w-2/6'/>   <p className='text-xs'>User Friendly</p></div>
              <div className='flex items-center justify-center flex-wrap'><img src={price} alt='' className='mr-5 mb-3 w-1/4 md:w-2/6' /><p className='text-xs'> Affordable Price</p></div>
              <div className='flex items-center justify-center flex-wrap'><img src={message} alt='' className='mr-5 mb-3 w-1/4 md:w-2/6' /> <p className='text-xs'> Quick Response</p></div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Reason;
