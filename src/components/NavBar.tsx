import React from 'react'



export const NavBar = () => {
    return (
        <div>
            <span className='logo'>rudis</span>
            <ul id='nav-bar'>
                <li className='nav-link'>home</li>
                <li className='nav-link'>about</li>
                <li className='nav-link'>projects</li>
            </ul>
            <ul className='socials'>
                <li className='social-link'>github</li>
                <li className='social-link'>linkedin</li>
                <li><button className='contact-button'></button></li>
            </ul>
        </div>
    )
}

