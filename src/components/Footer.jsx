import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className=' bg-zinc-900 text-white p-5'>
        <div className='flex  items-center flex-col'>
            <p className='font-Nunito tracking text-xl my-2'>Designed and Developed by</p>
            <p className='font-Nunito tracking text-xl text-amber-400 my-2'>Trushil Dhokiya</p>
            <p className='font-Lato text-xl my-2'>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
