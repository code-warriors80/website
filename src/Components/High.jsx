import React from 'react'
import '../styles/high.css'
import vector1 from '../images/vector1.png'
import vector2 from '../images/vector2.png'


const High = () => {
  return (
    <div className='main flex items-center justify-center h-[400px] md:h-auto'>
        <div className='flex items-center justify-center md:pt-24 gap-5'>
            <img src={vector1} alt='' className='hidden md:block vector1'/>
                <div className='flex flex-col text-center gap-5 items-center px-3'>
                    <h4 className='text-[22px] font-light text-white'>Hire us for your project</h4>
                    <h2 className='text-[40px] md:text-[50px] font-normal text-white'>Let's Work Together</h2>
                    <a href="lol" className='py-[15px] px-[30] bg-transparent rounded-[30px] border-solid border-[2px] border-[white] text-white w-[150px]'>Higher Us</a>
                </div>
            <img src={vector2} alt='' className='hidden md:block mb-[-11px] vector2'/>
        </div>
    </div>
  )
}

export default High