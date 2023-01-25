import React, { useState } from 'react';
import "./navbar.css"
import logo from '../../assests/images/logo-white.svg'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    // using to open and close hamburger menu
    const toggleMenu = () => setIsNavExpanded(!isNavExpanded)

    return (
        <nav className="navigation">
            <div className='logo-container'>
                <img src={logo} alt='logo' />
                <p className='logo-name'> | Developers</p>
            </div>
            <button onClick={toggleMenu} className="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
            <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <ul>
                    <li>
                        <div className='dropdown-container'>
                            <button className='dropdown'>Why Marvel</button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-container">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </li>
                    <li>
                        <a href="/">Enterprise</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Sign in</a>
                    </li>
                    <li>
                        <button className='sign-up-btn'>Sign up free</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar