'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart } from 'lucide-react'

const mockFavorites = [
  {
    id: '1',
    idea: 'La foi est la substance des choses qu\'on espère',
    theme: 'Foi',
    date: '2026-08-10',
  },
  {
    id: '2',
    idea: 'La parole de Dieu ne peut être compromise',
    theme: 'Parole',
    date: '2026-08-08',
  },
  {
    id: '3',
    idea: 'Le Saint Esprit guide les justes',
    theme: 'Esprit',
    date: '2026-08-05',
  },
]

export default function FavoritesPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
          Favoris
        </h1>
        <p className="text-neutral-text-muted">
          Vos citations et passages préférés
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="text-3xl font-bold text-accent">
              {mockFavorites.length}
            </div>
            <p className="text-sm text-neutral-text-muted">Favoris sauvegardés</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="text-3xl font-bold text-primary-700">
              {new Set(mockFavorites.map((f) => f.theme)).size}
            </div>
            <p className="text-sm text-neutral-text-muted">Thèmes couverts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="text-3xl font-bold text-semantic-success">
              100%
            </div>
            <p className="text-sm text-neutral-text-muted">Collection complète</p>
          </CardContent>
        </Card>
      </div>

      {/* List */}
      <div className="space-y-4">
        {mockFavorites.map((fav) => (
          <Card key={fav.id} className="cursor-pointer hover:shadow-md">
            <CardContent className="space-y-3 pt-6">
              <div className="flex items-start gap-4">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 fill-semantic-error text-semantic-error" />
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-neutral-text">
                    "{fav.idea}"
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="primary">{fav.theme}</Badge>
                    <span className="text-xs text-neutral-text-muted">
                      {new Date(fav.date).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
