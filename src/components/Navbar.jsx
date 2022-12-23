import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border w-[100%] h-[100%] basis-1/3 rounded-lg">
        <ul>
            <li><Link to="/">Personal info</Link></li>
            <li><Link to="selectplan">Select Plan</Link></li>
            <li><Link to="addons">Add-ons</Link></li>
            <li><Link to="summary">Summary</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;