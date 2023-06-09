import React from 'react';
import '../static/styles/AboutMe.css';
import Image1 from '../static/Images/image-1.jpg';
import Image2 from '../static/Images/image-2.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='md:p-5 mt-7 mb-[10rem] p-2' id="about-me">
            <div className='md:mx-10  mx-2  bg-[rgb(237,231,222)] rounded-[2px] '>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='p-5'>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-center text-[#025A4E] font-Lobster text-[4rem]'>
                            About Me
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className=' px-6 mt-4 font-Nunito text-xl text-justify text-[#4c6763]'>
                            Im Trushil , a enthusiastic web developer and UX Designer . My journey as a CS Engineer began during my school days when I first learnt about html, css . Later on I developed a keen interest on learning about web development , which lead me on making user frienldy designs and field of UX.
                            {/* It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, */}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='px-6 my-6'>
                            <div className=' p-4 block-tags font-Nunito text-xl font-bold w-[15rem] md:w-[20rem]'> Personal Life & Education </div>
                            <div className='my-3'>
                                <p className='py-3 text-[#4c6763] font-Nunito text-xl flex'>
                                    <span><strong className='text-[#025A4E] font-Nunito text-xl '>Name: </strong></span>
                                    <span className='mx-3'>Trushil Vijay Dhokiya</span>
                                </p>
                                <p className='py-3 flex text-[#4c6763] font-Nunito text-xl'>
                                    <strong className='text-[#025A4E] font-Nunito text-xl'>Birthdate: </strong>
                                    <span className='mx-3'>2003-10-26</span>
                                </p>
                                <p className='py-3 flex text-[#4c6763] font-Nunito text-xl'>
                                    <strong className='text-[#025A4E] font-Nunito text-xl'>Location: </strong>
                                    <span className='mx-3'>Mumbai</span>
                                </p>
                                <p className='py-3 flex text-[#4c6763] font-Nunito text-xl'>
                                    <strong className='text-[#025A4E] font-Nunito text-xl'>Email: </strong>
                                    <span className='mx-3'>trushil.d@somaiya.edu</span>
                                </p>
                                <p className='py-3 text-[#4c6763] font-Nunito text-xl text-justify'>
                                    Currently studying at <em><strong><abbr className='mx-1 mr-3 no-underline text-[#025A4E]' title='K.J. Somaiya Institute Of Technology '><a href='https://kjsit.somaiya.edu.in/en#'>KJSIT</a></abbr></strong></em>
                                    Pursuing <abbr className='mx-1 mr-1 no-underline' title='Bachelors of Technology'>BTECH</abbr> in Computer Science
                                    <p className='font-Nunito font-bold '>Batch : 2021-2025</p>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div>
                        <img src={Image1} className=' object-cover h-full w-auto' alt="life" />
                    </div>
                    <div>
                        <img src={Image2} className=' object-cover h-full w-auto' alt="life" />
                    </div>
                    <div className='p-6'>
                        <div className='flex flex-col p-2 md:px-[2rem]'>
                            <div className='tag-blocks-right text-center font-Nunito  font-bold text-xl text-[rgb(237,231,222)] self-end md:w-72 w-[15rem] p-4 my-4 '>Skills</div>
                            <motion.ul
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className='self-end text-xl font-Nunito text-[#4c6763] p-5 my-4 text-center md:text-left'>
                                <li className='my-1'>Web Development</li>
                                <li className='my-1'>Android Development (Basic)</li>
                                <li className='my-1'>C , Java , Python</li>
                                <li className='my-1'>Adobe XD , Figma</li>
                            </motion.ul>
                            <div className='tag-blocks-right text-center font-Nunito  font-bold text-xl text-[rgb(237,231,222)] self-end md:w-72 w-[15rem] p-4 my-4 '>Hobbies and Some stuff</div>
                            <motion.p
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className='p-5 text-xl font-Nunito text-[#4c6763] text-justify'>
                                I love to travel visit new places interact with new people learn something new from them . I love to adventure and live my life at the fullest with no regrets . I love to read books on thriller , mystery . Love listening to music during rains . Im eager and hungry to learn more and always willing to help others . 
                                <blockquote className='font-bold text-center ' cite='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3944843/'>I'm master of my fate, I'm captian of my soul</blockquote>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                            </motion.p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
