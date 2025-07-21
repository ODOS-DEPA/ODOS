import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavbarTH({ hideLanguageTranslator }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF200] transition-colors">
      {/* <div className="bg-[black] text-[white] text-3xl text-center place-items-center p-12">
        <p className="text-3xl">
          WE ARE COMING SOON ON <span className="text-[yellow]">1</span> MARCH
          2025
        </p>
        <p className="text-sm mt-6">This website is under maintenance!</p>
      </div> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Desktop Logo - แสดงใน tablet ขึ้นไป */}
        <img
          src="\images\Logo ODOS and KV_Monochome_Black.png"
          alt=""
          className="hidden md:block h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
        />
        
        {/* Mobile Layout - Logo ซ้าย Menu ขวา */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Mobile Logo */}
          <img
            src="\images\Logo ODOS and KV_Monochome_Black.png"
            alt=""
            className="h-12 w-12"
          />
          
          {/* Mobile Menu Button */}
          <button
            className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-600 hover:border-gray-600"
            onClick={toggleMenu}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-weird items-center">
          <div className="flex gap-3 lg:gap-4 xl:gap-6 text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px] pr-3 lg:pr-4">
            <Link to="/" className="hover:text-gray-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/InfoTH" className="hover:text-gray-600 transition-colors whitespace-nowrap">Information</Link>
            <Link to="/Check-status" className="hover:text-gray-600 transition-colors whitespace-nowrap">Check Status</Link>
            <Link to="/qa" className="hover:text-gray-600 transition-colors whitespace-nowrap">Q&A</Link>
            <Link to="/Dashboard" className="hover:text-gray-600 transition-colors whitespace-nowrap">Dashboard</Link>
            <Link to="/Announcement" className="hover:text-gray-600 transition-colors whitespace-nowrap">Announcement</Link>
          </div>
          <div className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px]">
            <Link to='/qa' className="hover:text-gray-600 transition-colors">EN</Link>
            <span className="mx-1"> | </span>
            <Link to='/qaTH' className="hover:text-gray-600 transition-colors">TH</Link>
          </div>        
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#FFF200] border-t border-gray-300`}>
        <div className="px-4 py-3 font-weird">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 text-[12px] mb-4">
            <Link 
              to="/" 
              className="hover:text-gray-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/InfoTH" 
              className="hover:text-gray-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Information
            </Link>
            <Link 
              to="/Check-status" 
              className="hover:text-gray-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Check Status
            </Link>
            <Link 
              to="/qa" 
              className="hover:text-gray-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Q&A
            </Link>
            <Link 
              to="/Dashboard" 
              className="hover:text-gray-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/Announcement" 
              className="hover:text-gray-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Announcement
            </Link>
          </div>
          
          {/* Language Switcher */}
          <div className="text-[12px] pt-3 border-t border-gray-300">
            <Link 
              to='/qa' 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              EN
            </Link>
            <span className="mx-2"> | </span>
            <Link 
              to='/qaTH' 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              TH
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTH;