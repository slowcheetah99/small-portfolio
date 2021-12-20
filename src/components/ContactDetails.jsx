import React from 'react'
import { IoLogoSkype, AiFillTwitterCircle } from './Socials'

export const ContactDetails = () => {
    return (
        <div>
            <div className='mb-16'>
                <p className='text-gray-400 text-md'>333-222-1456</p>
                <p className='text-gray-400 text-md underline underline-offset-2'>email@example.com</p>
            </div>
            <div className='flex gap-4'>
                <IoLogoSkype className="text-white h-10 w-10"/>
                <AiFillTwitterCircle className="text-white h-10 w-10"/>
            </div>
        </div>
    )
}
