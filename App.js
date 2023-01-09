import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App () {
    return (
        <div className='App'>
            <img className='portrait' src='./images/portrait-2.jpg'></img>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}