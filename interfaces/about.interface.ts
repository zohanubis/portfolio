import { StaticImageData } from "next/image";

export interface DescriptionItem {
  icon: string | StaticImageData;
  text: string;
}

export interface InfoItem {
  icon: string | StaticImageData;
  iconDark: string | StaticImageData;
  title: string;
  description: DescriptionItem[]; // Đổi từ string sang array để chứa icon + text
}

export interface About {
  userImage: string | StaticImageData;
  infoList: InfoItem[];
  toolsData: string[];
}
