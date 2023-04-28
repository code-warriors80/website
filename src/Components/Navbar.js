import React, {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import "../Styles/Navbar.css"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
      setNav(!nav)  
    }
  return (
    <div className='w-full flex items-center fixed py-3 px-10 z-20 bg-white  md:px-24'>
        {/* <img src={logo} className="w-9 rounded-full" alt="c-w logo"/> */}
        <h1 className='w-full text-xl font-bold'><span>Code~Warriors</span></h1>
        <ul className='hidden mx-auto mr-20 md:flex md:flex md:items-center'>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">Home</a></li>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">About </a></li>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">Services</a></li>
            <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 font-bold duration-150">Contact</a></li>
            <li className='p-4'><a href="/" className="tracking-wider font-semibold text-sm uppercase inline-block rounded-lg px-5 py-3 bg-indigo-500 text-white shadow-lg hover:animate-bounce delay-100">Profile</a></li>
            {/* <li className='p-4'><a href="/" className="mx-3 hover:opacity-80 duration-150">Blog</a></li> */}
        </ul>
        <div onClick={handleNav} className='block md:hidden '>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-20 bg-slate-100 opacity-95 border-r ease-in-out duration-500' : 'fixed left-[-100%]'}>
        {/* <h1 className='w-full text-xl py-2 mt-7 font-bold'>Code~Warriors</h1> */}
          <div className='p-4'>
            <ul className='uppercase p-4 mt-7 block'>
                  <li className='p-4 border-b border-slate-100'> <a href="/" className="mx-3 hover:opacity-90 duration-150">Home</a></li>
                  <li className='p-4 border-b  border-slate-100'><a href="/About" className="mx-3 hover:opacity-90 duration-150">About</a></li>
                  <li className='p-4 border-b  border-slate-100'><a href="/Contact" className="mx-3 hover:opacity-90 duration-150">Services</a></li>
                  <li className='p-4 border-b  border-slate-100'><a href="/" className="mx-3 hover:opacity-90 duration-150">Contact</a></li>
              </ul>
              <button className=' w-[130px] font-medium my-3 ml-4 px-3  py-2 hover: scale-105 duration-300 profile'>
                <a href="/">Profile</a>
              </button>
          </div>
        </div> 
    </div>
  )
}

export default Navbar;