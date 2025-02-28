'use client';
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var TabButton = function (_a) {
    var tab = _a.tab, activeTab = _a.activeTab, onClick = _a.onClick, isDarkMode = _a.isDarkMode;
    return (React.createElement("button", { onClick: onClick, className: "relative text-lg pb-2 transition-colors duration-300 " + (activeTab === tab
            ? isDarkMode
                ? 'text-gray-100'
                : 'text-black'
            : isDarkMode
                ? 'text-gray-500 hover:text-gray-300'
                : 'text-gray-700 hover:text-gray-500'), "aria-label": "Switch to " + tab + " tab" },
        tab.charAt(0).toUpperCase() + tab.slice(1),
        activeTab === tab && (React.createElement(framer_motion_1.motion.div, { layoutId: "tab-indicator", className: "absolute left-0 bottom-0 h-[3px] w-full rounded " + (isDarkMode ? 'bg-gray-100' : 'bg-black') }))));
};
exports["default"] = TabButton;
