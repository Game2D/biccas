'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import { navLinks } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';
import { navVariants } from '@/utils/motion'
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.div
      className={`wrapper flex items-center`}
      variants={navVariants}
      initial='hidden'
      whileInView='show'
    >
       <Image
        src='/assets/img/biccas.png'
        width={110}
        height={30}
        alt='biccas'
       />
       
       <ul className='hidden lg:flex mx-auto gap-x-12 items-center'>
        {navLinks.map((link) => { 
            return (
            <li>
                <Link
                    key={link.name}
                    href={link.url}
                    className={`nav-item ${link.url == window.location.pathname ? 'active' : ''}`}
                >
                    {link.name}   
                </Link> 
            </li>
            )
        })}
       </ul>

       <div className='hidden lg:flex gap-x-8 items-center'>
            <Link
                key='Login'
                href='/login'
                className={`nav-item`}
            >
                Login
            </Link> 
            <Button className='bg-green hover:bg-green/70 text-[16px] font-medium'>
                Sign up
            </Button>     
       </div>

       <Button className='block lg:hidden ml-auto bg-grey-100 hover:bg-grey-200/60 border-grey-200/30 p-2 items-center'>
        <Menu className='text-dark-100' />
       </Button>
    </motion.div>
  )
}

export default Navbar