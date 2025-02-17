'use client';
import { memo, useCallback, useMemo } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";
import TechList from "./TechList";
import { ExperienceItemProps } from "@/app/interfaces/experienceItemProps.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { setActiveTab, setActiveTimeline } from "@/app/redux/slices/tabSlice";

const TABS = ["description", "technologies", "responsibilities"] as const;

const ExperienceItem = memo(({ exp, onHover, index, isDarkMode }: ExperienceItemProps) => {
  const dispatch = useDispatch();
  const { activeTabs, activeTimeline } = useSelector((state: RootState) => state.tabs);
  const isActive = activeTimeline === index;
  const activeTab = activeTabs[index] ?? null;

  const handleTabClick = useCallback(
    (tab: string) => {
      dispatch(setActiveTimeline(index));
      dispatch(setActiveTab({ index, tab: activeTab === tab ? null : tab }));
    },
    [dispatch, index, activeTab]
  );

  const renderTabContent = useMemo(() => {
    if (!exp || !activeTab) return null;

    return (
      <motion.section
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`mt-4 p-4 rounded-2xl shadow-md font-Ovo ${isDarkMode ? "bg-[#508C9B] text-white" : "bg-[#DFF2EB] text-black"}`}
      >
        {activeTab === "description" && <p>{exp.description}</p>}
        {activeTab === "technologies" && exp.technologies && (
          Object.entries(exp.technologies).map(([category, items]) => (
            <div key={category} className="mb-2">
              <h4 className={`font-Ovo font-semibold ${isDarkMode ? "text-white" : "text-black" }`}>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <TechList title={category} items={Array.isArray(items) ? items : [items]} />
            </div>
          ))
        )}
        {activeTab === "responsibilities" && exp.responsibilities && (
          <ul>
            {Object.entries(exp.responsibilities).map(([category, tasks]) => (
              <li key={category}>✅ {tasks.join(", ")}</li>
            ))}
          </ul>
        )}
      </motion.section>
    );
  }, [activeTab, exp, isDarkMode]);

  return (
    <article
      id="mywork"
      onMouseEnter={() => onHover?.(index)}
      onMouseLeave={() => onHover?.(null)}
      className="w-full px-6 md:px-[10%] py-10"
    >
      <VerticalTimelineElement
        contentStyle={{ 
          background: isDarkMode ? "transparent" : "transparent", 
          boxShadow: "none",
          border: "1px solid",
          borderColor: isDarkMode ? "#ccc" : "#444",  
          textAlign: "left" } }
        contentArrowStyle={{ borderRight: `0.4rem solid ${isDarkMode ? "#ccc" : "#444"}` }}
        date={exp.date}
        position={index % 2 === 0 ? "left" : "right"}
        icon={exp.icon}
        iconStyle={{ background: isDarkMode ? "#201E43" : "#fff", color: isDarkMode ? "#fff" : "#000" }}
      >
        <h2 className={`text-xl md:text-xl font-bold  ${isDarkMode ? "text-white !important " : "text-black "}`}>{exp.title}</h2>
        <h3 className={`text-sm md:text-base opacity-80 font-Ovo ${isDarkMode ? "text-white" : "text-gray-600"}`}>{exp.location}</h3>

        <div className="flex gap-6 my-4 border-b border-gray-500 font-Ovo">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative text-lg pb-2 transition-colors duration-300 ${
                activeTab === tab 
                  ? isDarkMode 
                    ? "text-gray-100"  
                    : "text-black"   
                  : isDarkMode 
                    ? "text-gray-500 hover:text-gray-300"  
                    : "text-gray-700 hover:text-gray-500"     
              }`}
              
              aria-label={`Switch to ${tab} tab`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div layoutId={`tab-indicator-${index}`} className="absolute left-0 bottom-0 h-[3px] w-full bg-white rounded" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>{activeTab && isActive && renderTabContent}</AnimatePresence>
      </VerticalTimelineElement>
    </article>
  );
});

ExperienceItem.displayName = "ExperienceItem";
export default ExperienceItem;
