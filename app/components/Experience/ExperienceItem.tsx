import { memo, useMemo } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TechList from "./TechList";
import { ExperienceItemProps } from "@/app/interfaces/experienceItemProps.interface";

const ExperienceItem = memo(({ exp, isHovered, onHover, index, isDarkMode }: ExperienceItemProps) => {
  const contentBg = isHovered ? "#1f2937" : "#f3f4f6";
  const contentColor = isHovered ? "#e5e7eb" : "#374151";
  const borderColor = isHovered ? "#1f2937" : "#f3f4f6";

  const contentStyle = useMemo(() => ({
    background: contentBg,
    color: contentColor,
    transition: "all 0.3s ease",
    borderRadius: "10px",
    boxShadow: isHovered
      ? "0px 4px 10px rgba(255, 255, 255, 0.2)"
      : "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
    opacity: isHovered ? 1 : 0.9,
  }), [isHovered, contentBg, contentColor]);

  const iconStyle = useMemo(() => ({
    background: isDarkMode ? "#111827" : "#e5e7eb",
    color: isDarkMode ? "#f3f4f6" : "#374151",
    transition: "background 0.3s ease, color 0.3s ease",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
  }), [isDarkMode]);
  const renderResponsibilities = (title: string, items?: string[], icon?: string) => (
    Array.isArray(items) && items.length > 0 && (
      <>
        <li className="font-semibold mt-2">{icon} <span className="sr-only">{title} Tasks:</span> {title}:</li>
        {items.map((task, i) => (
          <li key={`${title.toLowerCase()}-${i}`} className="opacity-80">🔹 {task}</li>
        ))}
      </>
    )
  );
  return (
    <article 
      onMouseEnter={() => onHover(index)} 
      onMouseLeave={() => onHover(null)}
      itemScope 
      itemType="https://schema.org/JobPosting"
      aria-label={`Experience at ${exp.title}`}
      id="mywork" className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={{ borderRight: `7px solid ${borderColor}` }}
        date={exp.date}
        position={index % 2 === 0 ? "left" : "right"}
        iconStyle={iconStyle}
        icon={exp.icon}
      >
        <h2 itemProp="title" className="text-lg font-semibold">{exp.title}</h2>
        <h3 itemProp="addressLocality" className="text-sm font-medium opacity-80">{exp.location}</h3>
        <p itemProp="description" className="opacity-90">{exp.description}</p>
        {isHovered && (
          <section 
            className="mt-4 p-3 rounded-lg bg-gray-800 text-white shadow-md transition-all duration-300" 
            aria-label="Technologies Used"
          >
            {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
              <TechList title="Technologies" items={exp.technologies} />
            )}
            <div>
              <h4 className="font-semibold">Responsibilities:</h4>
              <ul className="list-none list-inside text-sm mt-1">
                {renderResponsibilities("Frontend", exp.responsibilities?.frontend, "🎨")}
                {renderResponsibilities("Backend", exp.responsibilities?.backend, "🛠")}
                {renderResponsibilities("DevOps", exp.responsibilities?.devops, "🚀")}
              </ul>
            </div>
          </section>
        )}
      </VerticalTimelineElement>
    </article>
  );
});

ExperienceItem.displayName = "ExperienceItem";
export default ExperienceItem;
