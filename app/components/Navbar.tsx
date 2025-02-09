import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar: React.FC = () => {
  // Khai báo kiểu cho useRef
  const sideMenuRef = useRef<HTMLUListElement | null>(null)

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  return (
    <>
      {/* Nền */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" width={1920} height={200} />
      </div>

      <nav className="w-full flex justify-between items-center py-5 px-10 fixed top-0 z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo-personal"
            className="w-28 cursor-pointer mr-14"
            width={112}
            height={40}
          />
        </a>
        <ul className="hidden md:flex space-x-10 items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50">
          {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((item, index) => (
            <li key={index}>
              <a className="font-Ovo" href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="menu" className="w-6" width={24} height={24} />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{' '}
            <Image src={assets.arrow_icon} alt="contact" className="w-3" width={12} height={12} />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className="w-6" width={24} height={24} />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col items-center gap-4 py-20 px-10 fixed right-[-16rem] top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500"
        >
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <Image src={assets.close_black} alt="close" className="w-5" width={20} height={20} />
          </div>
          {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((item, index) => (
            <li key={index}>
              <a
                className="font-Ovo"
                onClick={closeMenu}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
