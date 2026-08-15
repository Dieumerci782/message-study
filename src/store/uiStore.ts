import { create } from 'zustand'
import { SyncState } from '@/types'

type ViewMode = 'read' | 'study'
type PageType = 'dashboard' | 'search' | 'themes' | 'theme-detail' | 'citation' | 'collections' | 'studies' | 'favorites' | 'notes' | 'history' | 'assistant' | 'settings'

interface UIState {
  // Navigation
  currentPage: PageType
  setCurrentPage: (page: PageType) => void

  // Layout
  sidebarOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void

  // Display
  viewMode: ViewMode
  setViewMode: (mode: ViewMode) => void

  // Sync status
  syncState: SyncState
  setSyncState: (state: SyncState) => void

  // Loading states
  isLoading: boolean
  setLoading: (loading: boolean) => void

  // Toast/notifications
  toast: {
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
  } | null
  showToast: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void
  hideToast: () => void
}

export const useUIStore = create<UIState>((set) => ({
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
    set({ toast: { message, type } })
    setTimeout(() => set({ toast: null }), 4000)
  },
  hideToast: () => set({ toast: null }),
}))
