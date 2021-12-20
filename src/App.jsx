import React from 'react'
import { Navbar } from './components/Navbar'
import { Body } from './components/Body'
import { Footer } from './components/Footer'


const App = () => {
    return (
        <div className="bg-slate-900 pb-6">
            <Navbar / >
            <Body />
            <Footer />
        </div>
    )
}

export default App
