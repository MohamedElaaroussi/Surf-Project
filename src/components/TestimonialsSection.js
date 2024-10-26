import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
var TestimonialsSection = function () {
    var testimonials = [
        { name: "Sophie", text: "SurfWave a changé ma vie! Grâce à leurs cours, j'ai pris confiance sur ma planche." },
        { name: "Thomas", text: "Les voyages organisés par SurfWave sont incroyables. J'ai découvert des spots de rêve!" }
    ];
    return (_jsx(motion.section, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "py-16 bg-gray-100", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "T\u00E9moignages de Surfeurs" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: testimonials.map(function (testimonial, index) { return (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: index * 0.2 }, viewport: { once: true }, className: "bg-white p-6 rounded-lg shadow-lg", children: [_jsxs("p", { className: "text-lg mb-4", children: ["\"", testimonial.text, "\""] }), _jsxs("p", { className: "font-bold", children: ["- ", testimonial.name] })] }, testimonial.name)); }) })] }) }));
};
export default TestimonialsSection;
