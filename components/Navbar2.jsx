import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar2 = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>

                {/* Left Side - Logo */}
                <a href="https://www.linkedin.com/in/saarukesan-premkumar-7a5a92195/">
                    <Image src={isDarkMode ? assets.logo_dark : assets.linkedin} alt=''
                           className='w-10 cursor-pointer transition-transform duration-300 hover:scale-125'/>
                </a>

                {/* Center - Navigation Links */}
                <div className="flex-grow flex justify-center">
                    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
                        <li><a className='font-grotesk hover:text-blue-600 transform duration-300' href="#top">Home</a></li>
                        <li><a className='font-grotesk hover:text-blue-600 transform duration-300' href="#education">Education</a></li>
                        <li><a className='font-grotesk hover:text-blue-600 transform duration-300' href="#project">Projects</a></li>
                        <li><a className='font-grotesk hover:text-blue-600 transform duration-300' href="#work">Works</a></li>
                        <li><a className='font-grotesk hover:text-blue-600 transform duration-300' href="#skill">Skills</a></li>
                        <li><a className='font-grotesk hover:text-blue-600 transform duration-300' href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Right Side - Buttons/Menu */}
                <div className='flex items-center gap-4'>
                    <button className='block md:hidden' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                    </button>
                </div>

                {/* -- ----- mobile menu ------  -- */}

                <ul ref={sideMenuRef}
                    className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-100 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt=''
                               className='w-5 cursor-pointer'/>
                    </div>

                    <li><a className='font-grosky' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-grosky' onClick={closeMenu} href="#education">Education</a></li>
                    <li><a className='font-grosky' onClick={closeMenu} href="#project">Projects</a></li>
                    <li><a className='font-grosky' onClick={closeMenu} href="#work">Works</a></li>
                    <li><a className='font-grosky' onClick={closeMenu} href="#skill">Skills</a></li>
                    <li><a className='font-grosky' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>


            </nav>
        </>
    )
}

export default Navbar2
