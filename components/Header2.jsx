import { assets } from '@/assets/assets';
import { icons } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FlipWords } from "@/components/ui/flip-words";

const Header2 = () => {
    const words = ["Full-Stack Development", "UI/UX Design", "Graphic Design"];

    return (
        <div className="text-center mx-auto flex flex-col items-center justify-center">
            {/* Profile Image */}
            <div>
                <Image src={assets.profile_img} alt="Profile" className="rounded-full mb-6 w-40 mt-20" />
            </div>

            {/* Name Heading */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-1 font-medium">
                Hi! I'm <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-grosky font-semibold text-gray-800">Saarukesan</span>
            </h3>

            {/* Flip Words Section */}
            <div className="mb-4 mt-4">
                <FlipWords
                    className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl text-center font-grosky font-semibold text-blue-600"
                    words={words}
                />
            </div>

            {/* University Details */}
            <p className="text-gray-700 text-center font-medium max-w-lg mx-auto">
                BSc Hons (Computer Science) Undergraduate at University of Jaffna
            </p>

            {/* Resume Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 transition-transform duration-300 hover:scale-110">
                <a
                    href="/p_saarukesan.pdf"
                    download
                    className="px-10 py-3 mb-3 rounded-full border-blue-800 bg-blue-600 text-white flex shadow-2xl items-center gap-2"
                >
                    Download My CV
                    <Image src={assets.download_icon} alt="Download" className="w-4" />
                </a>
            </div>

            {/* Follow Me Text */}
            <p className="text-gray-500 font-thin mt-2">
                Follow me
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-6 my-2">
                <a href="https://www.instagram.com/saarukesan.p/?__pwa=1">
                    <Image
                        src={assets.instagram}
                        alt="Instagram"
                        className="w-6 cursor-pointer transition-transform duration-300 hover:scale-125"
                    />
                </a>
                <a href="https://github.com/SaarukesanP">
                    <Image
                        src={assets.github}
                        alt="GitHub"
                        className="w-6 cursor-pointer transition-transform duration-300 hover:scale-125"
                    />
                </a>
                <a href="https://x.com/SaaruK27">
                    <Image
                        src={assets.x}
                        alt="Twitter/X"
                        className="w-6 cursor-pointer transition-transform duration-300 hover:scale-125"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header2;