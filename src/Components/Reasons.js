import React from 'react';
import '../css/Reasons.css';
import code from '../images/code3d.png';
import price from '../images/price3d.png';
import message from '../images/message3d.png';
import robot from '../images/hero-shape-2.webp';

const Reason = () => {
  return (
    <div className=" align-middle justify-center pt-28">
        <section className='reason'>
              <h2 className='heading text-center'><img src={robot} alt='' className='animate-bounce' />Top <span>Reason</span></h2>
              <p className='top'>Unify your business data in one simple ecomerce dashboard</p>

          <div className='flex justify-center items-center'>
            <div className=' reason-parent flex items-center justify-around py-10 px-5 lg:w-7/12'>
                <p className='text-xs flex items-center flex-wrap justify-center font-bold'><img src={code} alt='' className='mr-5 mb-3 w-1/4 md:w-2/6'/> User Friendly</p>
                <p className='mid-p text-xs flex items-center flex-wrap justify-center font-bold'><img src={price} alt='' className='mr-5 mb-3 w-1/4 md:w-2/6' /> Affordable Price</p>
                <p className='flex text-xs items-center justify-center flex-wrap font-bold'><img src={message} alt='' className='mr-5 mb-3 w-1/4 md:w-2/6' /> Quick Response</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Reason;
