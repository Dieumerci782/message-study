import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Card, CardBody, CardFooter, Button, Spinner } from '@/components';
import { useUIStore } from '@/store/uiStore';
export const ThemesPage = () => {
    const { setCurrentPage } = useUIStore();
    const [isLoading] = React.useState(false);
    const themes = [
        { id: '1', name: 'Enregistrements', description: 'Les enregistrements audio des prédications', icon: '📻', count: 234 },
        { id: '2', name: 'Diffusion du Message', description: 'La diffusion à travers le monde', icon: '📡', count: 156 },
        { id: '3', name: 'Ministères', description: 'Les différents ministères et rôles', icon: '🙏', count: 189 },
        { id: '4', name: 'Âges spirituels', description: 'Évolution spirituelle et périodes', icon: '✨', count: 267 },
        { id: '5', name: 'Révélations scientifiques', description: 'Principes scientifiques mentionnés', icon: '🔬', count: 98 },
        { id: '6', name: 'Nations et peuples', description: 'Références aux différentes nations', icon: '🌍', count: 142 },
    ];
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0", children: [_jsxs("div", { className: "mb-8 flex items-center justify-between", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800", children: "Th\u00E9matiques" }), _jsx(Button, { variant: "primary", children: "+ Nouveau th\u00E8me" })] }), isLoading ? (_jsx("div", { className: "flex justify-center py-12", children: _jsx(Spinner, { label: "Chargement des th\u00E8mes\u2026" }) })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: themes.map((theme) => (_jsxs(Card, { hover: true, className: "cursor-pointer", onClick: () => setCurrentPage('theme-detail'), children: [_jsxs(CardBody, { className: "space-y-3", children: [_jsx("div", { className: "text-4xl", children: theme.icon }), _jsx("h3", { className: "text-lg font-semibold text-primary-800", children: theme.name }), _jsx("p", { className: "text-sm text-neutral-text-secondary", children: theme.description })] }), _jsxs(CardFooter, { className: "justify-between text-xs text-neutral-text-muted", children: [_jsxs("span", { children: [theme.count, " citations"] }), _jsx("span", { children: "\u2192" })] })] }, theme.id))) }))] }));
};
//# sourceMappingURL=ThemesPage.js.map