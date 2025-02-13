import { Experience } from './experience.interface';

export interface ExperienceItemProps {
    exp: Experience;
    isHovered: boolean;
    onHover: (index: number | null) => void;
    index: number;
    isDarkMode: boolean;
  }