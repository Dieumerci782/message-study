import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useUIStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
export const Header = () => {
    const { currentPage, toggleSidebar, viewMode, setViewMode } = useUIStore();
    const { user } = useAuthStore();
    const pageTitle = {
        dashboard: 'Accueil',
        search: 'Rechercher',
        themes: 'Thématiques',
        'theme-detail': 'Enregistrements',
        citation: 'Citation détaillée',
        collections: 'Collections',
        studies: 'Mes études',
        favorites: 'Favoris',
        notes: 'Mes notes',
        history: 'Historique',
        assistant: 'Assistant du Message',
        settings: 'Paramètres',
    };
    return (_jsxs("header", { className: "h-16 bg-white border-b border-neutral-border px-6 flex items-center justify-between sticky top-0 z-20", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: toggleSidebar, className: "md:hidden text-2xl text-primary-800 hover:text-primary-700 transition-colors", children: "\u2630" }), _jsx("h1", { className: "text-2xl font-bold text-primary-800", children: pageTitle[currentPage] || 'Message Study' })] }), _jsxs("div", { className: "flex items-center gap-4", children: [currentPage !== 'settings' && (_jsxs("div", { className: "hidden sm:flex bg-neutral-bg-primary rounded-md p-1", children: [_jsx("button", { onClick: () => setViewMode('read'), className: `px-3 py-2 text-xs font-semibold rounded transition-all ${viewMode === 'read'
                                    ? 'bg-white text-primary-800 shadow-sm'
                                    : 'text-neutral-text-secondary hover:text-neutral-text'}`, children: "Lecture" }), _jsx("button", { onClick: () => setViewMode('study'), className: `px-3 py-2 text-xs font-semibold rounded transition-all ${viewMode === 'study'
                                    ? 'bg-white text-primary-800 shadow-sm'
                                    : 'text-neutral-text-secondary hover:text-neutral-text'}`, children: "\u00C9tude" })] })), user && (_jsxs("div", { className: "flex items-center gap-3 pl-4 border-l border-neutral-border", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white text-xs font-bold", children: user.name?.charAt(0)?.toUpperCase() || 'U' }), _jsx("span", { className: "hidden sm:inline text-sm text-neutral-text-secondary", children: user.name })] }))] })] }));
};
//# sourceMappingURL=Header.js.map