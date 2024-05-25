"use client"

import { plans } from '@/constants'
import React from 'react'
import PlanCard from './PlanCard'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Plans = () => {
  return (
    <div className='flex flex-col gap-y-8 wrapper items-center !pb-24'>
        <motion.div
            variants={fadeIn('down', 'spring', 0.1, 0.8)}
            initial='hidden'
            whileInView='show'
        >
            <h2 className='header-3 md:header-2 !font-bold text-center mb-4'>Choose Plan<br />That’s Right For You</h2>
            <p className='paragraph-2 text-center'>Choose plan that works best for you, feel free to contact us</p>
        </motion.div>

        <motion.div className='bg-white drop-shadow-md p-2 rounded-lg flex items-center'
            variants={fadeIn('down', 'spring', 0.3, 0.8)}
            initial='hidden'
            whileInView='show'
        >
            <p className='font-medium px-6 py-4'>Bil Monthly</p>
            <span className='font-medium px-6 py-4 bg-green text-white rounded-lg'>Bil Yearly</span>
        </motion.div>
        
        <div className='grid gap-y-8 gap-x-8 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
            {plans.map((plan, index) => (
                <PlanCard {...plan} index={index} />
            ))}
        </div>
    </div>
  )
}

export default Plans