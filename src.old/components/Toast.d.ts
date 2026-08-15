import React from 'react';
interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    onClose?: () => void;
}
export declare const Toast: React.FC<ToastProps>;
export {};
//# sourceMappingURL=Toast.d.ts.map