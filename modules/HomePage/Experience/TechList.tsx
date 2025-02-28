// Version: Text

// const TechList = ({ title, items }: { title: string; items: string[] }) => (
//   <div className="mb-2 font-Ovo">
//     <ul className="list-none list-inside text-sm mt-1">
//       {items.map((tech, i) => (
//         <li key={`${title}-${i}`} className="opacity-80">⚡ {tech}</li>
//       ))}
//     </ul>
//   </div>
// );

// export default TechList;

// Version: Image
// const TechList = ({ title, items }: { title: string; items: TechnologyItem[] }) => (
"use client";

import Image from "next/image";
import { TechnologyItem } from "@/interfaces/experience.interface";

const TechList = ({ title, items }: { title: string; items: TechnologyItem[] }) => (
  <div className="mb-2 font-Ovo">
    <ul className="list-none list-inside text-sm mt-1 flex flex-wrap gap-2">
      {items.map((tech, i) => (
        <li key={`${title}-${i}`} className="opacity-80 flex items-center gap-2">
          <Image src={tech.image} alt={tech.name} width={24} height={24} className="rounded" />
          {tech.name}
        </li>
      ))}
    </ul>
  </div>
);

export default TechList;

