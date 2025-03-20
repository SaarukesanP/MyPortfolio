import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    // <div className="bg-blue-50 flex justify-center items-center">
        <div className='text-center'>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.location} alt='' className='w-6'/>
                2nd Lane, Market Road, Chenkalady, Batticaloa
            </div>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                saaru27kesan@gmail.com
            </div>

            <div className='w-max flex items-center gap-2 mx-auto pb-20'>
                <Image src={assets.phone} alt='' className='w-6'/>
                +94 76 472 2514
            </div>
        </div>

    // </div>
  )
}

export default Footer
