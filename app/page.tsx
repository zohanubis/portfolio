'use client';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Header from '@/components/Header';
import About from '@/modules/HomePage/About';
import Services from '@/modules/HomePage/Services';
import Contact from '@/modules/HomePage/Contact';
import Footer from '@/components/Footer';
import Experience from '@/modules/HomePage/Experience/Experience';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const getInitialDarkMode = () => {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    };

    setIsDarkMode(getInitialDarkMode());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  if (!mounted) return null;

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode}/>
        <Services isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contact isDarkMode = {isDarkMode}/>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
