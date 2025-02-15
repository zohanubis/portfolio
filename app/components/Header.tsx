'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const btnClass =
    "px-10 py-3 border rounded-full flex items-center gap-2 transition duration-300";

  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 dark:text-white"
    >
      {/* Ảnh đại diện với hiệu ứng scale */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
          width={128}
          height={128}
          priority
          unoptimized
        />
      </motion.div>

      {/* Tiêu đề với hiệu ứng fade-in */}
      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi! I`m Zohanubis
        <Image src={assets.hand_icon} alt="Wave Icon" className="w-6" />
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Fullstack Web Developer
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I`m a web developer with strong skills in both Frontend and Backend,
        specializing in building modern, high-performance, and secure web
        applications.
      </motion.p>

      {/* Nút với hiệu ứng hover scale */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-4 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#contact"
            className={`${btnClass} bg-black text-white border-white dark:bg-white dark:text-black dark:border-black`}
          >
            Contact Me
            <Image
              src={
                isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white
              }
              alt="Right Arrow"
              className="w-4"
            />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="/Web_Developer_Zohanubis.pdf"
            download
            className={`${btnClass} border-gray-500 dark:border-white bg-white text-black dark:text-black`}
            aria-label="Download My Resume"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt="Download Icon"
              className="w-4"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
