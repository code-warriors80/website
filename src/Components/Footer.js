import React from 'react'
import { BsGithub, BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

// images
import loaction from '../images/7.png'
import chat from '../images/4.png'
import user from '../images/5.png'
import platform from '../images/platform-1.webp'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-container'>
        <div className='footer-parent lg:flex items-center  justify-center md:flex md:items-start md:justify-around flex-wrap py-12'>
                        <div className='flex items-center justify-center'>
                          <img src={platform} alt='' className=''/>
                        </div>
          <div className='footer-address'>
            <h2 className='text-2xl md:text-2xl text-gray-900 text-center lg:text-left'>Contact For IT Support</h2>
            <div className='myaddresslist'>
              <div className='flex items-center justify-center lg:justify-start my-5 lg:text-xl lg:mt-10'><img src={chat} alt='' className='w-6 mr-5'/><p className='text-gray-500 text-sm'>Codewarriors02@gmail.com</p></div>
              <div className='flex items-center justify-center lg:justify-start my-5 lg:text-xl lg:mt-10'><img src={loaction} alt='' className='w-5  mr-5'/>  <p className='text-gray-500 text-sm'>Moq 45 officers quarters chindit cantoonment<br/>Sabon gari lga, Zaria ,Kaduna state</p></div>
              <div className='flex items-center justify-center lg:justify-start my-5 lg:text-xl lg:mt-10'><img src={user} alt='' className='w-6 mr-5'/><p className='text-gray-500 text-sm'> (+234) 08074126841 </p></div>
              <div className='flex items-center justify-center lg:justify-start my-5 lg:text-xl lg:mt-10'><img src={user} alt='' className='w-6 mr-5'/><p className='text-gray-500 text-sm'> (+234) 08056571766 </p></div>                                                               
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='subscrie w-64'>
                  <h2 className='text-2xl md:text-2xl text-gray-900 text-center mb-5'>Subscribe</h2>
                  <div className='sub'>
                          <input type='text' placeholder='Enter Your Email Here' className='w-full h-12 text-center outline-none'/>
                  </div>
                  
                  <button className='w-full p-3 bg-indigo-500 mt-5 text-white font-bold hover:animate-bounce shadow-lg delay-100'>Subscribe</button>
                  <p className='text-center mt-5'>Get the latest special offers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='allrights flex items-center justify-center'>
        <div className='rights lg:flex lg:items-start lg:justify-between flex items-center justify-center flex-wrap pb-10 lg:w-9/12'>
                        <div className='copyrights text-center mb-5'>
                                                      <h4 className=''>Copyrights @  <span className='font-bold'>Code-Warriors.</span> All Rights Reserved</h4>
                        </div>
                        <div className='socials flex items-start'>
                                      <span><BsGithub /></span>
                                        <span>< BsInstagram /></span>
                                      <span><BsFacebook /></span>
                                      <span><BsWhatsapp /></span>
                        </div>
          </div>
      </div>
    </section>
  )
}

export default Footer