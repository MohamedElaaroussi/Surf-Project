import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var BlogPost = function (_a) {
    var title = _a.title, content = _a.content;
    return (_jsx("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: title }), _jsx("p", { className: "text-gray-700", children: content })] }) }));
};
export default BlogPost;
