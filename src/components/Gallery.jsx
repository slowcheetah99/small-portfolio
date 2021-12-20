import React from 'react'
import Img1 from '../img/img-1.jpg'
import Img2 from '../img/img-2.jpg'
import Img3 from '../img/img-3.jpg'
import Img4 from '../img/img-4.jpg'
import Img5 from '../img/img-5.jpg'
import Img6 from '../img/img-6.jpg'
import Img7 from '../img/img-7.jpg'
import Img8 from '../img/img-8.jpg'
import Img9 from '../img/img-9.jpg'

export const Gallery = () => {
    return (
        <div className='grid grid-rows-3 grid-cols-3 gap-3 pr-10'>
            <img src={Img1} alt="exp" className="rounded-lg" />
            <img src={Img2} alt="exp" className="rounded-lg" />
            <img src={Img3} alt="exp" className="rounded-lg" />
            <img src={Img4} alt="exp" className="rounded-lg" />
            <img src={Img5} alt="exp" className="rounded-lg" />
            <img src={Img6} alt="exp" className="rounded-lg" />
            <img src={Img7} alt="exp" className="rounded-lg" />
            <img src={Img8} alt="exp" className="rounded-lg" />
            <img src={Img9} alt="exp" className="rounded-lg" />
        </div>
    )
}
