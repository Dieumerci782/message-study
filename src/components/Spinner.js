import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Spinner = ({ size = 'md', label = 'Chargement…' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };
    return (_jsxs("div", { className: "flex flex-col items-center justify-center gap-3", children: [_jsx("div", { className: `${sizeClasses[size]} border-2 border-primary-100 border-t-primary-800 rounded-full animate-spin` }), label && _jsx("p", { className: "text-sm text-neutral-text-secondary", children: label })] }));
};
// Skeleton loader for content
export const Skeleton = ({ className = 'h-4', count = 1, }) => (_jsx("div", { className: "space-y-3", children: Array.from({ length: count }).map((_, i) => (_jsx("div", { className: `${className} bg-neutral-border rounded-md animate-pulse` }, i))) }));
//# sourceMappingURL=Spinner.js.map