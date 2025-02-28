'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';
import TechList from './TechList';
import { ExperienceItemProps } from '@/interfaces/experienceItemProps.interface';

interface ExperienceContentProps {
  activeTab: string | null;
  exp: ExperienceItemProps['exp'];
  isActive: boolean;
  isDarkMode: boolean;
}

const ExperienceContent = ({ activeTab, exp, isActive, isDarkMode }: ExperienceContentProps) => {
  if (!exp || !activeTab) return null;

  return (
    <AnimatePresence>
      {activeTab && isActive && (
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`mt-4 p-4 rounded-2xl shadow-md font-Ovo ${
            isDarkMode ? 'bg-[#508C9B] text-white' : 'bg-[#DFF2EB] text-black'
          }`}
        >
          {activeTab === 'description' && <p>{exp.description}</p>}

          {activeTab === 'technologies' && exp.technologies && (
            <>
              {Object.entries(exp.technologies).map(([category, items]) => (
                <div key={category} className="mb-2">
                  <h4
                    className={`font-Ovo font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <TechList title={category} items={items} />
                </div>
              ))}
            </>
          )}

          {activeTab === 'responsibilities' && exp.responsibilities && (
            <div className="mt-4 space-y-3">
              {Object.entries(exp.responsibilities).map(([category, tasks]) => (
                <div key={category}>
                  <h4
                    className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <ul className="ml-4 space-y-1 text-sm md:text-base">
                    {tasks.map((task, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <MdCheckCircle className="text-green-500" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ExperienceContent;
