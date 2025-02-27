'use client'

import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [result, setResult] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending...')

    try {
      const formDataObject = new FormData(event.currentTarget)
      formDataObject.append('access_key', '6faa3632-95de-458d-ba9c-ecfed9891500')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObject,
      })

      const data = await response.json()

      if (data.success) {
        setResult('Form Submitted Successfully 🎉')
        setFormData({ name: '', email: '', message: '' })
        event.currentTarget.reset()
      } else {
        setResult('Submission Failed. Please try again.')
        console.error('Error:', data)
      }
    } catch (error) {
      setResult('Something went wrong. Please try again.')
      console.error('Error:', error)
    }
  }

  return (
    <div
      id="contactme"
      className="w-full px-[12%] py-10 scroll-mt-20  bg-center bg-no-repeat bg-[length:90%_auto] dark:bg-none"
    >
      {/* Tiêu đề */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in touch
      </motion.h2>

      {/* Mô tả */}
      <motion.p
        className="mx-auto max-w-2xl mt-5 mb-12 text-center font-Ovo text-gray-700 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        If you have any questions or feedback, feel free to reach out to me. I`m always open to connecting!
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 outline-none border rounded-md border-gray-400 bg-white dark:bg-gray-800 dark:text-white transition focus:ring-2 focus:ring-blue-400"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 outline-none border rounded-md border-gray-400 bg-white dark:bg-gray-800 dark:text-white transition focus:ring-2 focus:ring-blue-400"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        <motion.textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white transition focus:ring-2 focus:ring-blue-400"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto mt-6 hover:bg-black transition duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="submit" className="w-4 " />
        </motion.button>

        <p className="mt-4 text-center text-gray-800 dark:text-gray-300">{result}</p>
      </motion.form>
    </div>
  )
}

export default Contact
