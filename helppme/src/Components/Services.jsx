import React from 'react'
import logo1 from '../assets/helppme.svg';
import logo from '../assets/lOGO.svg';
import { MdOutlineHealthAndSafety, MdSupportAgent } from "react-icons/md";
import { MdEmergencyShare } from "react-icons/md";
import { SiMusicbrainz } from 'react-icons/si';

const Services = () => {
  return (
    <div className="p-2 pt-10 bg-white w-full ">
        <p className='text-center font-bold text-3xl tracking-wide '>Services</p>
        <p className='text-center text-gray-500 tracking-wider p-1'>we provide quick and easy access to essential services for the residents of Ambur.</p>

<div className="flex justify-center items-center mt-5 md:mt-10 px-4">
    <div className="md:w-11/12 md:flex ">
        
        <div className="flex-1 flex-column ">
            <div className="mt-2 p-1">
                <div className="flex items-center">
                <MdOutlineHealthAndSafety size={35} className='text-green-500'/>
                <h2 className='md:text-2xl font-bold  text-xl text-accent'>Healthcare Services</h2>
                </div>
                <p className='px-4 py-2 md:text-lg font-normal text-gray-600'>Find contact details for local doctors, hospitals, clinics, and pharmacies to ensure your health is always a priority.</p>
            </div>
            <div className="md:mt-40 p-2 mt-3">

                <div className="flex items-center ">
                <MdEmergencyShare size={35} className='text-red-500'/>
                <h2 className='md:text-2xl text-xl font-bold  text-accent'>Emergency Services</h2>
                </div>
                <p className='px-4 py-2 md:text-lg font-normal text-gray-600'>Access critical emergency contact numbers, including ambulance services, police, and fire departments, at your fingertips.</p>
            </div>
        </div>

        <div className="flex-1 flex items-center justify-center my-2">
            <img src={logo} alt="" className='md:w-3/6 p-4 rounded-xl md:hidden' />
            <img src={logo} alt="" className='md:w-3/6 rounded-lg hidden md:block' />
        </div>
        <div className="flex-1">
        <div className="mt-3 p-1">
        <div className="flex items-center">
                <SiMusicbrainz size={35} className='text-blue-500'/>
                <h2 className='md:text-2xl text-xl font-bold p-1 text-accent'>Educational Resources</h2>
                </div>
                <p className='px-4 py-2  md:text-lg font-normal text-gray-600'>Access critical emergency contact numbers, including ambulance services, police, and fire departments, at your fingertips.</p>
            </div>
            <div className="md:mt-40 mt-5 p-2">
            <div className="flex items-center">
                <MdSupportAgent size={35} className='text-pink-600'/>
                <h2 className='text-2xl font-bold  text-accent'>Community Support</h2>
                </div>
                <p className='px-4 py-2  text-lg font-normal text-gray-600'>Connect with local community support organizations and initiatives designed to assist you in times of need.</p>
            </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Services