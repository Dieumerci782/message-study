import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useUIStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/lib/supabase';
export const Sidebar = () => {
    const { currentPage, setCurrentPage, setSidebarOpen, syncState } = useUIStore();
    const { user, logout } = useAuthStore();
    const navItems = [
        { id: 'dashboard', label: 'Accueil', icon: '🏠' },
        { id: 'search', label: 'Rechercher', icon: '🔍' },
        { id: 'themes', label: 'Thématiques', icon: '📚' },
        { id: 'collections', label: 'Collections', icon: '📂' },
        { id: 'studies', label: 'Mes études', icon: '📝' },
        { id: 'favorites', label: 'Favoris', icon: '⭐' },
        { id: 'notes', label: 'Notes', icon: '📋' },
        { id: 'history', label: 'Historique', icon: '⏰' },
        { id: 'assistant', label: 'Assistant', icon: '🤖' },
    ];
    const handleNavClick = (pageId) => {
        setCurrentPage(pageId);
        setSidebarOpen(false); // Close sidebar on mobile after click
    };
    const handleLogout = async () => {
        await authService.signOut();
        logout();
        setCurrentPage('dashboard');
    };
    return (_jsxs("aside", { className: "w-80 md:w-72 sidebar-bg flex flex-col fixed md:static left-0 top-0 h-screen z-50 md:z-auto transform md:transform-none transition-transform", children: [_jsx("div", { className: "p-6 border-b border-neutral-border", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-md bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white font-bold text-lg", children: "M" }), _jsxs("div", { children: [_jsx("h2", { className: "font-sans font-bold text-primary-800", children: "Message Study" }), _jsx("p", { className: "text-xs text-neutral-text-muted", children: "Premium Study Tool" })] })] }) }), _jsx("nav", { className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto", children: navItems.map((item) => (_jsxs("button", { onClick: () => handleNavClick(item.id), className: `w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all text-left ${currentPage === item.id
                        ? 'bg-primary-50 text-primary-800 border-l-2 border-accent'
                        : 'text-neutral-text-secondary hover:text-neutral-text hover:bg-neutral-bg-secondary'}`, children: [_jsx("span", { className: "text-lg", children: item.icon }), _jsx("span", { children: item.label })] }, item.id))) }), _jsx("div", { className: "px-3 py-2", children: _jsx("div", { className: "h-px bg-neutral-border" }) }), _jsxs("div", { className: "px-3 py-4 space-y-3 border-t border-neutral-border", children: [_jsxs("div", { className: "text-xs text-center", children: [syncState.status === 'synced' && (_jsx("span", { className: "text-semantic-success font-medium", children: "\u2713 Synchronis\u00E9" })), syncState.status === 'syncing' && (_jsx("span", { className: "text-semantic-info font-medium", children: "\u27F3 Synchronisation\u2026" })), syncState.status === 'offline' && (_jsx("span", { className: "text-semantic-warning font-medium", children: "\u26A0 Hors ligne" })), syncState.status === 'error' && (_jsx("span", { className: "text-semantic-error font-medium", children: "\u2715 Erreur" }))] }), user && (_jsxs("div", { className: "bg-neutral-bg-secondary rounded-lg p-3", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0", children: user.name?.charAt(0)?.toUpperCase() || 'U' }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-xs font-semibold text-neutral-text truncate", children: user.name }), _jsx("p", { className: "text-xs text-neutral-text-muted truncate", children: user.email })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => handleNavClick('settings'), className: "flex-1 btn btn-secondary text-xs py-2", children: "Param\u00E8tres" }), _jsx("button", { onClick: handleLogout, className: "flex-1 btn btn-secondary text-xs py-2", children: "D\u00E9connexion" })] })] }))] })] }));
};
//# sourceMappingURL=Sidebar.js.map