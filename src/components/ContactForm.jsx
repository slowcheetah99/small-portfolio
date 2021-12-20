import React from 'react'

export const ContactForm = () => {
    return (
        <form className="w-1/2 flex flex-col gap-4">
            <div className='flex flex-col gap-4'>
                <label htmlFor="name" className="text-xl text-white font-bold">Name:</label>
                <input type="text" className="rounded-lg border-2 inline border-gray-400 bg-slate-800 text-md text-white px-2 py-2" id="name" />
            </div>

            <div className='flex flex-col gap-4'>
                <label htmlFor="email" className="text-xl text-white font-bold">Email:</label>
                <input type="email" className="rounded-lg border-2 inline border-gray-400 bg-slate-800 text-md text-white px-2 py-2" id="email" />
            </div>

            <div className='flex flex-col gap-4'>
                <label htmlFor="message" className="text-xl text-white font-bold">Message:</label>
                <textarea className="rounded-lg border-2 inline h-32 border-gray-400 bg-slate-800 text-md text-white px-2 py-2"></textarea>
            </div>

            <button type="submit" className="text-gray-200 px-6 py-2 bg-blue-600 rounded w-fit">Submit</button>
        </form>
    )
}
