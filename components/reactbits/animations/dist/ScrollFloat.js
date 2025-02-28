"use strict";
exports.__esModule = true;
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var ScrollFloat = function (_a) {
    var children = _a.children, scrollContainerRef = _a.scrollContainerRef, _b = _a.containerClassName, containerClassName = _b === void 0 ? '' : _b, _c = _a.animationDuration, animationDuration = _c === void 0 ? 1 : _c, _d = _a.ease, ease = _d === void 0 ? 'back.inOut(2)' : _d, _e = _a.scrollStart, scrollStart = _e === void 0 ? 'center bottom+=50%' : _e, _f = _a.scrollEnd, scrollEnd = _f === void 0 ? 'bottom bottom-=40%' : _f, _g = _a.stagger, stagger = _g === void 0 ? 0.2 : _g;
    var containerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var el = containerRef.current;
        if (!el)
            return;
        var scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        // Lấy tất cả các phần tử con (các item sẽ xuất hiện lần lượt)
        var items = el.children;
        gsap_1.gsap.fromTo(items, {
            willChange: 'opacity, transform',
            opacity: 0,
            yPercent: 50,
            scale: 0.8
        }, {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scale: 1,
            stagger: stagger,
            scrollTrigger: {
                trigger: el,
                scroller: scroller,
                start: scrollStart,
                end: scrollEnd,
                scrub: true
            }
        });
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);
    return (react_1["default"].createElement("div", { ref: containerRef, className: "overflow-hidden " + containerClassName }, children));
};
exports["default"] = ScrollFloat;
