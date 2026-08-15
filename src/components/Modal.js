import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './Button';
export const Modal = ({ isOpen, onClose, title, description, children, actions, size = 'md', }) => {
    if (!isOpen)
        return null;
    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
    };
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-black/50", onClick: onClose }), _jsxs("div", { className: `relative bg-white rounded-lg shadow-xl ${sizeClasses[size]} w-full mx-4`, children: [(title || description) && (_jsxs("div", { className: "border-b border-neutral-border px-6 py-4", children: [title && _jsx("h2", { className: "text-lg font-bold text-primary-800", children: title }), description && _jsx("p", { className: "text-sm text-neutral-text-secondary mt-1", children: description })] })), _jsx("div", { className: "px-6 py-4", children: children }), actions && actions.length > 0 && (_jsxs("div", { className: "border-t border-neutral-border px-6 py-4 flex gap-3 justify-end", children: [actions.map((action, i) => (_jsx(Button, { variant: action.variant || 'secondary', onClick: () => {
                                    action.onClick();
                                    onClose();
                                }, className: action.destructive ? 'bg-semantic-error text-white hover:bg-red-700' : '', children: action.label }, i))), _jsx(Button, { variant: "ghost", onClick: onClose, children: "Fermer" })] }))] })] }));
};
//# sourceMappingURL=Modal.js.map