import React from 'react'
import Navbar from '../../components/Navbar'
import '../../static/styles/Home.css';
import Introduction from '../../components/Introduction';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience'
const Home = () => {

  const bgImage = "../../static/Images/background.jpeg";
  return (
    <div className='w-full h-screen home'>
      <div>
        <Navbar />
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
