import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-center text-5xl font-Ovo dark:text-white">
      {children}
    </h2>
  );
}