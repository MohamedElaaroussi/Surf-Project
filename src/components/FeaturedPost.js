import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
var FeaturedPost = function (_a) {
    var title = _a.title, excerpt = _a.excerpt, image = _a.image;
    return (_jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden", children: [_jsx("img", { src: image, alt: title, className: "w-full h-64 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: title }), _jsx("p", { className: "text-gray-700 mb-4", children: excerpt }), _jsx(Link, { to: "/blog", className: "inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300", children: "Lire plus" })] })] }));
};
export default FeaturedPost;
