import React from 'react'
import { HashLoader } from "react-spinners";

const PreLoader = () => {
  return (
    <div className='flex w-full h-screen bg-slate-800 justify-center items-center'>
         <HashLoader 
            color='#dbd3d3'
         />
    </div>
  )
}

export default PreLoader
