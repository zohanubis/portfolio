'use client';

import { motion } from 'framer-motion';

interface TabButtonProps {
  tab: string;
  activeTab: string | null;
  onClick: () => void;
  isDarkMode: boolean;
}

const TabButton = ({ tab, activeTab, onClick, isDarkMode }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`relative text-lg pb-2 transition-colors duration-300 ${
      activeTab === tab
        ? isDarkMode
          ? 'text-gray-100'
          : 'text-black'
        : isDarkMode
        ? 'text-gray-500 hover:text-gray-300'
        : 'text-gray-700 hover:text-gray-500'
    }`}
    aria-label={`Switch to ${tab} tab`}
  >
    {tab.charAt(0).toUpperCase() + tab.slice(1)}
    {activeTab === tab && (
      <motion.div
        layoutId="tab-indicator"
        className={`absolute left-0 bottom-0 h-[3px] w-full rounded ${
          isDarkMode ? 'bg-gray-100' : 'bg-black'
        }`}
      />
    )}
  </button>
);

export default TabButton;
