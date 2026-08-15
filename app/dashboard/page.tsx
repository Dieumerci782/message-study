'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { authService } from '@/lib/supabase'
import { Toaster, toast } from 'sonner'

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const { session } = await authService.getCurrentUser()
      if (!session) {
        router.push('/auth')
      }
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    setIsLoading(true)
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
      <div className="min-h-screen bg-neutral-bg-primary p-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
                Bienvenue
              </h1>
              <p className="text-neutral-text-muted">
                Gérez vos études et citations
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={handleLogout}
              isLoading={isLoading}
              disabled={isLoading}
            >
              Déconnexion
            </Button>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Stats Cards */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold text-primary-700">0</div>
                <p className="mt-2 text-sm text-neutral-text-muted">
                  Citations totales
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thèmes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold text-primary-700">0</div>
                <p className="mt-2 text-sm text-neutral-text-muted">
                  Thèmes explorés
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Études</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold text-primary-700">0</div>
                <p className="mt-2 text-sm text-neutral-text-muted">
                  Études en cours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Pages en développement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-text-muted">
                Le reste de l'application est en cours de migration vers Next.js 16.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
