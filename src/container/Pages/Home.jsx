import React from 'react'
import Navbar from '../../components/Navbar'
import '../../static/styles/Home.css';
import Introduction from '../../components/Introduction';
const Home = () => {

  const bgImage = "../../static/Images/background.jpeg";
  return (
    <div className='w-full h-screen home'>
      <div>
        <Navbar />
        <Introduction />
      </div>
    </div>
  )
}

export default Home
