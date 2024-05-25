"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/utils/motion'

const Hero = () => {
  return (
    <div className='flex-col lg:flex-row wrapper flex gap-x-8 !py-20 gap-y-12'>
        <motion.div 
            variants={slideIn('left', 'spring', 1.8, 1)}
            initial='hidden'
            whileInView='show'
            className='flex flex-col text-center items-center lg:text-left lg:items-start w-full lg:w-1/2'
        >
            <h1 className='header-2 !font-bold xl:header-1'>We’re here to <br />Increase your Productivity</h1>
            <Image 
                src='/assets/img/line.png'
                width={450}
                height={40}
                alt='line'
                className='w-[320px] xl:w-[520px] my-12'
            />

            <p className='w-[340px] paragraph-1 xl:w-[600px]'>
                Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
            </p>

            <div className='flex gap-x-4 mt-12'>
                <Button className='bg-green hover:bg-green/70 rounded-full px-8 py-7 font-medium text-[16px]'>
                    Try free trial 
                </Button>
                <Button variant='link' className='flex gap-x-4 px-8 py-7 font-medium text-[18px]'>
                    <PlayCircle size='28px' /> View Demo
                </Button>
            </div>
        </motion.div>

        <motion.div 
            variants={fadeIn('left', 'spring', 2.8, 1)}
            initial='hidden'
            whileInView='show'
            className='flex flex-col text-center items-center lg:text-left lg:items-start w-full lg:w-1/2'
        >
            <Image 
                src='/assets/img/hero_person.svg'
                className='place-self-center'
                width={801}
                height={658}
                alt='person'
            />
        </motion.div>
    </div>
  )
}

export default Hero