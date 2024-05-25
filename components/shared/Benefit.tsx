"use client"

import { benefits } from '@/constants'
import { fadeIn, slideIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Benefit = () => {
  return (
    <div className='wrapper flex-col lg:flex-row gap-x-4 gap-y-8 max-lg:items-center flex !py-20'>
        <motion.div className='flex flex-col lg:w-1/2'
            variants={slideIn('left', 'spring', 0.4, 1)}
            initial='hidden'
            whileInView='show'
        >
            <div className='mx-auto'>
                <h2 className='header-3 md:header-2 !font-bold mb-8'>What Benefit Will You Get</h2>

                <ul className='flex flex-col gap-y-4'>
                    {benefits.map((benefit) => (
                        <li className='flex gap-x-4 paragraph-1'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95"/>
                            </svg>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>

        <motion.div className='lg:w-1/2'
            variants={fadeIn('left', 'spring', 0.8, 1)}
            initial='hidden'
            whileInView='show'
        >
            <Image
                src="/assets/img/benefit.svg"
                width={643}
                height={743}
                alt='benefit'
                className='mx-auto'
            />
        </motion.div>
    </div>
  )
}

export default Benefit