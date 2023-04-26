import React from 'react'

// style
import '../Styles/Footer.css'

// images
import loaction from '../images/7.png'
import chat from '../images/4.png'
import user from '../images/5.png'
import platform from '../images/platform-1.webp'

const Footer = () => {
  return (
    <section className='footer'>
               <div className='footer-container'>
                              <div className='footer-parent'>
                                             <img src={platform} alt=''/>
                                             <div className='footer-address'>
                                                            <h2>Contact For IT Support</h2>
                                                            <div className='myaddresslist'>
                                                                           <p><img src={chat} alt='' /> Contactitec@gmail.com</p>
                                                                           <p><img src={loaction} alt='' /> 85 Howord St, Toronto</p>
                                                                           <p> <img src={user} alt='' /> (+234) 07056882004</p>                                                                           
                                                            </div>

                                             </div>

                                             <div className='subscribe'>
                                                    <h2 style={{textAlign: 'center'}}>Subscribe</h2>
                                                    <div className='sub'>
                                                            <input type='text' placeholder='Enter your email here'/>
                                                    </div>
                                                    
                                                    <button>Subscribe</button>
                                                    <p>Get the latest special offers</p>
                                             </div>
                              </div>
               </div>
               <div className='allrights'>
                              <div className='rights'>
                                             <div className='copyrights'>
                                                                           <h4>Copyrights @  <span>Code-Warriors.</span> All Rights Reserved</h4>
                                             </div>
                                             <div className='socials'>
                                                            <span>1</span>
                                                             <span>2</span>
                                                            <span>3</span>
                                                            <span>4</span>
                                             </div>
                               </div>
               </div>
    </section>
  )
}

export default Footer