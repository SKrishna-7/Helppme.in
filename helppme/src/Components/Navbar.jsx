import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Home from './Home'
import Services from './Services'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Support from './Support'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const onToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
    <div className="font-roboto text-text w-full relative ">
    <nav className="flex justify-between items-center md:w-4/5 mx-auto p-4 z-50 md:sticky md:top-0 fixed -top-1 w-full bg-background rounded-bl-xl rounded-br-xl">

        {/* Logo */}
        <div className='flex items-center'>
          <img
            className="w-12 cursor-pointer rounded-lg"
            src={logo}
            alt="Logo"
          />
          <h5 className='px-2 text-2xl font-kanit font-semibold text-blue-600'>HelppMe</h5>
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
            isMenuOpen ? "top-16 bg-background py-5 " : "-top-96"
          } md:w-auto w-full flex items-center px-5 `}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:text-md text-center w-full font-medium">
            <li>
              <a className="hover:text-blue-500" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Action Buttons and Menu Toggle */}
        <div className="flex items-center gap-3">
          <button className="bg-blue-600 text-white md:px-2 md:py-2 rounded-lg md:text-md p-2 text-sm hover:bg-blue-500">
            Join with us
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle navigation"
            className="text-3xl cursor-pointer md:hidden"
            onClick={onToggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars/>}
          </button>
        </div>
      </nav>

     
      <div id="home">
      <Home/>
      </div>
      <div id="services">
      <Services />
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="work">
        <Work/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="support">
        <Support/>
      </div>
    </div>

    </>
  );
};

export default Navbar;
