import React from 'react'
import aboutLogo from '../img/hero-shape-2.webp'
import img1 from '../img/head.png'
import img2 from '../img/22.png'
import img3 from '../img/23.png'
import img4 from '../img/fe4.png'
import ourteam from '../img/head.png'
import robot from '../img/hero-shape-2.webp'
import Zoom from 'react-reveal/Zoom'


import './about.css'
const About = () => {
    const items = [
        {
            title: 'Our Mission',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente labore molestias, expedita mollitia quo quos corporis placeat est nesciunt! Quas dicta reiciendis debitis numquam veritatis ex eaque cupiditate quasi? Dolores.',
            img: img2
        },
        {
            title: 'Our Vision',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente labore molestias, expedita mollitia quo quos corporis placeat est nesciunt! Quas dicta reiciendis debitis numquam veritatis ex eaque cupiditate quasi? Dolores.',
            img: img3
        },
        {
            title: 'Our Objective',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente labore molestias, expedita mollitia quo quos corporis placeat est nesciunt! Quas dicta reiciendis debitis numquam veritatis ex eaque cupiditate quasi? Dolores.',
            img: img4
        }
    ]

    const content = items.map(({ title, desc, img }, index) => {
        return (
            <Zoom>
                <div className="item bg-gray-100  rounded-lg py-6" key={index}>
                    <img src={img} alt="" srcset="" className='mx-auto' />
                    <h3>{title}</h3>
                    <p className='mt-2 leading-6 text-gray-500'>{desc}</p>
                </div>
            </Zoom>
        )
    })
    return (
        <section className='about'>
            <div className="about__Header mb-10 lg:mb-20">
                <Zoom>

                    <div className="about__header__info flex flex-col justify-center items-center">
                        <h2 className='text-4xl font-bold flex text-center justify-around items-center px-9 '> <img src={aboutLogo} alt="" srcset="" /> About Our <span className=''> Team</span></h2>
                        <p className="mt-2 leading-6 flex text-center items-center text-gray-500">What Makes us unique and why should you consider using our services</p>
                    </div>
                </Zoom>
            </div>
            <div className="about__us flex justify-center items-center flex-col mt-6 mb-10 lg:mb-20 px-12">
                <div className="about__wrapper flex justify-between items-center flex-col lg:flex-row mt-6 px-12 max-w-7xl">
                    <Zoom>
                        <img src={img1} alt="" srcset="" />
                    </Zoom>
                    <Zoom>
                        <div className="about_info md:w-2/3 md:ml-6 py-9  p-3">
                            <h2 className="text-6xl font-bold">Offering the best IT services to <span>Our Clients</span></h2>
                            <p className="mt-2 leading-9 text-gray-500 line mb-6">Like any great agency, we are only as good
                                as the result we deliver of our recent work. Our developers are commited to maintaining
                                the highest web standards so that your site will withstand the test of time</p>
                            <a className="border-2 border-purple-700 text-purple-700 py-4 px-6 rounded-[30px]">About Us</a>
                        </div>
                    </Zoom>
                </div>
                <div className="about__service__wrapper flex justify-between items-center flex-col lg:flex-row mt-6 px-12 max-w-7xl gap-6 rounded mt-12">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default About