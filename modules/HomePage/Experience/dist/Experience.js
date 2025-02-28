'use client';
"use strict";
exports.__esModule = true;
var SectionHeading_1 = require("@/components/SectionHeading");
var assets_1 = require("@/assets/assets");
var react_1 = require("react");
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
require("react-vertical-timeline-component/style.min.css");
var ExperienceItem_1 = require("./ExperienceItem");
var framer_motion_1 = require("framer-motion");
function Experience(_a) {
    var isDarkMode = _a.isDarkMode;
    var _b = react_1.useState(null), hoveredIndex = _b[0], setHoveredIndex = _b[1];
    // Tối ưu màu lineColor bằng useMemo để tránh re-render không cần thiết
    var lineColor = react_1.useMemo(function () { return (isDarkMode ? '#4B5563' : '#E5E7EB'); }, [isDarkMode]);
    return (react_1["default"].createElement(framer_motion_1.motion.section, { id: "experience", className: "dark:bg-transparent py-20 transition-colors duration-300", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true } },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
            react_1["default"].createElement(SectionHeading_1["default"], null, "Projects & Work History")),
        react_1["default"].createElement(framer_motion_1.motion.p, { className: "text-center max-w-3xl mx-auto mt-4", initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } }, "A look at my progression from student projects to real-world development roles."),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true } },
            react_1["default"].createElement(react_vertical_timeline_component_1.VerticalTimeline, { lineColor: lineColor, animate: true }, assets_1.experienceData.map(function (exp, index) { return (react_1["default"].createElement(ExperienceItem_1["default"], { key: index, exp: exp, isHovered: hoveredIndex === index, onHover: setHoveredIndex, index: index, isDarkMode: isDarkMode })); })))));
}
exports["default"] = Experience;
