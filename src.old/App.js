import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAuthStore } from './store/authStore';
import { useUIStore } from './store/uiStore';
import { authService } from './lib/supabase';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Toast } from './components/Toast';
import { AuthPage, Dashboard, SearchPage, ThemesPage, CitationDetailPage, AssistantPage, CollectionsPage, StudiesPage, SettingsPage, FavoritesPage, NotesPage, HistoryPage, } from './pages';
function App() {
    const { user, setUser, setLoading } = useAuthStore();
    const { currentPage, sidebarOpen, setSidebarOpen, toast } = useUIStore();
    // Initialize auth on mount
    useEffect(() => {
        const initAuth = async () => {
            setLoading(true);
            const { session } = await authService.getCurrentUser();
            if (session?.user) {
                setUser({
                    id: session.user.id,
                    email: session.user.email || '',
                    name: session.user.user_metadata?.name || 'User',
                    role: 'user',
                    created_at: session.user.created_at || '',
                });
            }
            setLoading(false);
        };
        initAuth();
    }, [setUser, setLoading]);
    // Close sidebar on mobile when navigating
    useEffect(() => {
        if (window.innerWidth < 768 && sidebarOpen) {
            setSidebarOpen(false);
        }
    }, [currentPage, sidebarOpen, setSidebarOpen]);
    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return _jsx(Dashboard, {});
            case 'search':
                return _jsx(SearchPage, {});
            case 'themes':
                return _jsx(ThemesPage, {});
            case 'citation':
                return _jsx(CitationDetailPage, {});
            case 'assistant':
                return _jsx(AssistantPage, {});
            case 'collections':
                return _jsx(CollectionsPage, {});
            case 'studies':
                return _jsx(StudiesPage, {});
            case 'favorites':
                return _jsx(FavoritesPage, {});
            case 'notes':
                return _jsx(NotesPage, {});
            case 'history':
                return _jsx(HistoryPage, {});
            case 'settings':
                return _jsx(SettingsPage, {});
            default:
                return _jsx(Dashboard, {});
        }
    };
    // Show login page if not authenticated
    if (!user) {
        return _jsx(AuthPage, {});
    }
    return (_jsxs("div", { className: "flex h-screen bg-neutral-bg-primary", children: [sidebarOpen && (_jsxs(_Fragment, { children: [_jsx(Sidebar, {}), _jsx("div", { className: "fixed md:hidden inset-0 bg-black/50 z-40", onClick: () => setSidebarOpen(false) })] })), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1 overflow-y-auto", children: renderPage() })] }), toast && _jsx(Toast, { message: toast.message, type: toast.type })] }));
}
export default App;
//# sourceMappingURL=App.js.map