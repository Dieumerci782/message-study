import React from 'react';
interface TabsProps {
    tabs: Array<{
        id: string;
        label: string;
        content: React.ReactNode;
    }>;
    defaultTab?: string;
}
export declare const Tabs: React.FC<TabsProps>;
export {};
//# sourceMappingURL=Tabs.d.ts.map