'use client'
import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'framer-motion'

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div id="aboutme" className="w-full px-[12%] py-10 scroll-mt-20 dark:text-white">
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About me
      </motion.h2>

      <div className="flex flex-col lg:flex-row mt-10 items-center gap-20 my-20">
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        <div className="flex-1">
          <motion.p
            className="mb-10 max-w-2xl font-Ovo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I`m a web developer with a strong foundation in both Frontend and Backend development, specializing in
            building modern web applications with a focus on performance optimization and security. While I have
            experience across the full stack, my expertise leans more towards Frontend development.
          </motion.p>

          {/* Info Cards */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                           hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-white
                           dark:border-white/50 dark:hover:bg-darkHover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            className="my-6 text-gray-700 font-Ovo dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Tools I use
          </motion.h4>

          <motion.ul
            className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border-[0.5px] border-gray-400 rounded-lg p-2 cursor-pointer 
                           hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                           dark:border-white/50 dark:hover:bg-darkHover"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default About
