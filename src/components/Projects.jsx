import React from 'react'
import { motion } from 'framer-motion';
import '../static/styles/Projects.css'

const Projects = () => {
    return (
        <div className=' md:p-5 mt-7 mb-[10rem] p-1' id='projects'>
            <div className='mx-2 md:mx-10'>
                <h2 className='text-amber-400 text-[4rem] font-Lobster my-3 p-2'> Projects </h2>
                <div className='grid grid-cols-1 bg-red-400 p-5 projectContainer text-center relative'>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            className='label-rm p-5 bg-black text-white   absolute right-10 -top-20 opacity-0 font-Nunito text-xl '>
                            <a href="https://fpms.kjsieit.com/" target='_blank'> Visit Deployment </a>
                        </motion.div>
                        <h1 className='my-10 mt-[7rem] text-[3rem] font-Nunito text-white'>
                            Faculty Profile Management System
                        </h1>
                        <hr className='w-64 mx-auto border-4 border-white' />
                        <p className=' my-[5rem] mb-[8rem] md:px-[5rem] lg:px-[14rem] px-2 text-justify text-xl text-white font-Nunito '>
                            FACULTY PROFILE MANAGEMENT SYSTEM is a web based application for storing, retrieving, generating annual reports, maintaining and managing information regarding the Faculty.
                            The application comprises two sections: the faculty and the admin section.
                            In faculty section the faculties need to fill up their personal details and scholarly information like Project implanted, Books/Journals Published etc.
                            The admin section displays all the information provided by the faculty and also provides facilities of different sorting and filtering options to fetch the desired records and displayed easily.
                        </p>
                    </motion.div>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-2'>
                    <div className='bg-[#9c9c9c] p-5 projectContainer relative'>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >

                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className='label-rm p-5 bg-black text-white   absolute right-10 -top-[1rem] opacity-0 font-Nunito text-xl '>
                                <a href="https://ephemeral-lebkuchen-2d5ee7.netlify.app/login" target='_blank'> View Deployment </a>
                            </motion.div>

                            <h2 className='text-center mt-[7rem] mb-[4rem] font-Nunito text-[3rem] text-white'>
                                PixInt
                            </h2>
                            <hr className=' w-52 mx-auto border-4 border-white' />
                            <p className='text-xl lg:px-[3rem] font-Nunito mb-[10rem] text-white px-5 my-[5rem] text-justify'>
                                A social media web app just like pinterest. Post your best captures here and save th eone you like. Interact wih community all over the globe . Make sure you sign up for it !
                            </p>
                        </motion.div>
                    </div>
                    <div className='bg-black p-5 projectContainer relative'>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >

                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className='label-rm p-5 bg-white text-black   absolute right-10 -top-[1rem] opacity-0 font-Nunito text-xl '>
                                <a href="https://glittery-conkies-907c71.netlify.app/" target='_blank'> View Deployment </a>
                            </motion.div>

                            <h2 className='text-center animate-pulse mt-[7rem] mb-[4rem] font-Nunito text-[3rem] text-white'>
                                AlgoViz
                            </h2>
                            <hr className=' w-52 mx-auto border-4 border-white' />
                            <p className='text-xl lg:px-[3rem] font-Nunito mb-[10rem] text-white px-5 my-[5rem] text-justify'>
                                A web app for visualizing various algorithms which are difficult to visualize . Open source any contributions are always welcome . Makes life of a CS student easy by making them understand such difficult algorithms !
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
