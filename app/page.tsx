'use client';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
// import Work from '@/app/components/Work';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Experience from '@/app/components/Experience/Experience';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Check nếu component đã mount
  useEffect(() => {
    // Chỉ chạy trên client
    const getInitialDarkMode = () => {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services />
        <Experience isDarkMode = {isDarkMode}/>
        {/* <Work isDarkMode={isDarkMode} /> */}
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
