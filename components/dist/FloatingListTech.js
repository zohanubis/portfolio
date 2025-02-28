'use client';
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var FloatingListItem = function (_a) {
    var tech = _a.tech, index = _a.index;
    var scrollYProgress = framer_motion_1.useScroll().scrollYProgress;
    var floatY = framer_motion_1.useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-15, 15] : [15, -15]);
    return (React.createElement(framer_motion_1.motion.li, { className: "group relative flex items-center justify-center w-12 sm:w-14 aspect-square \r\n                 rounded-lg p-2 cursor-pointer transition-all duration-500\r\n                 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-500/30\r\n                 dark:hover:shadow-gray-900/50", style: { y: floatY }, whileHover: { scale: 1.08 }, whileTap: { scale: 0.95 } },
        React.createElement(image_1["default"], { src: tech.image, alt: tech.name, width: 40, height: 40, className: "sm:w-10" })));
};
exports["default"] = FloatingListItem;
