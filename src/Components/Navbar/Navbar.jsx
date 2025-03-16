import React from 'react'
import './Navbar.css'
import Link from './Link'
import links from './navbar_var'
import logo from '../../assets/da_logo.svg'
import search_icon from '../../assets/magnifying-glass.png'
import buttons from '../../Variables/Navbar/Header_buttons'
import Button from './Button'
import { ConnectButton } from '../../App'


function createLinks(link) {
    return (
        <Link
            key={link.id}
            link={link.url}
            name={link.name} 
        />
    );
}

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="something" className='logo' />
        <ul>
            {links.map(createLinks)}
        </ul>

        <div className="search-box">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="search icon" />
        </div>
        <ConnectButton />
    </div>
  )
}

export default Navbar