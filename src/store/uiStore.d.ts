import { SyncState } from '@/types';
type ViewMode = 'read' | 'study';
type PageType = 'dashboard' | 'search' | 'themes' | 'theme-detail' | 'citation' | 'collections' | 'studies' | 'favorites' | 'notes' | 'history' | 'assistant' | 'settings';
interface UIState {
    currentPage: PageType;
    setCurrentPage: (page: PageType) => void;
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    syncState: SyncState;
    setSyncState: (state: SyncState) => void;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
    toast: {
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
    } | null;
    showToast: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
    hideToast: () => void;
}
export declare const useUIStore: import("zustand").UseBoundStore<import("zustand").StoreApi<UIState>>;
export {};
//# sourceMappingURL=uiStore.d.ts.map