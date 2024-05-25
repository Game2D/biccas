"use client"

import React from 'react'
import { Button } from '../ui/button'
import { features } from '@/constants'
import FeatureCard from './FeatureCard'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/utils/motion'

const Features = () => {
  return (
    <motion.div className='flex flex-col wrapper gap-y-20 !py-28'
      variants={fadeIn('up', 'spring', 0.2, 0.4)}
      initial="hidden"
      whileInView="show"
    >
        <div className='w-full xl:flex-row flex-col flex items-start xl:items-center gap-y-4 gap-x-32'>
            <h2 className='header-3 font-bold xl:header-2'>Our Features<br className='hidden 2xl:block' /> you can get</h2>
            <p className='paragraph-2'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
            <Button className='bg-green hover:bg-green/70 rounded-full px-8 py-7 font-medium text-[16px]'>
                    Try free trial 
            </Button>
        </div>

        <div className='grid gap-y-8 gap-x-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'>
          {features.map((feature, index) => (
            <FeatureCard {...feature} index={index} />
          ))}
        </div>
    </motion.div>
  )
}

export default Features