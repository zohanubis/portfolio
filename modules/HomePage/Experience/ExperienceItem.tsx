'use client';

import { memo, useCallback } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setActiveTab, setActiveTimeline } from '@/redux/slices/tabSlice';
import TabButton from './TabButton';
import ExperienceContent from './ExperienceContent';
import { ExperienceItemProps } from '@/interfaces/experienceItemProps.interface';

const TABS = ['description', 'technologies', 'responsibilities'] as const;

const ExperienceItem = memo(({ exp, onHover, index, isDarkMode }: ExperienceItemProps) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tabs.activeTabs[index]) ?? null;
  const isActive = useSelector((state: RootState) => state.tabs.activeTimeline) === index;

  const handleTabClick = useCallback(
    (tab: string) => {
      dispatch(setActiveTimeline(index));
      dispatch(setActiveTab({ index, tab: activeTab === tab ? null : tab }));
    },
    [dispatch, index, activeTab],
  );

  const borderColor = isDarkMode ? '#ccc' : '#444';

  return (
    <article
      id="mywork"
      onMouseEnter={() => onHover?.(index)}
      onMouseLeave={() => onHover?.(null)}
      className="w-full px-6 md:px-[10%] py-10"
    >
      <VerticalTimelineElement
        contentStyle={{
          background: 'transparent',
          boxShadow: 'none',
          border: `1px solid ${borderColor}`,
          textAlign: 'left',
        }}
        contentArrowStyle={{ borderRight: `0.4rem solid ${borderColor}` }}
        date={exp.date}
        position={index % 2 === 0 ? 'left' : 'right'}
        icon={exp.icon}
        iconStyle={{
          background: isDarkMode ? '#201E43' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
        }}
      >
        <h2 className={`text-xl md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {exp.title}
        </h2>
        <h3
          className={`text-sm md:text-base opacity-80 font-Ovo ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {exp.location}
        </h3>

        {/* Tabs */}
        <div className="flex gap-6 my-4 border-b border-gray-500 font-Ovo">
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onClick={() => handleTabClick(tab)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* Nội dung của từng tab */}
        <ExperienceContent
          activeTab={activeTab}
          exp={exp}
          isActive={isActive}
          isDarkMode={isDarkMode}
        />
      </VerticalTimelineElement>
    </article>
  );
});

ExperienceItem.displayName = 'ExperienceItem';
export default ExperienceItem;
