import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
var NewsletterSection = function () {
    return (_jsx(motion.section, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "py-16 bg-blue-600 text-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Restez inform\u00E9" }), _jsx("div", { className: "max-w-2xl mx-auto", children: _jsxs("form", { className: "flex flex-col md:flex-row gap-4", children: [_jsx("input", { type: "email", placeholder: "Votre adresse e-mail", className: "flex-grow p-3 rounded-full text-black" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "bg-white text-blue-600 font-bold py-3 px-6 rounded-full", children: "S'abonner" })] }) })] }) }));
};
export default NewsletterSection;
