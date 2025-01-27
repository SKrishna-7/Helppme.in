import React from "react";
import bg from "../assets/map.png";
import { MdMailOutline, MdMyLocation, MdOutlineLocationCity, MdOutlineLocationOn, MdOutlineMyLocation, MdPhoneCallback } from "react-icons/md";

const Contact = () => {
  return (
    <div className="relative h-full md:p-1 pb-20  w-full mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-text bg-opacity-30"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white px-6 py-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-text">Contact Us</h1>
        <p className="text-lg md:text-xl mb-8 text-white text-center">
        We’d love to hear from you! Whether you have questions, suggestions, or feedback, feel free to reach out to us. Your input helps us improve and serve the Ambur community better.
        </p>
        
        <div className="bg-white md:w-11/12 rounded-lg p-3 opacity-90 mt-10 md:flex md:justify-around">
                <div className="flex items-center">
                    <MdMailOutline className="m-2 text-red-500 text-2xl"/>
                    <div className="">
                    <p className="text-black text-sm font-semibold"> contact@helpme.in                    </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdPhoneCallback className="m-2 text-blue-600 text-2xl"/>
                    <div className="">
                    <p className="text-black text-sm font-semibold">+91 7598527523</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdOutlineLocationOn className="m-2 text-green-300 text-2xl"/>
                    <div className="">
                    <p className="text-black text-sm font-semibold"> No 03, Vavoor Madhar Street, Ambur – 635802</p>
                    </div>
                </div>
                
        </div>
      </div>
    </div>
  );
};

export default Contact;
