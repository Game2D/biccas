import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const GetStarted = () => {
  return (
    <div className='flex-col 2xl:flex-row flex bg-dark-200 !py-20 items-center gap-y-6'>
        <div className='wrapper flex flex-col gap-y-8 2xl:w-2/3'>
            <h1 className='header-3 lg:header-2 !font-semibold !text-white'>People are Saying About Do With</h1>
            <p className='paragraph-2'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
            <Image
                src="/assets/img/quote.svg"
                width={45}
                height={38}
                alt='quote'
            />
            <p className='paragraph-2'>
            I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍
            </p>

            <p className='paragraph-2'>_ Aria Zinanrio</p>
        </div>
        <div className='2xl:wrapper w-full 2xl:ml-auto 2xl:w-[50%]'>
            <div className='flex flex-col gap-y-4 bg-dark-100 rounded-lg px-12 lg:px-24 py-16 items-center'>
                <Image 
                    src="/assets/img/coin.svg"
                    width={72}
                    height={88}
                    alt='coin'
                />
                <h2 className='text-[24px] lg:header-4 mx-auto !text-white !font-medium'>Get Started</h2>

                <div className='w-full flex flex-col gap-y-4'>
                    <label htmlFor="email" className='text-white font-normal text-[16px] lg:text-[20px]'>Email</label>
                    <input className='px-6 py-4 bg-white outline-none border-none rounded-lg lg:text-[18px] text-[14px]' id='email' type="text" placeholder='Enter your email' />
                </div>

                <div className='w-full flex flex-col gap-y-4'>
                    <label htmlFor="message" className='text-white font-normal text-[16px] lg:text-[20px]'>Message</label>
                    <textarea className='px-6 py-4 bg-white outline-none border-none rounded-lg lg:text-[18px] text-[14px]' id='message' placeholder='What are you say?' />
                </div>

                <Button className='p-6 lg:p-8 rounded-lg bg-green hover:bg-green/70 text-white w-full text-[16px] lg:text-[18px]'>
                    Request Demo
                </Button>
                <p className='ml-auto !text-[14px] paragraph-2'>or <span className='text-white'>Start Free Trial</span></p>
            </div>
        </div>
    </div>
  )
}

export default GetStarted