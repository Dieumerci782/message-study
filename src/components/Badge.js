import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Badge = React.forwardRef(({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const variantClasses = {
        primary: 'badge-primary',
        success: 'badge-success',
        warning: 'badge-warning',
        error: 'badge-error',
        info: 'bg-semantic-info text-white',
    };
    const sizeClasses = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
    };
    return (_jsx("span", { ref: ref, className: `badge ${variantClasses[variant]} ${sizeClasses[size]} ${className}`, ...props, children: children }));
});
Badge.displayName = 'Badge';
//# sourceMappingURL=Badge.js.map