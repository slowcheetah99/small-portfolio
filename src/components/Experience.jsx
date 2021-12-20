import React from 'react'
import { Gallery } from './Gallery'

export const Experience = () => {
    return (
        <div className='pl-10 mt-64'>
            <div className="w-16 h-2 rounded bg-blue-700"></div>
            <h1 className="text-gray-100 text-2xl font-bold mb-6">My Work</h1>
            <p className='text-xl text-gray-400 w-3/4 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda quaerat magni aut illum at, aliquam suscipit ullam voluptas animi.</p>
            <Gallery />
        </div>
    )
}
