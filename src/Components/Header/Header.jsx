import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/"  className={({isActive})=>`${isActive ? "text-orange-600":"text-white"} font-bold text-lg hover:text-orange-400`}>Home</NavLink></li>
            <li><NavLink to="/about"  className={({isActive})=>`${isActive ? "text-orange-600":"text-white"} font-bold text-lg hover:text-orange-400`}>About</NavLink></li>
            <li><NavLink to="/contact"  className={({isActive})=>`${isActive ? "text-orange-600":"text-white"} font-bold text-lg hover:text-orange-400`}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
