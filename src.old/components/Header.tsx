import React from 'react'
import { useUIStore } from '@/store/uiStore'
import { useAuthStore } from '@/store/authStore'
import { Button } from './Button'

export const Header: React.FC = () => {
  const { currentPage, toggleSidebar, viewMode, setViewMode } = useUIStore()
  const { user } = useAuthStore()

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
  }

  return (
    <header className="h-16 bg-white border-b border-neutral-border px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-2xl text-primary-800 hover:text-primary-700 transition-colors"
        >
          ☰
        </button>

        {/* Page title */}
        <h1 className="text-2xl font-bold text-primary-800">
          {pageTitle[currentPage as keyof typeof pageTitle] || 'Message Study'}
        </h1>
      </div>

      {/* Header actions */}
      <div className="flex items-center gap-4">
        {/* View mode toggle */}
        {currentPage !== 'settings' && (
          <div className="hidden sm:flex bg-neutral-bg-primary rounded-md p-1">
            <button
              onClick={() => setViewMode('read')}
              className={`px-3 py-2 text-xs font-semibold rounded transition-all ${
                viewMode === 'read'
                  ? 'bg-white text-primary-800 shadow-sm'
                  : 'text-neutral-text-secondary hover:text-neutral-text'
              }`}
            >
              Lecture
            </button>
            <button
              onClick={() => setViewMode('study')}
              className={`px-3 py-2 text-xs font-semibold rounded transition-all ${
                viewMode === 'study'
                  ? 'bg-white text-primary-800 shadow-sm'
                  : 'text-neutral-text-secondary hover:text-neutral-text'
              }`}
            >
              Étude
            </button>
          </div>
        )}

        {/* User menu (simplified) */}
        {user && (
          <div className="flex items-center gap-3 pl-4 border-l border-neutral-border">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white text-xs font-bold">
              {user.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <span className="hidden sm:inline text-sm text-neutral-text-secondary">{user.name}</span>
          </div>
        )}
      </div>
    </header>
  )
}
