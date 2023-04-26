import React from 'react';
import '../css/Reasons.css';
import code from '../images/code3d.png';
import price from '../images/price3d.png';
import message from '../images/message3d.png';
import robot from '../images/hero-shape-2.webp';

const Reason = () => {
  return (
    <div className=" align-middle justify-center">
        <section className='reason'>
            <h2 className='heading text-center'><img src={robot} alt='' />Top <span>Reason</span></h2>
            <p className='top'>Unify your business data in one simple ecomerce dashboard</p>

            <div className='reason-parent flex flex-wrap mx-auto'>
                <p><img src={code} alt='' /> Front-End Friendly</p>
                <p className='mid-p'><img src={price} alt='' /> Affordable Price</p>
                <p><img src={message} alt='' /> Quick Response</p>
            </div>
        </section>
    </div>
  )
}

export default Reason;