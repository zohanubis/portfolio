'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

// React Bits
import SplitText from '@/components/reactbits/animations/SplitText';
import CircularText from '@/components/reactbits/animations/CircularText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const btnClass = 'px-10 py-3 border rounded-full flex items-center gap-2 transition duration-300';

  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Ảnh đại diện với hiệu ứng scale */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative flex justify-center items-center"
      >
        <CircularText text="ZOHANUBIS" isDarkMode={isDarkMode} />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-500 backdrop-blur-lg">
            <Image
              src={assets.profile_img}
              alt="Profile Image"
              className="object-cover w-full h-full"
              width={128}
              height={128}
              priority
              unoptimized
            />
          </div>
        </div>
      </motion.div>

      {/* Tiêu đề với hiệu ứng fade-in */}
      <motion.h3
        className={`flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi! I`m Zohanubis
        <Image src={assets.hand_icon} alt="Wave Icon" className="w-6" />
      </motion.h3>

      {/* Hiệu ứng chữ động */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <SplitText
          text="Fullstack Web Developer"
          className={`text-3xl sm:text-6xl lg:text-[66px] font-Ovo ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </motion.div>

      {/* Mô tả */}
      <motion.p
        className={`max-w-2xl mx-auto font-Ovo ${isDarkMode ? 'text-white' : 'text-black'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I`m a passionate Fullstack Web Developer specializing in Node.js, Java, C#, React.js,
        Next.js, and TypeScript. I build scalable, high-performance web applications and have
        experience with Microservices, CI/CD, and DevOps.
      </motion.p>

      {/* Nút với hiệu ứng hover scale */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#contact"
            className={`${btnClass} ${
              isDarkMode
                ? 'bg-[#B9E5E8] text-black border-black'
                : 'bg-[#134B70] text-white border-white'
            }`}
          >
            Contact Me
            <Image
              src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white}
              alt="Right Arrow"
              className="w-4"
            />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="/public/FullstackWebDeveloper_PhamHoDangHuy.pdf"
            download
            className={`${btnClass} border-gray-500 `}
            aria-label="Download My Resume"
          >
            My Resume
            <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
