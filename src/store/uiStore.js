import { create } from 'zustand';
export const useUIStore = create((set) => ({
    // Navigation
    currentPage: 'dashboard',
    setCurrentPage: (page) => set({ currentPage: page }),
    // Layout
    sidebarOpen: true,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
    // Display
    viewMode: 'read',
    setViewMode: (mode) => set({ viewMode: mode }),
    // Sync
    syncState: { status: 'synced' },
    setSyncState: (state) => set({ syncState: state }),
    // Loading
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),
    // Toast
    toast: null,
    showToast: (message, type) => {
        set({ toast: { message, type } });
        setTimeout(() => set({ toast: null }), 4000);
    },
    hideToast: () => set({ toast: null }),
}));
//# sourceMappingURL=uiStore.js.map