'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface TechProps {
  tech: {
    image: string | StaticImageData;
    name: string;
  };
  index: number;
}

const FloatingListItem: React.FC<TechProps> = ({ tech, index }) => {
  const { scrollYProgress } = useScroll();

  const floatY = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-15, 15] : [15, -15]);

  return (
    <motion.li
      className="group relative flex items-center justify-center w-12 sm:w-14 aspect-square 
                 rounded-lg p-2 cursor-pointer transition-all duration-500
                 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-500/30
                 dark:hover:shadow-gray-900/50"
      style={{ y: floatY }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={tech.image} alt={tech.name} width={40} height={40} className="sm:w-10" />
    </motion.li>
  );
};

export default FloatingListItem;
