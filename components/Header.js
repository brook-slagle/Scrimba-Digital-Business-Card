import React from 'react'

export default function Header () {
    return (
        <div className='header'>
            <h1 className='header--name'>Brook Slagle</h1>
            <h5 className='header--title'>Student | To-be Frontend Dev</h5>
            <p className='header--website'><a href='https://brookslagle.com' target="_blank">brookslagle.com</a></p>
            <div className="header--buttons">
                <a className="header--email" href='mailto:brook.slagle@trojan.dsu.edu' target="_blank">
                    <img src="./images/Mail.png"></img>
                    <p>Email</p>
                </a>
                <a className="header--linkedin" href='https://www.linkedin.com/in/brook-slagle/' target="_blank">
                    <img src="./images/linkedin.png"></img>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}