import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const Toast = ({ message, type, onClose }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => onClose?.(), 4000);
        return () => clearTimeout(timer);
    }, [onClose]);
    const iconMap = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠',
    };
    const bgColorMap = {
        success: 'bg-semantic-success',
        error: 'bg-semantic-error',
        info: 'bg-semantic-info',
        warning: 'bg-semantic-warning',
    };
    return (_jsxs("div", { className: `fixed top-6 right-6 z-50 ${bgColorMap[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in max-w-sm`, children: [_jsx("span", { className: "font-bold text-lg", children: iconMap[type] }), _jsx("span", { className: "text-sm font-medium", children: message }), _jsx("button", { onClick: onClose, className: "ml-auto text-white hover:opacity-80 transition-opacity", children: "\u2715" })] }));
};
//# sourceMappingURL=Toast.js.map