import { StaticImageData } from "next/image";

export interface Service {
    icon: string | StaticImageData;
    title: string;
    description: string;
    link: string;
  skills: { name: string; icon: string | StaticImageData; url : string }[];
  }
  