'use client'
import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { Project } from '@/app/interfaces/project.interface'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div id="mywork" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Tiêu đề */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My latest work
      </motion.h2>

      {/* Mô tả */}
      <motion.p
        className="mx-auto max-w-2xl mt-5 mb-12 text-center font-Ovo dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I`m a web developer with a strong foundation in both Frontend and Backend development...
      </motion.p>

      {/* Danh sách dự án */}
      <motion.div
        className="grid grid-cols-auto gap-5 my-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {workData.map((project: Project, index: number) => ( 
  <motion.div
    key={index}
    style={{ backgroundImage: `url(${project.bgImage})` }}
    className="aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative group cursor-pointer"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    {/* Card hiển thị thông tin */}
    <motion.div
      className="bg-white dark:bg-gray-900 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between 
      group-hover:bottom-7 duration-500 shadow-md dark:shadow-lg"
    >
      <div className="w-10/12">
        <h2 className="font-semibold dark:text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
          {project.title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
          {project.description}
        </p>
      </div>
      {/* Vùng chứa icon send */}
      <motion.div
        className="border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] 
        dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 dark:group-hover:bg-lime-500 transition duration-500"
        whileHover={{ rotate: 15 }}
      >
        <Image
          src={isDarkMode ? assets.send_icon_dark : assets.send_icon}
          alt="send icon"
          className="w-5"
        />
      </motion.div>
    </motion.div>
  </motion.div>
))}

      </motion.div>
    </div>
  )
}

export default Work
