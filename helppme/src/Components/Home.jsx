import React from 'react'
import logo from "../assets/home.svg"
const Home = () => {
  return (
    <div className='p-1 md:w-full md:flex md:justify-center md:items-center md:mt-10 h-full'>
        <div className=" md:flex md:w-11/12 w-full">
        
        <div className="md:flex-1 md:mt-20 mt-4 ">
            <p className="md:text-6xl py-3 md:font-bold  
            text-3xl md:text-left text-center font-bold">Connecting You to Care, Anytime, Anywhere.</p>
            <p className='text-text md:text-justify text-center p-2 md:text-base text-small'>At HelppMe, We are committed to providing essential contact information for the residents of Ambur. Our platform is designed to be user-friendly, accessible, and available 24/7 without any login or signup requirements. Stay tuned for the official launch, and explore how we can help you find the services and support you need.</p>
        </div>
        <div className="my-5 p-2 flex-1 md:ml-5 flex items-center justify-center w-full">
            <div className="md:ml-20">
                <img src={logo} alt="png" className='' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home