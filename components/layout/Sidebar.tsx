'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Search,
  BookOpen,
  Lightbulb,
  Heart,
  FileText,
  Settings,
  Clock,
  Inbox,
  Grid3X3,
} from 'lucide-react'

const menuItems = [
  { icon: Search, label: 'Recherche', href: '/search', id: 'search' },
  { icon: Grid3X3, label: 'Thèmes', href: '/themes', id: 'themes' },
  { icon: BookOpen, label: 'Études', href: '/studies', id: 'studies' },
  { icon: Heart, label: 'Favoris', href: '/favorites', id: 'favorites' },
  { icon: FileText, label: 'Notes', href: '/notes', id: 'notes' },
  { icon: Inbox, label: 'Collections', href: '/collections', id: 'collections' },
  { icon: Clock, label: 'Historique', href: '/history', id: 'history' },
  { icon: Lightbulb, label: 'Assistant', href: '/assistant', id: 'assistant' },
  { icon: Settings, label: 'Paramètres', href: '/settings', id: 'settings' },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-neutral-border bg-neutral-surface transition-transform md:static md:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="border-b border-neutral-border px-6 py-8">
          <h1 className="font-serif text-2xl font-semibold text-primary-700">
            Message
          </h1>
          <p className="text-xs text-neutral-text-muted">Study</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => onClose()}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all',
                  active
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-text-secondary hover:bg-neutral-bg-secondary hover:text-neutral-text'
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-neutral-border px-6 py-4">
          <p className="text-xs text-neutral-text-muted">v1.0.0</p>
        </div>
      </div>
    </>
  )
}
