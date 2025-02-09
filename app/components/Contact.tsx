import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [result, setResult] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending....");
      const formDataObject = new FormData(event.currentTarget);
      formDataObject.append("access_key", "6faa3632-95de-458d-ba9c-ecfed9891500");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObject
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' });
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')]  bg-center bg-no-repeat bg-[length:90%_auto]">
        <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
  
        <p className='mx-auto max-w-2xl mt-5 mb-12 text-center font-Ovo'>
          If you have any questions or feedback, feel free to reach out to me. I'm always open to connecting!
        </p>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 p-3 outline-none border-[0.5px] rounded-md border-gray-400 bg-white"
            />
  
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 outline-none border-[0.5px] rounded-md border-gray-400 bg-white"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
            ></textarea>
          </div>
          <button type="submit" className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
            Submit now
            <Image src={assets.right_arrow_white} alt="submit" className='w-4' />
          </button>
          <p className='mt-4'>{result}</p>
        </form>
      </div>
    );
  };
  
  export default Contact;