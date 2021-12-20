import React from 'react'
import { Ellipsis } from './Ellipsis'

export const Hero = () => {
    return (
        <div className='pl-10 flex items-start gap-6 w-64'>
            <Ellipsis />
            <h1 className="text-7xl font-bold text-gray-100">Building Beautiful Web Experiences</h1>
        </div>
    )
}
