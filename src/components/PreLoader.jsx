import React, { useEffect } from 'react'
import { HashLoader } from "react-spinners";
import '../static/styles/Projects.css'
import { gsap } from 'gsap';
import SplitType from 'split-type';
const PreLoader = () => {

  useEffect(()=>{
    const myText= new SplitType('#my-text')
    console.log(myText);

    gsap.to('.char',{
      y:0,
      stagger:0.05,
      delay:0.2,
      duration: 0.1
    })
  })
  return (
    <div className='flex flex-col w-full h-screen bg-slate-800 justify-center items-center'>
         <HashLoader 
            color='#dbd3d3'
         />
         <h2 id="my-text" className='block text-[2.5rem] font-Bebas text-white my-[4rem] '>
          Design and Innovate
         </h2>
    </div>
  )
}

export default PreLoader
