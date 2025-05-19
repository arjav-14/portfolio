'use client';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800">
          Arjav's Portfolio
        </a>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
