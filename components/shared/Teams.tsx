"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Teams = () => {
  return (
    <div className='flex flex-col wrapper !py-12 justify-around'>
        <motion.h3 variants={fadeIn('up', 'spring', 0.5, 1.5)} initial='hidden'
        whileInView='show' className='header-4 !font-bold lg:header-3 text-center'>More than 25,000 teams use Collabs</motion.h3>

        <motion.div variants={fadeIn('up', 'spring', 0.8, 1.5)} initial='hidden'
        whileInView='show'>
            <Image 
                src='/assets/img/logos.svg'
                alt='logos'
                width={1200}
                height={600}
                className='mx-auto py-12'
            />
        </motion.div>
    </div>
  )
}

export default Teams