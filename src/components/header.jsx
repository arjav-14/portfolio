import React from 'react';
import Image from 'next/image';

export const Header = ({ onAboutClick, onProjectsClick, onSkillsClick, onContactClick }) => {
  return (
    <div className="bg-white">
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-serif text-gray-900">Arjav Badjate</span>
          </a>
          
          <div className="flex md:hidden">
            <button type="button" className="p-2 text-gray-600 hover:text-gray-900">
              <span className="sr-only">Open main menu</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                aria-hidden="true" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <button onClick={onAboutClick} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              About
            </button>
            <button onClick={onProjectsClick} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Projects
            </button>
            <button onClick={onSkillsClick} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Skills
            </button>
            <button onClick={onContactClick} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contact
            </button>
            <a href="/resume" className="text-sm font-medium px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors">
              Resume
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;