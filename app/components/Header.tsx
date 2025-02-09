import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <Image src={assets.profile_img} alt="Profile Image" className="rounded-full w-32" />

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Zohanubis
        <Image src={assets.hand_icon} alt="Wave Icon" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Fullstack Web Developer</h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        I'm a web developer with strong skills in both Frontend and Backend, specializing in
        building modern, high-performance, and secure web applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Right Arrow" className="w-4" />
        </Link>

        <a
          href="/Web_Developer_Zohanubis.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          aria-label="Download My Resume"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
        </a>
      </div>
    </div>
  )
}

export default Header
