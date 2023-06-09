import React, { useState } from 'react'
import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon';
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-10%" },
    }


    return (
        <div>
            <div className=' flex w-full h-24 bg-[rgb(4,4,4)] p-2 '>
                <div className='h-16 md:ml-5'>
                    <a href="/">
                        <SvgIcon />
                    </a>
                </div>
                <div className='w-full pl-5 pr-5  flex items-center flex-row-reverse flex-wrap'>
                    <div className='hidden md:flex  w-96   mr-[1rem] md:mr-[3rem]'>
                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.25 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='about-me' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#about-me" >About</a>
                            </Link>
                        </motion.p>

                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.25 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='experience' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#experience" >Experience</a>
                            </Link>
                        </motion.p>

                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.25 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#projects" >Projects</a>
                            </Link>
                        </motion.p>

                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.25 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#contact" >Contact</a>
                            </Link>
                        </motion.p>
                    </div>
                    <div className='md:hidden'>
                        <Hamburger color='white' direction='right' duration={0.8} toggled={open} toggle={setOpen} />
                    </div>
                </div>
            </div>
            <motion.div
                animate={open ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.2 }}
                className={` flex-col md:hidden duration-300 ${open ? "flex" : "hidden"} `}>
                <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='about-me' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#about-me" >About</a>
                            </Link>
                        </motion.p>

                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='experience' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#experience" >Experience</a>
                            </Link>
                        </motion.p>

                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#projects" >Projects</a>
                            </Link>
                        </motion.p>

                        <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='text-white font-Bebas text-xl hover:text-amber-400 hover:scale-125  duration-150 flex-1 p-3 ms-4'>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500} >
                                <a href="#contact" >Contact</a>
                            </Link>
                        </motion.p>
            </motion.div>
        </div>
    )
}

export default Navbar


//trushil svg code:
//d="m 41 20 l -16 0 l 0 -7 l 40 0 l 2 0 l 0 7 l -16 0 l 0 31 l -10 0 l 0 -31"