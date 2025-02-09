import { StaticImageData } from "next/image";

export interface InfoItem {
    icon: string |StaticImageData;
    iconDark: string;
    title: string;
    description: string;
  }
  
  export interface About {
    userImage: string;
    infoList: InfoItem[];
    toolsData: string[];
  }
  