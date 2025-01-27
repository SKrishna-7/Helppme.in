import React from 'react'
import { TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

const Support = () => {
  return (
    <div className="bg-white mt-6 pt-10 text-center">
        <p className='text-2xl text-text2 font-bold'>Stay Connected</p>
        <p className='font-semibold text-text'>Follow us on social media for updates and announcements</p>

        <div className="flex  items-center justify-center py-5">
            <a href='' className="p-2 mx-4">
                <TiSocialInstagram className='text-4xl text-red-500'/>
            </a>
            <a className="mx-3" href=''>
                <TiSocialLinkedin className=' text-blue-600' size={42} />
            </a>
            <a className="mx-3" href=''>
                <TiSocialTwitter className='' size={42}/>
            </a>
        </div>
        <p className='text-blue-900 text-normal'>Let’s work together to make Ambur a more connected and informed community!        </p>
        </div>

  )
}

export default Support