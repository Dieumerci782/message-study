'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { authService } from '@/lib/supabase'
import { Menu, LogOut } from 'lucide-react'
import { Toaster, toast } from 'sonner'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await authService.signOut()
    if (error) {
      toast.error('Erreur lors de la déconnexion')
      return
    }
    toast.success('Déconnecté avec succès')
    router.push('/auth')
  }

  return (
    <>
      <Toaster />
      <header className="border-b border-neutral-border bg-neutral-surface">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Menu Button (Mobile) */}
          <button
            onClick={onMenuClick}
            className="rounded-md p-2 hover:bg-neutral-bg-secondary md:hidden"
          >
            <Menu className="h-5 w-5 text-neutral-text" />
          </button>

          {/* Title */}
          <h1 className="text-xl font-semibold text-neutral-text md:text-2xl">
            Message Study
          </h1>

          {/* Actions */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Déconnexion</span>
          </Button>
        </div>
      </header>
    </>
  )
}
