import React from 'react'
import logo from './logo.svg';

function Header() {
    return (
        <div>
            <h1>To Do App</h1>
            <h4>Made with React <img src={logo} className="Header-Logo" style={{width: 22}} alt="logo" /></h4>
        </div>
    )
}

export default Header
