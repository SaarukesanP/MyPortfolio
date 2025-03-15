import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header2 = () => {
    return (
        <div className="w-11/12 max-w-1xl text-center mx-auto h-screen flex flex-col items-center justify-center">

            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt="" className="rounded-full pt-10 mb-4 w-48" />
            </motion.div>

            {/* Name Heading */}
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center items-end mb-6 gap-2 text-xl md:text-4xl font-grosky font-semibold"
            >
                Hi! I'm <span className="text-2xl md:text-5xl">Premkumar Saarukesan</span>
            </motion.h3>

            {/* Role Heading */}
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl sm:text-4xl lg:text-[70px] mb-6 font-grosky font-semibold text-blue-600"
            >
                Full-Stack Development
            </motion.h1>

            {/* University Details */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-6xl mx-auto font-grosky mb-3 font-medium text-gray-700"
            >
                BSc Hons (Computer Science) Undergraduate in University of Jaffna
            </motion.p>

            {/* Resume Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/saarukesan-p.pdf" download
                    className="px-10 py-3 mb-3 border rounded-full border-blue-950 border-2 flex items-center gap-2 bg-blue-600 text-white"
                >
                    My Resume <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </div>

            {/* Follow Me Text */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-500 mb-1 font-grosky font-thin mt-2"
            >
                Follow me
            </motion.p>

            {/* Social Media Links */}
            <div className="flex items-center gap-6">
                <a href="https://github.com/SaarukesanP">
                    <Image src={assets.github} alt="GitHub" className="w-8 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/saarukesan.p/?__pwa=1">
                    <Image src={assets.instagram} alt="Instagram" className="w-8 cursor-pointer" />
                </a>
                <a href="https://x.com/SaaruK27">
                    <Image src={assets.x} alt="Twitter/X" className="w-8 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Header2
