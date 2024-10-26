import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
var PopularSpotsSection = function () {
    var spots = [
        { name: 'Aftas beach', image: 'images/aftass beach2.jpg' },
        { name: 'Lagzira beach', image: 'images/lagzira_beach2.jpg' },
        { name: 'imintarga beach', image: 'images/imintarga_beach2.jpg' }
    ];
    return (_jsx(motion.section, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Spots de Surf Populaires" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: spots.map(function (spot, index) { return (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.2 }, viewport: { once: true }, className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [_jsx("img", { src: spot.image, alt: spot.name, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: spot.name }), _jsxs("p", { children: ["D\u00E9couvrez les vagues l\u00E9gendaires de ", spot.name, "."] })] })] }, spot.name)); }) })] }) }));
};
export default PopularSpotsSection;
