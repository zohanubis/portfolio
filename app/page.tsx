'use client';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Header from '@/components/Header';
import About from '@/modules/HomePage/About';
import Services from '@/modules/HomePage/Services';
// import Work from '@/app/components/Work';
import Contact from '@/modules/HomePage/Contact';
import Footer from '@/components/Footer';
import Experience from '@/modules/HomePage/Experience/Experience';
// import SplashCursor from '@/components/reactbits/animations/SplashCursor';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Check nếu component đã mount
  useEffect(() => {
    // Chỉ chạy trên client
    const getInitialDarkMode = () => {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    };

    setIsDarkMode(getInitialDarkMode());
    setMounted(true); // Đánh dấu đã mount
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : '');
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null; // Tránh lỗi hydration

  return (
    <div>
      {/* <SplashCursor/> */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <Header isDarkMode={isDarkMode} />
        <About />
        <Services />
        <Experience isDarkMode={isDarkMode} />
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
