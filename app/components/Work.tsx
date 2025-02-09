import React from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';
import { Project } from '@/app/interfaces/project.interface'; // Import interface

const Work: React.FC = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

      <p className='mx-auto max-w-2xl mt-5 mb-12 text-center font-Ovo'>
        I'm a web developer with a strong foundation in both Frontend and Backend development...
      </p>

      <div className='grid grid-cols-auto gap-5 my-10'>
        {workData.map((project: Project, index: number) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className='aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative group cursor-pointer'
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between group-hover:bottom-7 duration-500'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
