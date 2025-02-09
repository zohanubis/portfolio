import React from 'react';
import Image from 'next/image';
import { assets, serviceData } from '@/assets/assets';
import { Service } from '@app/interfaces/services.interface'; // Đổi từ Services → Service

const Services: React.FC = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="mx-auto max-w-2xl mt-5 mb-12 text-center font-Ovo">
        I'm a web developer with a strong foundation in both Frontend and Backend development, specializing in building modern web applications with a focus on performance optimization and security. While I have experience across the full stack, my expertise leans more towards Frontend development.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map((service: Service, index: number) => (
          <div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
          >
            <Image src={service.icon} alt={service.title} className="w-7 mt-3" />
            <h3 className="my-4 font-semibold text-lg text-gray-700">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-5">{service.description}</p>
            <a
              href={service.link}
              className="text-blue-500 font-semibold hover:text-blue-700 gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more <Image src={assets.right_arrow} alt="right arrow" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
