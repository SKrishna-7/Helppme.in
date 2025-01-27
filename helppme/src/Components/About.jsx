import React from 'react'
import logo from '../assets/logo.png'
const About = () => {
  return (
    <div className="w-full md:flex md:flex-col md:items-center md:justify-center ">
        <h2 className='text-3xl text-center font-bold py-10'>About Us</h2>

    <div className="md:w-11/12 flex md:flex-row flex-col items-center justify-center p-2" >

    <div className="">
            <img src={logo} alt="" className='md:w-11/12 p-3 rounded-3xl'/>
    </div>
    <div className="mt-4 text-left px-3">
    <p className='md:text-xl text-lg text-accent font-semibold text-justify tracking-tight'><b className='text-blue-600'> At HelpMe.in </b>, we are dedicated to bridging the information gap for the residents of Ambur by providing a centralized platform for essential contact details. Whether it’s healthcare, education, emergency assistance, or community support, we strive to make accessing vital services effortless and stress-free.</p>
    <p className='py-2 text-lg font-medium text-blue-900
    text-left'>
           
           <b className='text-blue-600'>Our Mission </b> is To empower the community of Ambur by ensuring that every resident has access to accurate, up-to-date, and reliable information when they need it most.
            </p>
        <p className='py-2 text-lg font-medium 
        text-blue-900 text-left' >We <b className='text-blue-600'> envision </b> a connected and informed community where residents can access essential services quickly and efficiently, improving their quality of life.</p>

    </div>
        </div>
    </div>

  )
}

export default About