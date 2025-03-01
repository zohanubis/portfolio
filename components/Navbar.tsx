'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const menuItems = ['Home', 'About me', 'Services', 'My Work'];

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Gradient */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar chính */}
      <nav
        className={`w-full flex justify-between items-center py-5 px-10 fixed top-0 z-50
        ${
          isScroll
            ? ' bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-hidden dark:shadow-white/20'
            : ''
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo-personal"
            className="w-48 cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Menu Desktop */}
        <ul
          className={`hidden md:flex space-x-10 items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${
            isScroll
              ? ''
              : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className="font-Ovo" href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Nút chuyển đổi theme + Menu Mobile */}
        <div className="flex items-center gap-4">
          {/* Nút thay đổi theme */}
          <button onClick={toggleTheme} className="cursor-pointer">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="darkmode-toggle"
              className="w-6"
              width={24}
              height={24}
            />
          </button>

          {/* Nút Contact (chỉ hiện trên Desktop) */}
          <a
            href="#contactme"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 shadow-sm border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="contact"
              className="w-3"
              width={12}
              height={12}
            />
          </a>

          {/* Nút mở menu mobile */}
          <button className="block md:hidden ml-3" onClick={() => setIsMenuOpen(true)}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <aside
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Nút đóng menu */}
        <div className="flex justify-end p-5">
          <button onClick={() => setIsMenuOpen(false)}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-6"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Danh sách menu */}
        <ul className="flex flex-col items-center gap-6 mt-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="text-lg font-Ovo"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <a href="#contactme" className="mt-4 px-6 py-2 border rounded-full dark:border-white/50">
            Contact
          </a>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
