import React from 'react'
import {Hero} from './Hero'
import { CTA } from './CTA'
import { Experience } from './Experience'
import { Clients } from './Clients'
import { Contact } from './Contact'

export const Body = () => {
    return (
        <div>
            <Hero />
            <CTA />
            <Experience />
            <Clients />
            <Contact />
        </div>
    )
}
