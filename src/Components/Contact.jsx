import React from "react";
import robot from "../images/hero-shape-2.webp";
import world from "../images/world-map.png.webp";
import location from "../images/7.png";
import chat from "../images/4.png";
import user from "../images/5.png";
import '../styles/contact.css'
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Contact = () => {
  return (
    <div className="min-h-screen md:max-w-6xl my-0 mx-auto flex flex-col gap-4 justify-center md:px-10 px-6 md:pt-6 bg-white pt-4 pb-3">
      <div className="flex gap-1 items-center justify-center">
        <div className="h-[80px] w-[80px]">
          <img className="w-[100%] h-[100%] ani-img" src={robot} alt=""/>
        </div>
        <h2 className="text-4xl font-bold text-center">
          Get In <span className="span">Touch</span>
        </h2>
      </div>
      <p className="text-center mb-[20px] md:mb-[55px]">
        Your request will be responded to within 24 hours
      </p>
      <div className="flex items-center justify-center border-solid border-[#f1f2fa] border-[2px] rounded-[30px] h-[150px] md:h-[100px]">
        <div className="justify-between md:items-center gap-3 flex flex-col md:flex-row w-[85%]">
          <div className="flex gap-4 items-center justify-center">
            <div className="h-[20px] w-[20px]">
              <img className="w-[100%] h-[100%]" src={chat} alt="" />
            </div>
            <p>Codewarriors@gmail.com</p>
          </div>
          <span className="hidden md:block md:h-[50px]  md:w-[3px] md:bg-[#f1f2fa]"></span>
          <div className="flex gap-4 items-center justify-center">
            <div className="h-[20px] w-[20px]">
              <img
                className="w-[100%] h-[100%] ml-[-10px] md:ml-0"
                src={location}
                alt=""
              />
            </div>
            <p>85 Howord St, Toronto</p>
          </div>
          <span className="hidden md:block md:h-[50px] md:w-[3px] md:bg-[#f1f2fa]"></span>
          <div className="flex gap-4 items-center justify-center">
            <div className="h-[20px] w-[20px]">
              <img
                className="w-[100%] h-[100%] ml-[-10px] md:ml-0"
                src={user}
                alt=""
              />
            </div>
            <p>(+234) 70-4067-8029</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-4 max-w-7xl flex-col md:flex-row">
        <div className="hidden md:block flex-1">
          <img className="w-[100%] h-[100%] object-cover" src={world} alt="" />
        </div>
        <form className="flex-1 flex flex-col w-full items-center gap-5">
          <div className="form-control w-full max-w-xs  md:max-w-sm lg:max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="input border-solid border-[#f1f2fa] border-[2px] focus:outline-none w-full max-w-xs md:max-w-sm lg:max-w-md rounded-[30px]"
            />
          </div>
          <div className="form-control w-full max-w-xs md:max-w-sm lg:max-w-md">
            <input
              type="text"
              placeholder="Email"
              className="input border-solid border-[#f1f2fa] border-[2px] focus:outline-none w-full max-w-xs md:max-w-sm lg:max-w-md rounded-[30px]"
            />
          </div>
          <div className="form-control w-full max-w-xs md:max-w-sm lg:max-w-md">
            <textarea
              className="textarea border-solid border-[#f1f2fa] border-[2px] focus:outline-none h-[250px]"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs md:max-w-sm lg:max-w-md">
            <motion.button type="submit" className="h-[50px] rounded-[30px] font-bold bg-transparent border-solid border-[#8169f1] text-[#8169f1] border-[2px]" variants={buttonVariants} whileHover="hover">Send</motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
