import React, {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
// import logo from "../assets/cw.jpeg"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
      setNav(!nav)  
    }
  return (
    <div className=' align-middle flex justify-between mt-7 h-24 max-w-[1240px] px-4  items-center'>
        {/* <img src={logo} className="w-9 rounded-full" alt="c-w logo"/> */}
        <h1 className='w-full text-xl mr-10 mt-4 font-bold'>Code~Warriors</h1>
        <ul className='hidden text-xl mx-auto md:flex'>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">Home</a></li>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">About </a></li>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">Services</a></li>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">Contact</a></li>
            {/* <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 duration-150">Blog</a></li> */}
        <div className="profile-button">
          <button className=' w-[200px] font-medium my-3 ml-4 px-3  py-2 hover:scale-105 duration-300 profile'>
            <a href="/">our Profile</a>
          </button>
        </div>
        </ul>
        <div onClick={handleNav} className='block md:hidden '>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-slate-100 opacity-95 border-r ease-in-out duration-500' : 'fixed left-[-100%]'}>
        {/* <h1 className='w-full text-xl py-2 mt-7 font-bold'>Code~Warriors</h1> */}
          <div className='p-4'>
            <ul className='uppercase p-4 mt-7'>
                  <li className='p-4 border-b border-slate-100'> <a href="/" className="mx-3 hover:opacity-90 duration-150">Home</a></li>
                  <li className='p-4 border-b  border-slate-100'><a href="/About" className="mx-3 hover:opacity-90 duration-150">About</a></li>
                  <li className='p-4 border-b  border-slate-100'><a href="/Contact" className="mx-3 hover:opacity-90 duration-150">Contact</a></li>
                  <li className='p-4 border-b  border-slate-100'><a href="/" className="mx-3 hover:opacity-90 duration-150">Community</a></li>
              </ul>
              <button className=' w-[130px] font-medium my-3 ml-4 px-3  py-2 hover:scale-105 duration-300 profile'>
                <a href="/">Profile</a>
              </button>
          </div>
        </div> 
    </div>
  )
}

export default Navbar;