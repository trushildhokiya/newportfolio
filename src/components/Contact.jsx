import React from 'react';
import { motion } from 'framer-motion';
import '../static/styles/Contact.css';
import Camera from '../static/Images/camera.jpg';

const Contact = () => {
    return (
        <div id="contact" className='md:p-5 mt-7 mb-[10rem] p-2'>
            <div className='md:mx-10  mx-2  bg-teal-900 rounded-[2px] '>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h2 className='p-3 font-Lobster text-[4rem] m-4 mt-[5rem] text-center flex-wrap text-white'>Lets Connect!</h2>
                        <div className='flex justify-center'>
                            <hr className='w-64 border-4 border-white'></hr>
                        </div>
                        <p className='p-10  px-[3rem] mt-[5rem] mb-[2rem] text-white text-justify text-xl font-Nunito'>
                            I love to design and develop. I am a student currently pursuing Bachelors in Computer Science. I love to work on web Technologies and am fairly skilled in UI/UX . If you want too collabrate Connect with me or drop a mail
                        </p>
                        <div className='social mb-[5rem]'>
                            <h2 className='px-3 font-Lato text-2xl m-4 text-center flex-wrap text-white'>Follow Me On</h2>
                            <div className='flex justify-center mt-[3rem]'>
                                <div className='flex justify-evenly items-center w-72 flex-wrap'>
                                    <motion.a whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }} href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='svgZoom' width="30" height="30" viewBox="0 0 20 20"><path fill="#fff" fill-rule="evenodd" d="M5.87.123C4.242.196 2.83.594 1.69 1.729.548 2.869.155 4.286.081 5.897.037 6.902-.231 14.498.545 16.49a5.04 5.04 0 0 0 2.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351C17.027.507 15.586-.325 5.87.123m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 0 1-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224M14.09 4.69c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 0 0-2.39 0M4.864 9.988a5.103 5.103 0 0 0 5.11 5.097 5.103 5.103 0 0 0 5.109-5.097 5.102 5.102 0 0 0-5.11-5.096 5.102 5.102 0 0 0-5.11 5.096m1.794 0A3.313 3.313 0 0 1 9.972 6.68a3.313 3.313 0 0 1 3.317 3.308 3.313 3.313 0 0 1-3.317 3.31 3.313 3.313 0 0 1-3.316-3.31" /></svg>
                                    </motion.a>
                                    <motion.a whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }} href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='svgZoom' width="40" height="40" viewBox="-5.5 0 32 32"><path fill="#fff" d="M0 8.219v15.563a2.6 2.6 0 0 0 2.625 2.625h15.563c.719 0 1.406-.344 1.844-.781.469-.469.781-1.063.781-1.844V8.219a2.6 2.6 0 0 0-2.625-2.625H2.625c-.781 0-1.375.313-1.844.781C.343 6.813 0 7.5 0 8.219zm2.813 2.062c0-1 .813-1.875 1.813-1.875 1.031 0 1.875.875 1.875 1.875 0 1.031-.844 1.844-1.875 1.844-1 0-1.813-.813-1.813-1.844zm5.031 12.844v-9.531c0-.219.219-.406.375-.406h2.656c.375 0 .375.438.375.719.75-.75 1.719-.938 2.719-.938 2.438 0 4 1.156 4 3.719v6.438c0 .219-.188.406-.375.406h-2.75c-.219 0-.375-.219-.375-.406v-5.813c0-.969-.281-1.5-1.375-1.5-1.375 0-1.719.906-1.719 2.125v5.188c0 .219-.219.406-.438.406H8.218c-.156 0-.375-.219-.375-.406zm-4.969 0v-9.531c0-.219.219-.406.375-.406h2.719c.25 0 .406.156.406.406v9.531a.414.414 0 0 1-.406.406H3.25c-.188 0-.375-.219-.375-.406z" /></svg>
                                    </motion.a>
                                    <motion.a whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }} href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='svgZoom' width="30" height="30" viewBox="0 0 20 20"><path fill="#fff" fill-rule="evenodd" d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0" /></svg>
                                    </motion.a>
                                    <motion.a whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }} href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='svgZoom' width="30" height="30" viewBox="0 -1.5 20 20"><path fill="#fff" fill-rule="evenodd" d="M13.029 11.247a1.407 1.407 0 0 1-1.401-1.397c0-.773.639-1.419 1.401-1.419.761 0 1.378.646 1.378 1.419 0 .772-.616 1.397-1.378 1.397m.194 2.583c-.673.681-1.728 1.013-3.224 1.013-1.497 0-2.551-.332-3.223-1.013a.383.383 0 0 1 0-.537.37.37 0 0 1 .528 0c.525.533 1.406.792 2.695.792 1.288 0 2.17-.26 2.696-.792a.37.37 0 0 1 .528 0 .383.383 0 0 1 0 .537M5.592 9.85c0-.772.638-1.419 1.399-1.419s1.378.647 1.378 1.419-.617 1.397-1.378 1.397A1.406 1.406 0 0 1 5.592 9.85M20 8.313c0-1.266-1.016-2.297-2.265-2.297-.576 0-1.119.218-1.535.609-1.495-.987-3.497-1.625-5.714-1.712l1.223-3.786 3.212.767c.001 1.042.837 1.889 1.865 1.889s1.865-.849 1.865-1.892C18.651.85 17.814 0 16.786 0c-.77 0-1.431.475-1.716 1.151L11.212.23l-1.51 4.676c-2.301.043-4.386.678-5.937 1.688a2.239 2.239 0 0 0-1.501-.577C1.016 6.016 0 7.046 0 8.313c0 .805.414 1.542 1.076 1.956C.473 13.88 4.67 17 9.958 17c5.266 0 9.449-3.091 8.891-6.686a2.287 2.287 0 0 0 1.151-2" /></svg>
                                    </motion.a>
                                    <motion.a whileHover={{ scale: 1.25, fill: "rgb(251 ,191 ,36" }} whileTap={{ scale: 0.9 }} href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='svgZoom' width="30" height="30" viewBox="0 0 32 32"><path fill="#fff" d="M30.996 7.824v17.382a2.044 2.044 0 0 1-2.044 2.044H24.179V15.663L16 21.799l-8.179-6.136v11.588H3.049a2.044 2.044 0 0 1-2.044-2.044V7.824A3.067 3.067 0 0 1 5.92 5.376l-.008-.006L16 12.937 26.088 5.37a3.067 3.067 0 0 1 4.907 2.454z" /></svg>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={Camera} className='object-cover h-full w-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
