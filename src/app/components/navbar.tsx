
'use client';

import Link from 'next/link';
import React, { useState} from 'react';
;
import Image from 'next/legacy/image';


const Navbar = () => {
  

  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
 


  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);}


  // const handleSearch = (event) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
    
  //   if (value) {
  //     const results = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
  //     setFilteredResults(results);
  //   } else {
  //     setFilteredResults([]);
  //   }
  // };




  return (

<nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">
          <Link href="/"><Image src="/urminelogo-negate.webp" height={20} width={100} alt={""}/></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Home</Link>
          <Link href="/#about" className="text-white hover:text-red-500 px-3 py-2 rounded-md">About</Link>
          <Link href="/#solution" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Services</Link>
          <Link href="/#contact" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Contact</Link>
          <Link href="/careers" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Careers</Link>
      
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black space-y-4 p-4`}>
      <Link href="/" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Home</Link>
          <Link href="/#about" className="text-white hover:text-red-500 px-3 py-2 rounded-md">About</Link>
          <Link href="/#solution" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Services</Link>
          <Link href="/#contact" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Contact</Link>
          <Link href="/careers" className="text-white hover:text-red-500 px-3 py-2 rounded-md">Careers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
