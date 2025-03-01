import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
  isDarkMode?: boolean;
}

const getRotationTransition = (duration: number, from: number, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  isDarkMode = false,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  }, [spinDuration, controls, onHover, text, currentRotation]);

  const handleHoverStart = () => {
    if (!onHover) return;
    const hoverSpeeds = {
      slowDown: spinDuration * 2,
      speedUp: spinDuration / 4,
      pause: Infinity,
      goBonkers: spinDuration / 20,
    };

    controls.start({
      rotate: currentRotation + 360,
      scale: onHover === 'goBonkers' ? 0.8 : 1,
      transition: getTransition(hoverSpeeds[onHover], currentRotation),
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`relative mx-auto rounded-full w-[200px] h-[200px] font-black text-center cursor-pointer flex items-center justify-center ${
        isDarkMode ? 'text-white' : 'text-black'
      } ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation((prev) => Number(latest.rotate) || prev)}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i;
        const radius = 80; // Bán kính vòng tròn chữ
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <span
            key={i}
            className="absolute text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform: `translate(${x}px, ${y}px) rotate(${angle}deg)` }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
