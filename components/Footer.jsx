import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({}) => {
  return (
        <div className='text-center'>
            <div className='w-max flex text-[15px] items-center gap-2 mx-auto'>
                <Image src={assets.location} alt='' className='w-4'/>
                2nd Lane, Market Road, Chenkalady, Batticaloa
            </div>
            <div className='w-max flex text-[15px] items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-4'/>
                saaru27kesan@gmail.com
            </div>
            <div className='w-max flex text-[15px] items-center gap-2 mx-auto'>
                <Image src={assets.phone} alt='' className='w-4'/>
                +94 76 472 2514
            </div>

            {/* Copyright */}
            <div className="mt-6 border-t border-neutral-300 pt-4 pb-12">
                <p className="text-xs sm:text-sm">
                    &copy; {new Date().getFullYear()} Saarukesan.
                </p>
            </div>
        </div>
  )
}

export default Footer
