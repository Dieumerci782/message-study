import { useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import { useUIStore } from './store/uiStore'
import { authService } from './lib/supabase'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Toast } from './components/Toast'
import {
  AuthPage,
  Dashboard,
  SearchPage,
  ThemesPage,
  CitationDetailPage,
  AssistantPage,
  CollectionsPage,
  StudiesPage,
  SettingsPage,
  FavoritesPage,
  NotesPage,
  HistoryPage,
} from './pages'

function App() {
  const { user, setUser, setLoading } = useAuthStore()
  const { currentPage, sidebarOpen, setSidebarOpen, toast } = useUIStore()

  // Initialize auth on mount
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true)
      const { session } = await authService.getCurrentUser()
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || 'User',
          role: 'user',
          created_at: session.user.created_at || '',
        })
      }
      setLoading(false)
    }
    initAuth()
  }, [setUser, setLoading])

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (window.innerWidth < 768 && sidebarOpen) {
      setSidebarOpen(false)
    }
  }, [currentPage, sidebarOpen, setSidebarOpen])

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'search':
        return <SearchPage />
      case 'themes':
        return <ThemesPage />
      case 'citation':
        return <CitationDetailPage />
      case 'assistant':
        return <AssistantPage />
      case 'collections':
        return <CollectionsPage />
      case 'studies':
        return <StudiesPage />
      case 'favorites':
        return <FavoritesPage />
      case 'notes':
        return <NotesPage />
      case 'history':
        return <HistoryPage />
      case 'settings':
        return <SettingsPage />
      default:
        return <Dashboard />
    }
  }

  // Show login page if not authenticated
  if (!user) {
    return <AuthPage />
  }

  return (
    <div className="flex h-screen bg-neutral-bg-primary">
      {/* Sidebar */}
      {sidebarOpen && (
        <>
          <Sidebar />
          {/* Mobile overlay */}
          <div
            className="fixed md:hidden inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        </>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      {/* Toast notifications */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}

export default App
