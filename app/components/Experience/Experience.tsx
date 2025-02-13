import SectionHeading from "@/app/components/SectionHeading";
import { experienceData } from "@/assets/assets";
import React, { useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section 
      id="experience" 
      className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>My Experience</SectionHeading>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        //viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <VerticalTimeline lineColor="" animate={true}>
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