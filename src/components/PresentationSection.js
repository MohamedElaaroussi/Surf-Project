import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
var PresentationSection = function () {
    return (_jsx(motion.section, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "py-16 bg-gray-100", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Notre Passion, Votre Aventure" }), _jsx("p", { className: "text-xl text-center max-w-3xl mx-auto", children: "SurfWave est votre guide ultime dans l'univers du surf. Que vous soyez d\u00E9butant ou expert, nous vous offrons les meilleures ressources pour vivre pleinement votre passion." })] }) }));
};
export default PresentationSection;
