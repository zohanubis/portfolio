import  { StaticImageData } from 'next/image';
export type TechnologyItem = { name: string; image: StaticImageData };

export interface Experience {
  id: string;
  date: string;
  icon: React.ReactNode;
  title: string;
  location: string;
  description: string;
  technologies?: Partial<{
    frontend: TechnologyItem[];
    backend: TechnologyItem[];
    database: TechnologyItem[];
    messaging: TechnologyItem[];
    storage: TechnologyItem[];
    devops: TechnologyItem[];
    authentication: TechnologyItem[];
    other: TechnologyItem[];
  }>;
  responsibilities?: Partial<{
    frontend: string[];
    backend: string[];
    devops: string[];
  }>;
}
