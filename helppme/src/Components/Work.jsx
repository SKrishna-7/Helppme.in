import React from 'react'
import { GrServices } from 'react-icons/gr'
import { MdManageSearch, MdOutlineConnectWithoutContact } from 'react-icons/md'

const Work = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-5">
        <h2 className='text-3xl font-bold mt-10 py-1'>How It Works</h2>
        <p className='font-semibold md:text-lg text-sm text-blue-500 '>Using HelpMe.in is simple, fast, and hassle-free.</p>

        <div className="md:flex md:w-11/12  mt-5  px-2">
            <div className="md:w-4/6 bg-white rounded-lg p-3 flex flex-col items-center m-3 ">
                <div className="p-3 border-4 border-blue-200 rounded-full my-2">
                    <MdManageSearch className='text-5xl text-blue-900'/>
                    </div>
                <div className="p-2">
                    <p className='text-center text-xl font-bold text-text2'>Visit Our Paltform</p>
                    <p className='text-center text-base text-gray-600 '>Open HelpMe.in on your mobile, tablet, or desktop—no login or signup required.</p>
                </div>
            </div>
            <div className="md:w-4/6  bg-white rounded-lg p-3 flex flex-col items-center m-3">
                <div className="p-4 border-4 border-blue-200 rounded-full my-2">
                    <GrServices className='text-4xl text-blue-900'/>
                    </div>
                <div className="p-2">
                    <p className='text-center text-xl font-bold text-text2'>Search for Services
                    </p>
                    <p className='text-center text-base text-gray-500'>Browse or search for the contact information you need, whether it’s healthcare, emergency services, education, or community support.</p>
                </div>
            </div>
            <div className="md:w-4/6  bg-white rounded-lg p-3 flex flex-col items-center m-3">
                <div className="p-2 border-4 border-blue-200 rounded-full my-2">
                    <MdOutlineConnectWithoutContact className='text-5xl text-blue-900'/>
                    </div>
                <div className="p-2">
                    <p className='text-center text-xl font-bold text-text2'>Get Connected</p>
                    <p className='text-center text-base text-gray-500 '>Access accurate and reliable contact details instantly and reach out for the help or support you need.</p>
                </div>
            </div>
        </div>

        <p className='md:text-xl text-blue-500 font-bold tracking-wider p-5 '>It’s   <b className='text-blue-900'>Free</b> and <b className='text-blue-900'> Available 24/7 </b>for everyone!</p>
    </div>
  )
}

export default Work