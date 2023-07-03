import React from 'react'
import '../style/Navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'

const Navbar = () => {
    return (
        
            <div className='Nav-Container'>
                <div className="left-nav">
                    <img src={logo} alt="logo" />
                    <ul className='options'>
                        <li>Home </li>
                        <li>About </li>
                        <li>Experience </li>
                        <li>Projects </li>
                        <li>Contact </li>
                    </ul>
                </div>

                <div className="right-nav">
                <img src={search} alt="search icon" />
                    <button className="hire">hire now</button>
                </div>
            </div>
      

    )
}

export default Navbar