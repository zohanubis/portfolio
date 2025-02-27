'use client';
import Image from 'next/image';
import { assets, toolsData, technologiesData } from '@/assets/assets';
import { motion } from 'framer-motion';
import FloatingListItem from '@/components/FloatingListTech';
import React from 'react';

const About = () => {
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
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About me
      </motion.h2>

      <div className="flex flex-col lg:flex-row mt-10 items-center gap-20 my-20">
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        <div className="flex-1">
          <motion.p
            className="mb-10 max-w-2xl font-Ovo text-left sm:text-justify md:text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I`m Huy, a Fullstack Web Developer and a student at Industrial University of Ho Chi
            Minh City. Passionate about building scalable web applications, I have hands-on
            experience in Java, C#, Node.js, React.js, and Next.js. I enjoy solving real-world
            problems with technology and continuously learning new tools to improve my development
            skills.
          </motion.p>

          <motion.h2
            className="my-6 text-xl font-Ovo dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Technologies
          </motion.h2>
          <motion.ul
            className="flex flex-wrap justify-start gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {technologiesData.map((tech, index) => (
              <FloatingListItem key={index} tech={tech} index={index} />
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
                className="group relative flex items-center justify-center w-12 sm:w-14 aspect-square 
                 rounded-lg p-2 cursor-pointer transition-all duration-500
                 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-500/30
                 dark:hover:shadow-gray-900/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={tool} alt="Tool" className="sm:w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
