import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactDetails } from './ContactDetails'

export const Contact = () => {
    return (
        <div className='px-10 mt-32 mb-32'>
                <div className="w-16 h-2 rounded bg-blue-700"></div>
                <h1 className="text-gray-100 text-2xl font-bold mb-6">Hire Me</h1>
                <p className='text-xl text-gray-400 w-3/4 pb-6'>Feel free to contact me through the following methods below: </p>

            <div className='flex gap-28'>
                <ContactForm />
                <ContactDetails />
            </div>
        </div>
    )
}
