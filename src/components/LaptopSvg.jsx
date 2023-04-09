import React from 'react'
import { motion } from 'framer-motion';

const LaptopSvg = () => {

    const transition = { duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1, ease: "easeInOut" }

    return (
        <div className='flex'>
            <div className='relative'>
                <svg className="items-center mt-3 svgGlow" xmlns='' width="400" height="460" viewBox='0 0 550 550'>
                    <filter id="amber-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                        <feFlood result="flood" flood-color="#fbbf24" flood-opacity="1"></feFlood>
                        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                        <feMorphology in="mask" result="dilated" operator="dilate" radius="3"></feMorphology>
                        <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="blurred"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <motion.path
                        style={{ filter: "url('#amber-glow')" }}
                        d="M58.1 94.4c-5.3 1.9-11.1 7.4-13.7 13l-2.4 5.1V370h-9.5c-8.8 0-9.8.2-12 2.5-2.4 2.3-2.5 3.1-2.5 13.3 0 17.5 3.6 25.3 14.2 30.6l5.2 2.6h437.2l5.2-2.6c10.6-5.3 14.2-13.1 14.2-30.6 0-10.2-.1-11-2.5-13.3-2.2-2.3-3.2-2.5-12-2.5H470V241.2c0-127.3-.1-128.7-2.1-133.2-2.7-6-6.4-9.8-12.4-12.6l-5-2.4-194.5.1c-150.1 0-195.3.3-197.9 1.3zm394.5 16 3.4 3.4V370h-74.8c-60.7 0-75.2.3-76.6 1.3-1 .8-2.1 3.1-2.5 5.3l-.6 3.9h-91l-.6-3.9c-.4-2.2-1.5-4.5-2.5-5.3-1.4-1-15.9-1.3-76.6-1.3H56V113.8l3.4-3.4 3.4-3.4h386.4l3.4 3.4zM196.7 388.3c.9 3.1 2 4.7 3.8 5.5 3.7 1.7 107.3 1.7 111 0 1.8-.8 2.9-2.4 3.8-5.5l1.1-4.3H480v6c0 6.6-1.7 11-5.2 13.4-2 1.4-24.2 1.6-218.8 1.6-194.6 0-216.8-.2-218.8-1.6-3.5-2.4-5.2-6.8-5.2-13.4v-6h163.6l1.1 4.3z"
                        fill="transperent"
                        strokeWidth="3"
                        stroke="rgba(255,255,255, 0.69)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={transition}
                    />


                </svg>
                {/* <div className='absolute top-[9rem] left-[8rem]'>
                    <svg className="items-center mt-3 svgGlow" xmlns='' width="200" height="200" viewBox='0 0 900 800'>
                        <filter id="amber-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                            <feFlood result="flood" flood-color="#fbbf24" flood-opacity="1"></feFlood>
                            <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                            <feMorphology in="mask" result="dilated" operator="dilate" radius="3"></feMorphology>
                            <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="blurred"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                        <motion.path
                            style={{ filter: "url('#amber-glow')" }}
                            d="M122 91.7c-53.3 5.9-98.3 41.8-114.9 91.8C1.9 199.3.5 207.8.5 226c0 17.6 1.2 25.6 6.2 41.4 14.4 46 56.6 82.7 104.9 91.3l9.4 1.7v24.3c0 22.5.2 24.7 2 28.3 3.5 6.9 12.5 9.9 19.3 6.4 1.7-.9 22-14.3 45.2-29.8l42-28.1 82.5-.6c78.6-.5 82.9-.6 91.5-2.6 55.2-12.6 94.6-52.5 106.2-107.3 2.5-11.8 2.5-38.2 0-50-11.5-54.4-51.2-94.8-105.5-107.2l-9.7-2.2-134.5-.2c-74 0-136.1.1-138 .3zm280.5 32.6c41.2 11.3 71.4 44.2 78 85.2 8.7 53.2-24.8 103.7-78.3 118.3l-9.7 2.6-86 .6-86 .5-34.7 23.3L151 378v-17.5c0-15.6-.2-18-2-21.5-2.9-5.7-7.3-7.6-19.6-8.4-61.4-3.8-106.7-58.8-98.3-119.2 6.3-45.3 43.6-82.5 89.5-89.3 3.2-.5 65.8-.8 138.9-.7l133 .1 10 2.8z"/><path d="M158.8 153.1c-2.3 1.2-4.6 3.5-5.8 5.9-1.9 3.8-2 5.8-2 67s.1 63.2 2 67c2.3 4.5 8 8 13 8s10.7-3.5 13-8c1.8-3.6 2-5.8 2-28v-24h30v24c0 22.2.2 24.4 2 28 2.3 4.5 8 8 13 8s10.7-3.5 13-8c1.9-3.8 2-5.8 2-67s-.1-63.2-2-67c-2.3-4.5-8-8-13-8s-10.7 3.5-13 8c-1.8 3.6-2 5.8-2 28v24h-30v-24c0-22.2-.2-24.4-2-28-3.7-7.3-12.7-9.9-20.2-5.9zM278.8 153.1c-2.3 1.2-4.6 3.5-5.8 5.9-1.9 3.8-2 5.8-2 67s.1 63.2 2 67c2.3 4.5 8 8 13 8s10.7-3.5 13-8c1.9-3.8 2-5.8 2-67s-.1-63.2-2-67c-3.7-7.3-12.7-9.9-20.2-5.9zM338.8 153.1c-2.3 1.2-4.6 3.5-5.8 5.9-1.9 3.7-2 5.8-2 37s.1 33.3 2 37c2.3 4.5 8 8 13 8s10.7-3.5 13-8c1.9-3.7 2-5.8 2-37s-.1-33.3-2-37c-3.7-7.3-12.7-9.9-20.2-5.9zM338.8 273.1c-4.3 2.2-7.8 8.1-7.8 12.9 0 1.7.9 4.9 2 7 2.3 4.5 8 8 13 8 7.6 0 15-7.4 15-15 0-5-3.5-10.7-8-13-4.9-2.5-9.4-2.5-14.2.1z"
                            fill="white"
                            strokeWidth="3"
                            stroke="rgba(255,255,255, 0.69)"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={transition}
                        />
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export default LaptopSvg;

