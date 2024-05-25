import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { act } from 'react-dom/test-utils';
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion';

type PlanCardProps = { title: string; description: string; price: number; disscount: any; items: string[]; buttonText: string; active: boolean; url: string; index: number; };

const PlanCard = ({ title, description, price, disscount, items, buttonText, active, url, index }: PlanCardProps) => {
  return (
    <motion.div className={`${active === true ? 'bg-green' : 'bg-white'} md:w-[374px] flex flex-col items-center drop-shadow-lg rounded-xl px-6 py-10 gap-y-6`}
        variants={fadeIn('right', 'spring', 0.4 * index, 0.5)}
        initial='hidden'
        whileInView='show'
    >
        <h4 className={`header-4 ${active === true ? '!text-white' : ''}`}>{title}</h4>
        <p className={`max-w-[210px] text-center paragraph-2 ${active === true ? '!text-white' : ''}`}>{description}</p>

        <div className='flex flex-col items-center'>
            <div className='flex gap-1'>
                <p className={`text-center mt-0 !font-medium !text-[18px] paragraph-2 ${active === true ? '!text-white' : ''}`}>$</p>
                <p className={`text-center font-bold text-[50px]  ${active === true ? '!text-white' : 'text-black'}`}>{price}</p>
            </div>
            {disscount !== undefined && (
                <span className='bg-[#85DAB9] p-2 text-white rounded-lg'>{disscount}</span>
            )}
        </div>

        <ul className={`flex flex-col ${active === true ? 'bg-white' : 'bg-grey-100'} gap-y-3 p-8 rounded-lg`}>
            {items.map((item) => (
                <li className='font-medium flex gap-2' key={item}>
                    <Image 
                        src="/assets/img/mark.svg"
                        width={26}
                        height={26}
                        alt='mark'
                    />
                    {item}
                </li>
            ))}

            <Button className={`mt-4 font-semibold text-base ${active === true ? 'bg-green text-white hover:bg-green/70' : 'bg-white text-green hover:bg-white/70'} px-12 py-6 drop-shadow-md rounded-xl`}>
                {buttonText}
            </Button>
        </ul>
    </motion.div>
  )
}

export default PlanCard