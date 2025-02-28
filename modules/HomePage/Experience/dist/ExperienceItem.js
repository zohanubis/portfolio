'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
var react_redux_1 = require("react-redux");
var tabSlice_1 = require("@/redux/slices/tabSlice");
var TabButton_1 = require("./TabButton");
var ExperienceContent_1 = require("./ExperienceContent");
var TABS = ['description', 'technologies', 'responsibilities'];
var ExperienceItem = react_1.memo(function (_a) {
    var _b;
    var exp = _a.exp, onHover = _a.onHover, index = _a.index, isDarkMode = _a.isDarkMode;
    var dispatch = react_redux_1.useDispatch();
    var activeTab = (_b = react_redux_1.useSelector(function (state) { return state.tabs.activeTabs[index]; })) !== null && _b !== void 0 ? _b : null;
    var isActive = react_redux_1.useSelector(function (state) { return state.tabs.activeTimeline; }) === index;
    var handleTabClick = react_1.useCallback(function (tab) {
        dispatch(tabSlice_1.setActiveTimeline(index));
        dispatch(tabSlice_1.setActiveTab({ index: index, tab: activeTab === tab ? null : tab }));
    }, [dispatch, index, activeTab]);
    var borderColor = isDarkMode ? '#ccc' : '#444';
    return (React.createElement("article", { id: "mywork", onMouseEnter: function () { return onHover === null || onHover === void 0 ? void 0 : onHover(index); }, onMouseLeave: function () { return onHover === null || onHover === void 0 ? void 0 : onHover(null); }, className: "w-full px-6 md:px-[10%] py-10" },
        React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { contentStyle: {
                background: 'transparent',
                boxShadow: 'none',
                border: "1px solid " + borderColor,
                textAlign: 'left'
            }, contentArrowStyle: { borderRight: "0.4rem solid " + borderColor }, date: exp.date, position: index % 2 === 0 ? 'left' : 'right', icon: exp.icon, iconStyle: {
                background: isDarkMode ? '#201E43' : '#fff',
                color: isDarkMode ? '#fff' : '#000'
            } },
            React.createElement("h2", { className: "text-xl md:text-xl font-bold " + (isDarkMode ? 'text-white' : 'text-black') }, exp.title),
            React.createElement("h3", { className: "text-sm md:text-base opacity-80 font-Ovo " + (isDarkMode ? 'text-gray-300' : 'text-gray-700') }, exp.location),
            React.createElement("div", { className: "flex gap-6 my-4 border-b border-gray-500 font-Ovo" }, TABS.map(function (tab) { return (React.createElement(TabButton_1["default"], { key: tab, tab: tab, activeTab: activeTab, onClick: function () { return handleTabClick(tab); }, isDarkMode: isDarkMode })); })),
            React.createElement(ExperienceContent_1["default"], { activeTab: activeTab, exp: exp, isActive: isActive, isDarkMode: isDarkMode }))));
});
ExperienceItem.displayName = 'ExperienceItem';
exports["default"] = ExperienceItem;
