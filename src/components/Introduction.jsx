import React from 'react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion';
import LaptopSvg from './LaptopSvg';
import Resume from '../static/documents/resume.pdf'

const Introduction = () => {

    const transition = { duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1, ease: "easeInOut" }


    return (
        <div className=' p-4 md:p-9 intro-container'>
            <div className='text-white grid col-span-6 grid-col-1 lg:grid-cols-2'>
                <div className='md:px-6'>
                    <p className='font-Lato text-xl py-6 text-center md:text-left tracking-wider'>Hello,</p>
                    <h2 className='font-Lobster text-[4rem] text-amber-400  text-center md:text-left'>I'm Trushil Dhokiya</h2>
                    <p className='text-center md:text-left text-xl font-Lato py-6 tracking-widest'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString()
                            }}
                            options={{
                                strings: ["Web Developer", "UX Designer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <p className='px-3 my-3 text-justify md:text-left md:px-0 font-Nunito text-xl text-white'>
                        Ethusiactic web Devloper , love to design solutions which helps people across the globe. Fond of learning new Things!

                    </p>
                    <div className='flex justify-center  md:justify-start my-4 py-4'>
                        <motion.button whileHover={{ scale: 1.10, backgroundColor: "rgb(251 ,191 ,36)", color: "black", fontWeight: "bold" }} className='border-2 text-amber-400 rounded-xl p-3 font-Nunito border-white' >
                            <a href={Resume} download="Trushil Dhokiya Resume">
                                Download Resume
                            </a>
                        </motion.button>
                    </div>
                </div>
                <div className='hidden md:flex justify-center'>
                    <LaptopSvg />
                </div>
            </div>
        </div>
    )
}

export default Introduction
