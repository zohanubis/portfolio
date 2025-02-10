'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = ({ isDarkMode} : {isDarkMode : boolean}) => {
  return (
    <div className="mt-20 bg-white dark:bg-transparent text-black dark:text-gray-300">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark: assets.logo} alt="logo" className="w-48 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6" />
          <span>zohanubis.work@gmail.com</span>
        </div>
      </div>

      <div className="text-center mt-12 sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] py-6">
        <p>© 2025 Zohanubis. All rights reserved</p>
        <ul className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/zohanubis" target="_blank" className="hover:text-gray-500 dark:hover:text-gray-400">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zohanubis/" target="_blank" className="hover:text-gray-500 dark:hover:text-gray-400">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/danghuyy2509/" target="_blank" className="hover:text-gray-500 dark:hover:text-gray-400">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
