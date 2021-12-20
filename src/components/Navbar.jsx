import React from 'react'

export const Navbar = () => {
    return (
        <div className="flex justify-between  px-10 py-6 mb-20">
            <h1 className="text-4xl text-gray-100">Jonathan.Doe</h1>
            <div className="w-1/4 flex justify-between items-center">
                <p className="text-gray-200">Home</p>
                <p className="text-gray-200">My Work</p>
                <p className="text-gray-200">Clients</p>
                <button className="text-gray-200 px-4 py-2 bg-blue-600 rounded">Hire Me</button>
            </div>
        </div>
    )
}
