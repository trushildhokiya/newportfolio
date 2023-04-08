import React from 'react'
import { motion } from 'framer-motion';

const SvgIcon = () => {

    const transition = { duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1, ease: "easeInOut" }

    return (
        <div className='flex'>
            <svg className="items-center mt-3" xmlns='' width="70" height="60" viewBox='0 -20 80 120'>
                <motion.path
                    d="m 41 20 l -16 0 l 0 -7 l 40 0 l 2 0 l 0 7 l -16 0 l 0 31 l -10 0 l 0 -31"
                    fill="transparent"
                    strokeWidth="3"
                    stroke="rgba(255,255,255, 0.69)"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />

                <motion.circle
                    cx="46" cy="32" r="38" 
                    stroke="rgba(255,255,255,0.69)" 
                    stroke-width="3" 
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />

            </svg>
        </div>
    )
}

export default SvgIcon;