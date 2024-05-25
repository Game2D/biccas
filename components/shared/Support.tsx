"use client"

import { supportItems } from '@/constants'
import { Star, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/utils/motion'

const Support = () => {
  return (
    <div className='flex-col lg:flex-row flex bg-[#F9F8FE] wrapper !py-16 gap-x-8 gap-y-8'>
        <motion.div 
            className='flex flex-col w-full lg:w-1/2'
            variants={slideIn('left', 'spring', 0.2, 1)}
            initial="hidden"
            whileInView="show"
        >
            <h2 className='header-3 font-bold lg:header-2'>How we support our<br /> partner all over the world</h2>
            <p className='paragraph-2 py-8'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
        
            <div className='flex mt-4'>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <Star fill='#FFC728' color='#FFC728' />
                        <Star fill='#FFC728' color='#FFC728' />
                        <Star fill='#FFC728' color='#FFC728' />
                        <Star fill='#FFC728' color='#FFC728' />
                        <Star fill='#FFC728' color='#FFC728' />
                    </div>
                    <p className='text-[18px] font-medium'><span className='font-bold'>4.9</span> / 5 rating</p>
                    <span className='text-[18px] font-bold text-grey-200'>databricks</span>
                </div>
            </div>
        </motion.div>

        <div className='flex flex-col w-full lg:w-1/2'>
            <ul className='flex flex-col gap-y-12 gap-x-16 my-auto'>
                {supportItems.map(( item, index ) => (
                    <motion.li className='flex gap-x-8' key={item.title}
                        variants={fadeIn('right', 'spring', 0.8 * index, 1)}
                        initial="hidden"
                        whileInView="show"
                    >
                        <Image 
                            src={item.icon}
                            width={32}
                            height={32}
                            className='bg-white p-3 w-14 h-14 drop-shadow-md'
                            alt={item.title}
                        />

                        <div className='flex flex-col gap-y-4'>
                            <h4 className='header-5 !font-semibold md:header-4'>{item.title}</h4>
                            <p className='paragraph-2'>{item.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Support