'use client'
import Header from '@/app/components/Header'
import Navbar from './components/Navbar'
import About from '@/app/components/About'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}
