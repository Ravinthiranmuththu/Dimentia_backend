import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="bg-custom-blue p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-4 ml-auto">
            <Link to="/home" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white">
              Add Patients
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/" className="bg-white text-custom-blue rounded-lg px-4 py-1 hover:bg-gray-300">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    );
  };

export default NavBar