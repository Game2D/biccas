"use client"

import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion';

type FeatureCardProps = {
    title: string;
    description: string;
    banner: string;
    index: number;
}

const FeatureCard = ({ title, description, banner, index }: FeatureCardProps) => {
  return (
    <motion.div className='flex flex-col gap-y-6 items-center'
        variants={fadeIn('down', 'spring', index * 0.8, 1)}
        initial="hidden"
        whileInView="show"
    >
        <Image 
            src={banner}
            width={434}
            height={500}
            alt='banner-image'
            className='w-[234px] h-[300px] sm:w-[434px] sm:h-[500px]'
        />
        <h4 className='header-4'>{title}</h4>
        <p className='paragraph-2 max-w-96 text-center'>{description}</p>
    </motion.div>
  )
}

export default FeatureCard