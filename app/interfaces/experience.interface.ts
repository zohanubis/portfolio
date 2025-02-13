export interface Experience {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
    technologies?: string[];
    responsibilities?: {
      frontend?: string[];
      backend?: string[];
      devops?: string[];
    };
  }