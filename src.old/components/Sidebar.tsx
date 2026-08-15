import React from 'react'
import { useUIStore } from '@/store/uiStore'
import { useAuthStore } from '@/store/authStore'
import { authService } from '@/lib/supabase'
import { Button } from './Button'

export const Sidebar: React.FC = () => {
  const { currentPage, setCurrentPage, setSidebarOpen, syncState } = useUIStore()
  const { user, logout } = useAuthStore()

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
  ]

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId as any)
    setSidebarOpen(false) // Close sidebar on mobile after click
  }

  const handleLogout = async () => {
    await authService.signOut()
    logout()
    setCurrentPage('dashboard')
  }

  return (
    <aside className="w-80 md:w-72 sidebar-bg flex flex-col fixed md:static left-0 top-0 h-screen z-50 md:z-auto transform md:transform-none transition-transform">
      {/* Header */}
      <div className="p-6 border-b border-neutral-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white font-bold text-lg">
            M
          </div>
          <div>
            <h2 className="font-sans font-bold text-primary-800">Message Study</h2>
            <p className="text-xs text-neutral-text-muted">Premium Study Tool</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all text-left ${
              currentPage === item.id
                ? 'bg-primary-50 text-primary-800 border-l-2 border-accent'
                : 'text-neutral-text-secondary hover:text-neutral-text hover:bg-neutral-bg-secondary'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="px-3 py-2">
        <div className="h-px bg-neutral-border" />
      </div>

      {/* Footer */}
      <div className="px-3 py-4 space-y-3 border-t border-neutral-border">
        {/* Sync status */}
        <div className="text-xs text-center">
          {syncState.status === 'synced' && (
            <span className="text-semantic-success font-medium">✓ Synchronisé</span>
          )}
          {syncState.status === 'syncing' && (
            <span className="text-semantic-info font-medium">⟳ Synchronisation…</span>
          )}
          {syncState.status === 'offline' && (
            <span className="text-semantic-warning font-medium">⚠ Hors ligne</span>
          )}
          {syncState.status === 'error' && (
            <span className="text-semantic-error font-medium">✕ Erreur</span>
          )}
        </div>

        {/* User profile */}
        {user && (
          <div className="bg-neutral-bg-secondary rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {user.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-neutral-text truncate">{user.name}</p>
                <p className="text-xs text-neutral-text-muted truncate">{user.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleNavClick('settings')}
                className="flex-1 btn btn-secondary text-xs py-2"
              >
                Paramètres
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 btn btn-secondary text-xs py-2"
              >
                Déconnexion
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
