export interface Experience { 
  id: string;
  date: string;
  icon: React.ReactNode;
  title: string;
  location: string;
  description: string;
  technologies?: Partial<{
    frontend: string[];
    backend: string[];
    database: string[];
    messaging: string[];
    storage: string[];
    devops: string[];
    authentication: string[];
    other: string[];
  }>;
  responsibilities?: Partial<{
    frontend: string[];
    backend: string[];
    devops: string[];
  }>;
}
