import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const Button = React.forwardRef(({ variant = 'primary', size = 'md', isLoading = false, icon, children, className = '', disabled, ...props }, ref) => {
    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
    };
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        ghost: 'btn-ghost',
    };
    return (_jsx("button", { ref: ref, disabled: disabled || isLoading, className: `${variantClasses[variant]} ${sizeClasses[size]} ${className}`, ...props, children: isLoading ? (_jsx("span", { className: "inline-block animate-pulse-subtle", children: "\u25CF\u25CF\u25CF" })) : (_jsxs(_Fragment, { children: [icon && _jsx("span", { className: "flex-shrink-0", children: icon }), children] })) }));
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map