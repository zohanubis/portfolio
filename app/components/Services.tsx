'use client'
import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import { Service } from '@/app/interfaces/services.interface'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 dark:text-white">
      {/* Tiêu đề */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What I offer
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      {/* Mô tả */}
      <motion.p
        className="mx-auto max-w-2xl mt-5 mb-12 text-center font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        As a full-stack web developer, I specialize in crafting high-performance, scalable, and secure web applications. From designing intuitive user interfaces to optimizing backend systems, I ensure seamless digital experiences. My expertise spans Frontend, Backend, DevOps, and Security, allowing me to build robust and efficient solutions tailored to your needs.
      </motion.p>

      {/* Danh sách dịch vụ */}
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {serviceData.map((service: Service, index: number) => (
          <motion.div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                      hover:bg-lightHover duration-500 dark:border-white/50 dark:hover:bg-darkHover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={service.icon} alt={service.title} className="w-7 mt-3" />
            <h3 className="my-4 font-semibold text-lg text-gray-700 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-gray-300">{service.description}</p>
            <a
              href={service.link}
              className="flex items-center text-blue-500 font-semibold hover:text-blue-700 gap-2 dark:text-blue-400 dark:hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more <Image src={assets.right_arrow} alt="right arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
