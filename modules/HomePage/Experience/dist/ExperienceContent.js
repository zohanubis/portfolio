'use client';
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var md_1 = require("react-icons/md");
var TechList_1 = require("./TechList");
var ExperienceContent = function (_a) {
    var activeTab = _a.activeTab, exp = _a.exp, isActive = _a.isActive, isDarkMode = _a.isDarkMode;
    if (!exp || !activeTab)
        return null;
    return (React.createElement(framer_motion_1.AnimatePresence, null, activeTab && isActive && (React.createElement(framer_motion_1.motion.section, { key: activeTab, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.3 }, className: "mt-4 p-4 rounded-2xl shadow-md font-Ovo " + (isDarkMode ? 'bg-[#508C9B] text-white' : 'bg-[#DFF2EB] text-black') },
        activeTab === 'description' && React.createElement("p", null, exp.description),
        activeTab === 'technologies' && exp.technologies && (React.createElement(React.Fragment, null, Object.entries(exp.technologies).map(function (_a) {
            var category = _a[0], items = _a[1];
            return (React.createElement("div", { key: category, className: "mb-2" },
                React.createElement("h4", { className: "font-Ovo font-semibold " + (isDarkMode ? 'text-white' : 'text-black') }, category.charAt(0).toUpperCase() + category.slice(1)),
                React.createElement(TechList_1["default"], { title: category, items: items })));
        }))),
        activeTab === 'responsibilities' && exp.responsibilities && (React.createElement("div", { className: "mt-4 space-y-3" }, Object.entries(exp.responsibilities).map(function (_a) {
            var category = _a[0], tasks = _a[1];
            return (React.createElement("div", { key: category },
                React.createElement("h4", { className: "text-lg font-semibold " + (isDarkMode ? 'text-white' : 'text-black') }, category.charAt(0).toUpperCase() + category.slice(1)),
                React.createElement("ul", { className: "ml-4 space-y-1 text-sm md:text-base" }, tasks.map(function (task, i) { return (React.createElement("li", { key: i, className: "flex items-center gap-2" },
                    React.createElement(md_1.MdCheckCircle, { className: "text-green-500" }),
                    task)); }))));
        })))))));
};
exports["default"] = ExperienceContent;
