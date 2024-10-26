import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
var EventsSection = function () {
    var events = [
        { name: "Championnat de Surf de Biarritz", date: "15 Août 2024" },
        { name: "Festival des Vagues de Lacanau", date: "5-7 Septembre 2024" }
    ];
    return (_jsx(motion.section, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "py-16 bg-gray-100", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center text-gray-800", children: "\u00C9v\u00E9nements \u00E0 Venir" }), _jsx("div", { className: "grid gap-6 md:grid-cols-2", children: events.map(function (event, index) { return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, viewport: { once: true }, className: "bg-white shadow-md rounded-lg overflow-hidden", children: [_jsx("div", { className: "bg-gray-50 border-b border-gray-200 p-4", children: _jsx("h3", { className: "text-xl font-semibold text-gray-800", children: event.name }) }), _jsx("div", { className: "p-4", children: _jsxs("div", { className: "flex items-center text-blue-600", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }), _jsx("span", { className: "font-medium", children: event.date })] }) })] }, event.name)); }) })] }) }));
};
export default EventsSection;
