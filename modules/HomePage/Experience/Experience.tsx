'use client';

import SectionHeading from '@/components/SectionHeading';
import { experienceData } from '@/assets/assets';
import React, { useState, useMemo } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceItem from './ExperienceItem';
import { motion } from 'framer-motion';

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Tối ưu màu lineColor bằng useMemo để tránh re-render không cần thiết
  const lineColor = useMemo(() => (isDarkMode ? '#4B5563' : '#E5E7EB'), [isDarkMode]);

  return (
    <motion.section
      id="experience"
      className="dark:bg-transparent py-20 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Tiêu đề */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeading>My Work</SectionHeading>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <VerticalTimeline lineColor={lineColor} animate={true}>
          {experienceData.map((exp, index) => (
            <ExperienceItem
              key={index}
              exp={exp}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.section>
  );
}
