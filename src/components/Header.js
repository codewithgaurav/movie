import React from 'react'
import { LOGO } from './utils/utilities'

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>POPULAR</li>
                    <li>NEW</li>
                    <li>ABOUT</li>
                </ul>
            </div>
        </div>
    )
}

export default Header 
