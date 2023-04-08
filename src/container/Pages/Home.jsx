import React from 'react'
import Navbar from '../../components/Navbar'
import '../../static/styles/Home.css';
const Home = () => {

  const bgImage = "../../static/Images/background.jpeg";
  return (
    <div className='w-full h-screen home'>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
