import React from 'react';
import './ButtonStyles.css';



const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-black text-white">
      <div className="text-2xl font-bold text-amber-50">
      <img 
    src="./photos/walter.png" 
    alt="Hero" 
    className="w-30 translate-y-4 "
  />


      </div>

      
      <nav className="nav-links space-x-6 translate-y-1 flex">
        
    <a href="#home" className="hover:text-blue-500">Home</a>
    <a href="#about" className="hover:text-blue-500">About</a>
    <a href="#projects" className="hover:text-blue-500">Projects</a>
    <a href="#contact" className="hover:text-blue-500">Contact</a>
  </nav>

    </header>
  );
  
};

export default Header
