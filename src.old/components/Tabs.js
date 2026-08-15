import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export const Tabs = ({ tabs, defaultTab = tabs[0]?.id }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);
    return (_jsxs("div", { children: [_jsx("div", { className: "flex border-b border-neutral-border gap-1", children: tabs.map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab.id), className: `px-4 py-3 text-sm font-medium transition-all border-b-2 ${activeTab === tab.id
                        ? 'text-primary-800 border-accent'
                        : 'text-neutral-text-secondary hover:text-neutral-text border-transparent'}`, children: tab.label }, tab.id))) }), _jsx("div", { className: "mt-4", children: tabs.find((t) => t.id === activeTab)?.content })] }));
};
//# sourceMappingURL=Tabs.js.map