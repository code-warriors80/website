import React from "react";
import robot from "../images/hero-shape-2.webp";
import world from "../images/world-map.png.webp";
import location from "../images/7.png";
import chat from "../images/4.png";
import user from "../images/5.png";
import { Zoom } from "react-reveal";

const Contact = () => {
  return (
    <section className="align-middle justify-center lg:pt-28">
          <Zoom><h2 className='heading text-center mt-16 lg:mt-0 text-3xl lg:text-5xl'><img src={robot} alt='' className='animate-bounce w-10 lg:w-16' />About <span>Our Team</span></h2></Zoom>
          <Zoom><p className='heading-p mt-5 px-5 text-center text-sm mb-10 lg:mb-0 lg:text-sm font-thin lg:pb-10 text-gray-400'>What Makes us unique and why should you consider using our services</p></Zoom>
          
          <div className='hidden lg:flex lg:items-center lg:justify-center'>
              <div className='reason-parent w-11/12 lg:w-7/12 flex items-center justify-between lg:justify-between py-10'>
                  <Zoom><div className='lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center '><img src={location} alt='' className='w-8 lg:w-5/12 md:w-2/6'/></div> <p className='text-sm font-thin mt-2 lg:font-bold lg:mt-0'>Blk 45 officers quarters chindit cantoonment</p></div></Zoom>
                  <Zoom><div className='lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center'><img src={chat} alt='' className='w-8 lg:w-5/12 md:w-2/6' /></div> <p className='text-sm font-tin mt-2 lg:font-bold lg:mt-0'> Codewarriors02@gmail.com</p></div></Zoom>
                  <Zoom><div className='lg:flex lg:items-center lg:justify-center'><div className='flex items-center justify-center'><img src={user} alt='' className='w-8 lg:w-5/12 md:w-2/6' /></div>  <p className='text-sm font-thin lg:font-bold mt-3 lg:mt-0'> (+234) 08074126841 </p></div></Zoom>
              </div>
          </div>

        <div className="lg:flex lg:items-center lg:justify-center lg:py-20 pb-10">
            <div className="lg:flex lg:items-center lg:justify-around lg:w-10/12">
              <Zoom>
                  <img src={world} alt="" className="w-5/12 hidden lg:block"/>
              </Zoom>
              <Zoom>
                  <form className="contact-form w-full lg:w-5/12 px-5">
                      <div className="w-full mb-5 flex items-center justify-between flex-wrap">
                            <input type="text" placeholder="Name" className="mb-5 lg:mb-0 w-[100%] lg:w-[48%] h-[60px] px-3 border-solid rounded-2xl outline-none"/>
                            <input type="email" placeholder="Email" className="w-[100%] lg:w-[48%] h-[60px] px-3 rounded-2xl outline-none"/>
                      </div>

                      <div className="flex items-center justify-center mb-5">
                          <input type="text" placeholder="Subject" className="w-full h-[60px] px-3 rounded-2xl outline-none"/>
                      </div>

                      <div className="flex items-center justify-center mb-5">
                            <textarea placeholder='Type Your Message' className="w-full h-[250px] lg:h-[300px] p-3 rounded-2xl outline-none"></textarea>
                      </div>

                      <button className="'tracking-wider font-semibold text-sm uppercase inline-block rounded-lg px-5 py-3 bg-indigo-500 text-white shadow-lg hover:animate-bounce delay-100">Send Message</button>
                  </form>
                </Zoom>
            </div>
        </div>
    </section>
  );
};

export default Contact;
