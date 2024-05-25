import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <div className='flex flex-col wrapper bg-dark-200 !py-16 gap-y-20'>
      <div className='flex-col lg:flex-row flex gap-8'>
        <div className='lg:w-1/2 flex flex-col gap-y-6'>
            <Image 
                src="/assets/img/biccas.png"
                width={160}
                height={30}
                alt='Biccas'
            />
            <p className='paragraph-2'>Get started now try our product</p>
            <div className="lg:w-[410px] relative flex items-center">
                <Input className='rounded-full p-6 lg:py-7 lg:px-4 bg-transparent border-[3px] text-base border-grey-200 placeholder:text-grey-200 text-grey-200' type="email" placeholder="Enter your email here" />
                <Button className='absolute right-2 rounded-full bg-green hover:bg-green/70 text-white py-4 px-3' type="submit"><ArrowRight size={18} /></Button>
            </div>
        </div>
        <div className='lg:w-1/2 flex gap-12'>
          {footerLinks.map((links) => (
            <ul className='flex flex-col gap-y-4 lg:ml-auto'>
              <li className='font-medium text-white text-[16px] md:text-[18px]'>{links.header}</li>
              {links.links.map((link) => (
                <li className='font-medium text-grey-200 text-[16px] md:text-[18px]'>{link}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className='flex'>
        <p className='font-medium text-[14px] md:text-[18px] text-white'>© 2024 Biccas Inc. Copyright and rights reserved</p>
        <p className='ml-auto font-medium hidden lg:block text-[18px] text-white'>Terms and Condtions - Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer