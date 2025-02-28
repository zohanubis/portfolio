'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'
import { Service } from '@/interfaces/services.interface'
import { motion } from 'framer-motion'

const Services = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const cardBg = useMemo(() => (isDarkMode ? 'dark:bg-[#4A628A] dark:hover:bg-[#201E43]' : 'bg-[#B9E5E8] hover:bg-[#DFF2EB]'), [isDarkMode])
  const textColor = useMemo(() => (isDarkMode ? 'text-white' : 'text-gray-700'), [isDarkMode])

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
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
        Full-stack developer specializing in high-performance, scalable, and secure web apps. Expert in Frontend, Backend, DevOps, and Security, delivering seamless digital experiences.
      </motion.p>

      {/* Danh sách dịch vụ */}
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {serviceData.map((service: Service, index: number) => (
          <motion.div
            key={index}
            className={`border-[0.5px] border-gray-300 dark:border-white/50 rounded-xl p-6 cursor-pointer duration-500 ${cardBg}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={service.icon} alt={service.title} className="w-7 mt-3" />

            {/* Tiêu đề */}
            <h3 className={`my-4 font-semibold text-lg ${textColor}`}>{service.title}</h3>

            {/* Danh sách công nghệ */}
            <div className="flex flex-wrap gap-3 mt-4">
              {service.skills.map((skill, skillIndex) => (
                <a 
                  key={skillIndex} 
                  href={skill.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-transparent rounded-lg hover:scale-110 transition duration-300"
                >
                  <Image src={skill.icon} alt={skill.name} className="w-7 h-7" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
